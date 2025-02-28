"use client";
import Image from "next/image";
import SectionHeader from "./section-header";
import { useState, useEffect } from "react";

interface Track {
  artists: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_playable: boolean;
  name: string;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
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
            {/* No album images available in the data provided */}
            <div className="flex-grow">
              <p className="text-sm font-medium truncate">{track.name}</p>
              <p className="text-xs text-gray-400 truncate">
                {track.artists.map((artist) => artist.name).join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}