import HeroSection from "@/components/hero-section"
import LatestReleases from "@/components/latest-releases"
import OfficialVideos from "@/components/official-videos"
import Merch from "@/components/merch"
import MusicGrid from "@/components/music-grid"
import MoreSection from "@/components/more-section"
import TabsSection from "@/components/tabs-section"
import FAQSection from "@/components/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="w-full max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <HeroSection />
        <TabsSection />
        <div className="grid grid-cols-1 gap-8">
          <MusicGrid />
          <OfficialVideos />
          <Merch />
          <FAQSection />
          <MoreSection />
        </div>
      </div>
    </main>
  )
}

