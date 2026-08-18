"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

type CarouselImage = {
  src: string
  label: string
}

type Props = {
  items: CarouselImage[]
  variant?: "wide" | "gallery"
}

export function ImageCarousel({ items, variant = "wide" }: Props) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [selectedImage, setSelectedImage] = useState<CarouselImage | null>(null)

  const dialogRef = useRef<HTMLDialogElement>(null)

  const isGallery = variant === "gallery"

  useEffect(() => {
    if (!api) return

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    handleSelect()

    api.on("select", handleSelect)

    return () => {
      api.off("select", handleSelect)
    }
  }, [api])

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog) return

    if (selectedImage) {
      dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [selectedImage])

  const handleDialogClose = () => {
    setSelectedImage(null)
  }

  const snapCount = api?.scrollSnapList().length ?? 0

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: isGallery ? "start" : "center",
          slidesToScroll: isGallery ? 3 : 1,
        }}
      >
        <div className="overflow-hidden rounded-sm">
          <CarouselContent className={isGallery ? "-ml-3" : undefined}>
            {items.map((img, idx) => (
              <CarouselItem
                key={img.src}
                className={isGallery ? "basis-1/3 pl-3" : undefined}
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  className="block w-full cursor-pointer text-left"
                  aria-label={`Open ${img.label}`}
                >
                  <div
                    className={
                      isGallery
                        ? "relative aspect-[9/20] w-full overflow-hidden rounded-sm"
                        : "relative aspect-video w-full overflow-hidden rounded-sm"
                    }
                  >
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      priority={idx === 0}
                      sizes={
                        isGallery
                          ? "33.333vw"
                          : "(max-width: 768px) 100vw, 900px"
                      }
                      className="object-contain"
                    />

                    <Badge
                      className={
                        isGallery
                          ? "absolute bottom-2 left-2 z-10 max-w-[calc(100%-1rem)] truncate bg-black/70 px-1.5 py-1 text-[0.5rem] text-white backdrop-blur-sm"
                          : "absolute bottom-3 left-3 z-10 bg-black/70 p-1.5 text-white backdrop-blur-sm"
                      }
                    >
                      {img.label}
                    </Badge>
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>

        {/* Desktop arrows */}
        <CarouselPrevious className="absolute top-1/2 -left-5 z-20 hidden h-9 w-9 -translate-y-1/2 border border-gray-200 shadow-md hover:bg-gray-50 md:flex" />

        <CarouselNext className="absolute top-1/2 -right-5 z-20 hidden h-9 w-9 -translate-y-1/2 border border-gray-200 shadow-md hover:bg-gray-50 md:flex" />
      </Carousel>

      {/* Mobile dots */}
      {snapCount > 1 && (
        <div className="mt-4 flex justify-center gap-2 md:hidden">
          {Array.from({ length: snapCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to image group ${index + 1}`}
              aria-current={current === index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-transform ${
                current === index
                  ? "scale-125 bg-foreground"
                  : "bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      )}

      {/* Native image dialog */}
      <dialog
        ref={dialogRef}
        onClose={handleDialogClose}
        className="fixed inset-0 m-0 h-screen w-screen max-w-none border-0 bg-transparent p-0 outline-none backdrop:bg-black/80"
      >
        {selectedImage && (
          <div
            className="fixed inset-0 flex items-center justify-center p-4"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                dialogRef.current?.close()
              }
            }}
          >
            <div className="relative max-h-[90vh] max-w-[95vw]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.label}
                width={1600}
                height={1200}
                sizes="95vw"
                className="max-h-[90vh] w-auto max-w-[95vw] object-contain"
              />

              <Button
                type="button"
                variant="secondary"
                size="icon"
                onClick={() => dialogRef.current?.close()}
                className="absolute top-3 -right-12 z-10 rounded-full bg-black/70 text-white backdrop-blur-sm hover:bg-black/90 hover:text-white"
                aria-label="Close image"
              >
                <X className="h-4 w-4" />
              </Button>

              <Badge className="absolute bottom-3 left-3 z-10 bg-black/70 p-1.5 text-white backdrop-blur-sm">
                {selectedImage.label}
              </Badge>
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}
