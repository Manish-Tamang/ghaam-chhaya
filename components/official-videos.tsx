"use client"
import ReactPlayer from "react-player"
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"
import type { CarouselApi } from "@/components/ui/carousel"
import { videos, VideoType } from '@/data/videos'; 

export default function OfficialVideos() {
  const [api, setApi] = useState<CarouselApi>()
  const [playing, setPlaying] = useState<number | null>(null);
  const playerRefs = useRef<(ReactPlayer | null)[]>([])
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);



  const handlePlayPause = (videoId: number) => {
    setPlaying((prevPlaying) => (prevPlaying === videoId ? null : videoId));
  };

  const isVideoPlaying = (videoId: number): boolean => {
    return playing === videoId;
  };

  const handleMouseEnter = (videoId: number) => {
    setHoveredVideo(videoId);
  };

  const handleMouseLeave = () => {
    setHoveredVideo(null);
  };


  return (
    <section className="mt-12" id="official-videos">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Official Videos</h2>
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
          {videos.map((video, index) => (
            <CarouselItem
              key={video.id}
              className="md:basis-1/2 lg:basis-1/2"
              onMouseEnter={() => handleMouseEnter(video.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative group">
                <div
                  className="relative aspect-video w-full cursor-pointer"
                  onClick={() => handlePlayPause(video.id)}
                >
                  {
                    !isVideoPlaying(video.id) && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50" onClick={() => handlePlayPause(video.id)}>
                        <img
                          src={video.thumbnail}
                          alt={`${video.title} Thumbnail`}
                          className="object-cover w-full h-full"
                          style={{ objectFit: 'cover' }}
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full h-12 w-12 bg-black/50 text-white hover:bg-black/75 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          onClick={() => handlePlayPause(video.id)}
                        >
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                    )
                  }
                  <ReactPlayer
                    ref={(el) => { playerRefs.current[index] = el; }}
                    url={`${video.url}?modestbranding=1&showinfo=0&rel=0&controls=false`}
                    width="100%"
                    height="100%"
                    playing={isVideoPlaying(video.id)}
                    config={{
                      youtube: {
                        playerVars: { modestbranding: 1, showinfo: 0, rel: 0, controls: 0 },
                      },
                    }}
                  />
                  <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${hoveredVideo === video.id && !isVideoPlaying(video.id) ? 'opacity-100' : hoveredVideo === video.id && isVideoPlaying(video.id) ? 'opacity-0' : isVideoPlaying(video.id) ? 'opacity-0' : 'opacity-0'
                      }`}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full h-12 w-12 bg-black/50 text-white hover:bg-black/75"
                      onClick={() => handlePlayPause(video.id)}
                    >
                      {isVideoPlaying(video.id) ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                    </Button>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold truncate">{video.title}</h3>
                  <p className="text-sm text-gray-400">{video.channel}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}