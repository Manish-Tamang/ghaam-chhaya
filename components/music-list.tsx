"use client";
import Image from "next/image";
import SectionHeader from "./section-header";
import { useState, useEffect } from "react";

interface Track {
  album: {
    images: { url: string }[];
    name: string;
  };
  artists: { name: string }[];
  id: string;
  name: string;
  uri: string;
}

interface ArtistTracksResponse {
  tracks: Track[];
}

export default function MusicList() {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/spotify/artist-tracks");
        if (!res.ok) {
          throw new Error(`Failed to fetch artist tracks: ${res.status}`);
        }
        const data: ArtistTracksResponse = await res.json();
        setTracks(data.tracks);
      } catch (error: any) {
        console.error("Error fetching artist tracks:", error);
        setTracks([]);
      }
    };

    fetchData();
  }, []);


  return (
    <section className="mt-8">
      <SectionHeader title="Music" />

      <div className="space-y-4">
        {tracks.map((track) => (
          <div key={track.id} className="flex items-center space-x-3">
            {track.album.images[0]?.url && (
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src={track.album.images[0].url}
                  alt={track.name}
                  fill
                  className="object-cover rounded-sm"
                  onError={(e) => {
                    console.error("Error loading image", e);
                  }}
                />
              </div>
            )}
            <div className="flex-grow">
              <p className="text-sm font-medium truncate">{track.name}</p>
              <p className="text-xs text-gray-400 truncate">{`${track.album.name} • ${track.artists.map((artist) => artist.name).join(", ")}`}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}