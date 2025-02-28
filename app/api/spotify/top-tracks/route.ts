import { NextResponse } from "next/server";
import { getAccessToken } from "@/lib/utils";

const ARTIST_ID = '1D0B4qrMRfjzDfBlijs3YH';

export async function GET() {
  try {
    const accessToken = await getAccessToken();

    if (!accessToken) {
      return NextResponse.json(
        { error: "Failed to obtain access token" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://api.spotify.com/v1/artists/${ARTIST_ID}/top-tracks?market=US`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error("Spotify API Error:", response.status, response.statusText);
      const errorBody = await response.text();
      console.error("Error Body:", errorBody);
      return NextResponse.json(
        { error: `Spotify API error: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Error fetching top tracks:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
