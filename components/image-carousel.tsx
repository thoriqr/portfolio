"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
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

const SWIPE_THRESHOLD = 48

function isCarouselControl(target: EventTarget | null) {
  return (
    target instanceof Element && target.closest("[data-carousel-control]") !== null
  )
}

export function ImageCarousel({ items, variant = "wide" }: Props) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const dialogRef = useRef<HTMLDialogElement>(null)
  const swipeStart = useRef<{ x: number; y: number } | null>(null)

  const isGallery = variant === "gallery"
  const selectedImage = selectedIndex === null ? null : items[selectedIndex]

  useEffect(() => {
    if (!api) return

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    handleSelect()

    api.on("select", handleSelect)
    api.on("reInit", handleSelect)

    return () => {
      api.off("select", handleSelect)
      api.off("reInit", handleSelect)
    }
  }, [api])

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog) return

    if (selectedImage) {
      if (!dialog.open) dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [selectedImage])

  const step = (direction: 1 | -1) => {
    setSelectedIndex((index) => {
      if (index === null) return index

      return (index + direction + items.length) % items.length
    })
  }

  const snapCount = api?.scrollSnapList().length ?? 0

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: isGallery ? "start" : "center",
          slidesToScroll: 1,
          // Embla cancels the in-flight slide animation on mousedown anywhere
          // inside its root, including the arrow buttons, which then swallows
          // the click. Ignore drags that start on a control.
          watchDrag: (_api, event) => !isCarouselControl(event.target),
        }}
      >
        <div className="overflow-hidden">
          <CarouselContent className={isGallery ? "-ml-3" : undefined}>
            {items.map((img, idx) => (
              <CarouselItem
                key={img.src}
                className={isGallery ? "basis-1/3 pl-3" : undefined}
              >
                <button
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className="block w-full cursor-zoom-in text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  aria-label={`Open ${img.label}`}
                >
                  <div
                    className={
                      isGallery
                        ? "relative aspect-[9/20] w-full overflow-hidden border bg-muted/40"
                        : "relative aspect-video w-full overflow-hidden border bg-muted/40"
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
                          ? "absolute bottom-2 left-2 z-10 max-w-[calc(100%-1rem)] truncate border bg-background/90 px-1.5 py-1 font-mono text-[0.5rem] font-medium tracking-normal text-foreground normal-case backdrop-blur-sm"
                          : "absolute bottom-3 left-3 z-10 border bg-background/90 px-2 py-1 font-mono text-[0.625rem] font-medium tracking-normal text-foreground normal-case backdrop-blur-sm"
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

        <Button
          type="button"
          variant="outline"
          size="icon"
          data-carousel-control
          onClick={() => api?.scrollPrev()}
          className="absolute top-1/2 left-2 z-20 -translate-y-1/2 bg-background/90 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="size-4" />
        </Button>

        <Button
          type="button"
          variant="outline"
          size="icon"
          data-carousel-control
          onClick={() => api?.scrollNext()}
          className="absolute top-1/2 right-2 z-20 -translate-y-1/2 bg-background/90 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="size-4" />
        </Button>
      </Carousel>

      {snapCount > 1 && (
        <div className="-mt-1 flex flex-wrap justify-center gap-0.5">
          {Array.from({ length: snapCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              data-carousel-control
              aria-label={`Go to image group ${index + 1}`}
              aria-current={current === index}
              onClick={() => api?.scrollTo(index)}
              className="flex size-11 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <span
                className={`size-1.5 transition-transform ${
                  current === index
                    ? "scale-150 bg-foreground"
                    : "bg-muted-foreground/40"
                }`}
              />
            </button>
          ))}
        </div>
      )}

      <dialog
        ref={dialogRef}
        onClose={() => setSelectedIndex(null)}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault()
            step(-1)
          } else if (event.key === "ArrowRight") {
            event.preventDefault()
            step(1)
          }
        }}
        className="fixed inset-0 m-0 h-screen w-screen max-w-none border-0 bg-transparent p-0 outline-none backdrop:bg-black/80"
      >
        {selectedImage && selectedIndex !== null && (
          <div className="fixed inset-0 flex flex-col">
            {/* Controls sit on the viewport, not the image. Anchoring them to
                the image pushed them off-screen whenever the image was wide. */}
            <div className="flex items-center justify-between gap-3 px-3 py-2">
              <p
                className="font-mono text-[0.625rem] tracking-[0.1em] text-background/80 uppercase"
                aria-live="polite"
              >
                {selectedIndex + 1} / {items.length}
              </p>

              <div className="flex items-center gap-1.5">
                {items.length > 1 && (
                  <>
                    <Button
                      type="button"
                      variant="secondary"
                      size="icon"
                      onClick={() => step(-1)}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="size-4" />
                    </Button>

                    <Button
                      type="button"
                      variant="secondary"
                      size="icon"
                      onClick={() => step(1)}
                      aria-label="Next image"
                    >
                      <ChevronRight className="size-4" />
                    </Button>
                  </>
                )}

                <Button
                  type="button"
                  variant="secondary"
                  size="icon"
                  onClick={() => dialogRef.current?.close()}
                  aria-label="Close image"
                >
                  <X className="size-4" />
                </Button>
              </div>
            </div>

            <div
              className="flex min-h-0 flex-1 items-center justify-center overflow-hidden p-3"
              onClick={(event) => {
                if (event.target === event.currentTarget) {
                  dialogRef.current?.close()
                }
              }}
            >
              <div
                className="relative select-none"
                style={{ touchAction: "pan-y pinch-zoom" }}
                onPointerDown={(event) => {
                  if (event.pointerType === "mouse") return

                  swipeStart.current = { x: event.clientX, y: event.clientY }
                }}
                onPointerUp={(event) => {
                  const start = swipeStart.current

                  swipeStart.current = null

                  if (!start) return

                  const deltaX = event.clientX - start.x
                  const deltaY = event.clientY - start.y

                  if (Math.abs(deltaX) < SWIPE_THRESHOLD) return
                  if (Math.abs(deltaX) < Math.abs(deltaY)) return

                  step(deltaX < 0 ? 1 : -1)
                }}
                onPointerCancel={() => {
                  swipeStart.current = null
                }}
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.label}
                  width={1600}
                  height={1200}
                  sizes="95vw"
                  draggable={false}
                  className="block h-auto max-h-[calc(100dvh-6rem)] w-auto max-w-[calc(100vw-1.5rem)] object-contain"
                />

                <Badge className="absolute bottom-2 left-2 z-10 max-w-[calc(100%-1rem)] truncate border bg-background/90 px-2 py-1 font-mono text-[0.625rem] font-medium tracking-normal text-foreground normal-case backdrop-blur-sm">
                  {selectedImage.label}
                </Badge>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}
