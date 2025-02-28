"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OfficialVideos from "./official-videos"
import Merch from "./merch"
import MusicGrid from "./music-grid"
import MoreSection from "./more-section"
import Image from "next/image"

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState<string | null>(null)

  const handleTabChange = (value: string) => {
    setActiveTab(value === activeTab ? null : value)
  }

  return (
    <Tabs value={activeTab || ""} onValueChange={handleTabChange} className="w-full max-w-[860px] mx-auto my-6">
      <TabsList className="grid w-full grid-cols-5 bg-black">
        <TabsTrigger value="videos" className="text-xs font-medium">
          Videos
        </TabsTrigger>
        <TabsTrigger value="merch" className="text-xs font-medium">
          Merch
        </TabsTrigger>
        <TabsTrigger value="music" className="text-xs font-medium">
          Music
        </TabsTrigger>
        <TabsTrigger value="about" className="text-xs font-medium">
          About
        </TabsTrigger>
        <TabsTrigger value="more" className="text-xs font-medium">
          More
        </TabsTrigger>
      </TabsList>
      {activeTab && (
        <>
          <TabsContent value="videos">
            <OfficialVideos />
          </TabsContent>
          <TabsContent value="merch">
            <Merch />
          </TabsContent>
          <TabsContent value="music">
            <MusicGrid />
          </TabsContent>
          <TabsContent value="about">
            <div className="bg-gradient-to-b from-neutral-900 to-black text-white p-6 rounded-lg">
              <div className="md:flex items-start gap-8">
                <div className="mb-6 md:mb-0 md:w-1/3 flex-shrink-0">
                  <div className="relative group">
                    <div className="relative">
                      <Image
                        src="/yabesh.png"
                        alt="Yabesh Thapa"
                        width={300}
                        height={300}
                        className="rounded-full object-cover w-full aspect-square"
                      />
                    </div>
                    <h2 className="text-2xl font-bold mt-4 text-center">Yabesh Thapa</h2>
                  </div>
                </div>
                <div className="md:w-2/3 space-y-6">
                  <div className="prose prose-invert max-w-none">
                    <p className="leading-relaxed text-gray-200">
                      Yabesh Thapa, a talented musician from Kathmandu, is known for his heartfelt lyrics and soulful music. He tells stories through his songs, capturing emotions, love, and life's ups and downs. His journey began in 2019 with ClassX, a turning point that set him on the path to success.
                    </p>
                    <p className="leading-relaxed text-gray-200">
                      His debut song, <span className="font-bold text-blue-400">Laakhau Hajarau</span>, became a massive hit, winning the hearts of many and establishing him as a rising star in Nepali music. He followed up with more beautiful songs like <span className="font-bold text-blue-400">Ae Mutu</span>, <span className="font-bold text-blue-400">Aankhale</span>, <span className="font-bold text-blue-400">Alapatra</span>, and <span className="font-bold text-blue-400">Jhari</span>, proving that his success was no fluke. Even his unreleased songs are loved by fans, showing the deep connection people have with his music.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-4 rounded-lg border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold mb-2 text-white">GHAAM CHHAYA</h3>
                    <p className="text-gray-200 leading-relaxed">
                      The name reflects the uncertainty of life—sunshine and shadows, ups and downs. To him, it's a reminder that <span className="italic font-medium">it's okay to not be okay—the sun will shine again.</span>
                    </p>
                    <p className="text-gray-200 mt-3">
                      Yabesh is a versatile artist, constantly experimenting with different styles and pushing his musical boundaries. He is now working on his first album, <span className="font-bold text-blue-400">Ghaam Chhaya</span>.
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center mb-3">
                      <div className="h-px flex-1 bg-gray-700"></div>
                      <span className="px-4 text-sm text-gray-400 font-medium">PERSONAL NOTE</span>
                      <div className="h-px flex-1 bg-gray-700"></div>
                    </div>
                    <p className="leading-relaxed text-gray-300 italic">
                      The number <span className="font-bold text-purple-400">2059</span> holds special meaning for him—it's the year he was born. He hopes to leave behind a small piece of art that will live on, inspiring people long after he's gone.
                    </p>
                    <p className="leading-relaxed text-gray-300 mt-3">
                      Yabesh continues to grow and explore new sounds, always striving to create something fresh yet familiar. With <span className="font-bold text-blue-400">Ghaam Chhaya</span> on the way, fans can expect more heartfelt music from this poetic storyteller.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="more">
            <MoreSection />
          </TabsContent>
        </>
      )}
    </Tabs>
  )
}