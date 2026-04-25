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
          {items.map((img, index) => (
            <CarouselItem key={index}>
              <div className="relative overflow-hidden rounded-sm border">
                <Image
                  src={img.src}
                  alt={img.label}
                  width={1200}
                  height={800}
                  className="object-cover"
                  priority={index === 0}
                />

                <Badge className="absolute bottom-3 left-3 z-10 bg-black/70 p-1.5 text-white backdrop-blur-sm">
                  {img.label}
                </Badge>
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
    </div>
  )
}
