import Image from "next/image";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaSpotify, FaApple } from "react-icons/fa";
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative w-full h-80">
      <Image src="/bg.jpg" alt="John Legend" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
        <div className="max-w-[860px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-4">
          <h1 className="text-3xl font-bold tracking-wider">YABESH THAPA</h1>
          <div className="flex space-x-3 mt-2">
            <Link href="https://www.instagram.com/yabush69/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} className="text-gray-300" />
            </Link>
            <Link href="https://www.facebook.com/yabeshthapamusic" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} className="text-gray-300" />
            </Link>
            <Link href="https://x.com/yabush69" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} className="text-gray-300" />
            </Link>
            <Link href="https://www.youtube.com/@YabeshThapa" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={20} className="text-gray-300" />
            </Link>
            <Link href="https://open.spotify.com/artist/1D0B4qrMRfjzDfBlijs3YH?si=TybZBF9yQd-KzLYGbwFBgQ" target="_blank" rel="noopener noreferrer">
              <FaSpotify size={20} className="text-gray-300" />
            </Link>
            <Link href="https://music.apple.com/np/artist/yabesh-thapa/1510737030" target="_blank" rel="noopener noreferrer">
              <FaApple size={20} className="text-gray-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}