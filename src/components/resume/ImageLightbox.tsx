import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type LightboxOpen = { src: string; alt: string }

type ImageLightboxProps = {
  open: LightboxOpen | null
  onDismiss: () => void
}

/**
 * Full-size image in a fixed overlay (backdrop click, Escape, close button).
 * Open state is purely declarative: when `open` is null, nothing is mounted.
 */
export function ImageLightbox({ open, onDismiss }: ImageLightboxProps) {
  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={open.alt}
      tabIndex={-1}
      autoFocus
      className={cn(
        "fixed inset-0 z-50 box-border flex min-h-[100dvh] w-full flex-col items-center justify-center bg-black/70 p-3 outline-none backdrop-blur-[2px] sm:p-6",
      )}
      onClick={onDismiss}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          e.preventDefault()
          onDismiss()
        }
      }}
    >
      <div
        className="relative inline-block max-h-[min(90dvh,56rem)] max-w-[min(92vw,56rem)]"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          type="button"
          variant="secondary"
          size="icon-sm"
          className="absolute -right-1 -top-1 z-10 shadow-md sm:-right-2 sm:-top-2"
          onClick={onDismiss}
          aria-label="Close enlarged image"
        >
          <X className="size-4" aria-hidden />
        </Button>
        <img
          src={open.src}
          alt={open.alt}
          className="block max-h-[min(90dvh,56rem)] max-w-[min(92vw,56rem)] rounded-md border border-border/80 bg-background object-contain shadow-lg"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  )
}
