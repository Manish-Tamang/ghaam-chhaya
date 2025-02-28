"use client";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import { BlurFadeImage } from "./ui/BlurFade";

interface Track {
  album: {
    images: { url: string }[];
  };
  artists: { name: string }[];
  id: string;
  name: string;
}

interface TopTracks {
  tracks: Track[];
}

export default function MusicGrid() {
  const [api, setApi] = useState<CarouselApi>();
  const [songs, setSongs] = useState<Track[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/spotify/top-tracks");
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }
        const data: TopTracks = await res.json();
        setSongs(data.tracks);
      } catch (error: any) {
        console.error("Error fetching top tracks:", error);
        setSongs([]);
      }
    };

    fetchData();
  }, []); 


  return (
    <section className="mt-12" id="music">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Music</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={() => api?.scrollPrev()}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={() => api?.scrollNext()}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {songs.map((song) => (
            <CarouselItem key={song.id} className="md:basis-1/3 lg:basis-1/4">
              <div className="relative group">
                <div className="relative aspect-square w-full">
                  {song.album.images[0]?.url && (
                    <BlurFadeImage
                      src={song.album.images[0].url}
                      alt={song.name}
                      className="object-cover rounded-md"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" fill="white" />
                  </div>
                </div>
                <div className="mt-2">
                  <h3 className="text-base font-semibold truncate">{song.name}</h3>
                  <p className="text-sm text-gray-400">{song.artists.map(artist => artist.name).join(', ')}</p>
                  <button className="mt-2 px-4 py-1 text-xs border border-white rounded-full hover:bg-white hover:text-black transition-colors">
                    Play
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}