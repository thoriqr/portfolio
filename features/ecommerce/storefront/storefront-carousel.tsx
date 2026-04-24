"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { STOREFRONT_IMAGES } from "./constants"
import { useEffect, useState } from "react"

export function StorefrontCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    handleSelect() // sync

    api.on("select", handleSelect)

    return () => {
      api.off("select", handleSelect) //  cleanup
    }
  }, [api])

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          containScroll: "trimSnaps",
        }}
      >
        <CarouselContent>
          {STOREFRONT_IMAGES.map((img, index) => (
            <CarouselItem key={index}>
              <div className="overflow-hidden rounded-sm border">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={800}
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Desktop arrows */}
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      {/* Mobile dots */}
      <div className="mt-4 flex justify-center gap-2 md:hidden">
        {STOREFRONT_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-transform ${
              current === index
                ? "scale-125 bg-foreground"
                : "bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
