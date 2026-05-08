"use client"

import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import Image from "next/image"
import { Badge } from "./ui/badge"

type CarouselItem = {
  src: string
  label: string
}

type Props = {
  items: CarouselItem[]
}

export function ImageCarousel({ items }: Props) {
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
    <>
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
      >
        <div className="overflow-hidden rounded-sm">
          <CarouselContent>
            {items.map((img, idx) => (
              <CarouselItem key={idx}>
                <div className="relative aspect-video w-full">
                  <Image
                    src={img.src}
                    alt={img.label}
                    sizes="100vw"
                    fill
                    loading={idx === 0 ? "eager" : "lazy"}
                    className="object-cover"
                  />

                  <Badge className="absolute bottom-3 left-3 z-10 bg-black/70 p-1.5 text-white backdrop-blur-sm">
                    {img.label}
                  </Badge>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>

        {/* Desktop arrows */}
        <CarouselPrevious className="absolute top-1/2 -left-5 z-20 hidden h-9 w-9 -translate-y-1/2 border border-gray-200 shadow-md hover:bg-gray-50 md:flex" />
        <CarouselNext className="absolute top-1/2 -right-5 z-20 hidden h-9 w-9 -translate-y-1/2 border border-gray-200 shadow-md hover:bg-gray-50 md:flex" />
      </Carousel>

      {/* Mobile dots */}
      <div className="mt-4 flex justify-center gap-2 md:hidden">
        {items.map((_, index) => (
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
    </>
  )
}
