import Image from "next/image";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaSpotify, FaApple } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="relative w-full h-80">
      <Image src="/bg.jpg" alt="John Legend" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
        <div className="max-w-[860px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-4">
          <h1 className="text-3xl font-bold tracking-wider">YABESH THAPA</h1>
          <div className="flex space-x-3 mt-2">
            <FaInstagram size={20} className="text-gray-300" />
            <FaFacebook size={20} className="text-gray-300" />
            <FaTwitter size={20} className="text-gray-300" />
            <FaYoutube size={20} className="text-gray-300" />
            <FaSpotify size={20} className="text-gray-300" />
            <FaApple size={20} className="text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
