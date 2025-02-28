import { NextResponse } from 'next/server';
import { getAccessToken } from '@/lib/utils';

const ARTIST_ID = '1D0B4qrMRfjzDfBlijs3YH';

export async function GET(request: Request) {
  try {
    const accessToken = await getAccessToken();

    if (!accessToken) {
      return NextResponse.json({ error: 'Failed to obtain access token' }, { status: 500 });
    }

    const { searchParams } = new URL(request.url);
    const offset = searchParams.get('offset') || '0'; 
    const limit = searchParams.get('limit') || '50'; 

    const response = await fetch(
      `https://api.spotify.com/v1/artists/${ARTIST_ID}/albums?include_groups=album,single&market=US&limit=${limit}&offset=${offset}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      console.error('Spotify API Error:', response.status, response.statusText);
      const errorBody = await response.text();
      console.error('Error Body:', errorBody);
      return NextResponse.json({ error: `Spotify API error: ${response.statusText}` }, { status: response.status });
    }

    const data = await response.json();
    const allTracks = [];
    if (data.items && data.items.length > 0) {
        for (const album of data.items) {
            const albumTracksResponse = await fetch(
                `https://api.spotify.com/v1/albums/${album.id}/tracks?market=US`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                    cache: 'no-store',
                }
            );

            if (!albumTracksResponse.ok) {
                console.error('Spotify API Error (Album Tracks):', albumTracksResponse.status, albumTracksResponse.statusText);
                continue; 
            }

            const albumTracksData = await albumTracksResponse.json();
            if (albumTracksData.items && albumTracksData.items.length > 0) {
                allTracks.push(...albumTracksData.items);
            }
        }
    }

    return NextResponse.json({ tracks: allTracks });

  } catch (error: any) {
    console.error('Error fetching artist albums:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}