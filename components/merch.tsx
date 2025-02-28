"use client"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import type { CarouselApi } from "@/components/ui/carousel"
import { products, ProductType } from '@/data/merch';
import Link from 'next/link'; 
import { BlurFadeImage } from "./ui/BlurFade"

export default function Merch() {
  const [api, setApi] = useState<CarouselApi>()



  return (
    <section className="mt-12" id="merch">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Merch</h2>
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
          {products.map((product) => (
            <CarouselItem key={product.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Link href={product.href} className="group"> {/* Wrap the product in a Link */}
                <div className="relative aspect-square w-full bg-white rounded-lg overflow-hidden">
                  <BlurFadeImage
                    src={product.image}
                    alt={product.name}
                    className="object-contain p-4 transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="text-sm font-medium truncate">{product.name}</h3>
                  <p className="text-sm text-gray-400">${product.price.toFixed(2)}</p>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}