import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

import { type ProductCallout } from "@/data/resume"
import { cn } from "@/lib/utils"

import { ImageLightbox } from "./ImageLightbox"

type ExperienceProductCalloutProps = {
  product: ProductCallout
  className?: string
}

export function ExperienceProductCallout({ product, className }: ExperienceProductCalloutProps) {
  const [lightbox, setLightbox] = useState<{
    src: string
    alt: string
  } | null>(null)

  const diagramCaption = product.diagramCaption ?? "Architecture diagram"

  return (
    <div
      id={product.id}
      className={cn(
        "max-w-xl scroll-mt-20 rounded-md border border-border/70 bg-muted/10 p-3 sm:p-3.5",
        product.imageSrc && !product.gallery
          ? cn("flex flex-col gap-3", !product.diagramSrc && "sm:flex-row sm:items-start sm:gap-4")
          : undefined,
        className,
      )}
    >
      {product.gallery ? (
        <div className="w-full min-w-0 space-y-3">
          <div>
            <h4 className="text-xs font-semibold text-[#1a365d] sm:text-sm">{product.title}</h4>
            {product.description ? (
              <p className="text-muted-foreground mt-1 text-xs leading-relaxed sm:text-sm">
                {product.description}
              </p>
            ) : null}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <figure className="m-0 min-w-0 space-y-1.5">
              <figcaption className="text-muted-foreground text-[0.65rem] font-medium tracking-wide uppercase sm:text-xs">
                {product.gallery.before.label}
              </figcaption>
              <video
                className="bg-background w-full max-w-full rounded-md border border-border/80"
                controls
                playsInline
                preload="metadata"
                aria-label={product.gallery.before.alt}
              >
                <source src={product.gallery.before.src} type="video/mp4" />
              </video>
            </figure>
            <figure className="m-0 min-w-0 space-y-1.5">
              <figcaption className="text-muted-foreground text-[0.65rem] font-medium tracking-wide uppercase sm:text-xs">
                {product.gallery.after.label}
              </figcaption>
              <video
                className="bg-background w-full max-w-full rounded-md border border-border/80"
                controls
                playsInline
                loop
                muted
                preload="metadata"
                aria-label={product.gallery.after.alt}
              >
                <source src={product.gallery.after.src} type="video/mp4" />
              </video>
            </figure>
          </div>
          <figure className="m-0 min-w-0 space-y-1.5">
            <figcaption className="text-muted-foreground text-[0.65rem] font-medium tracking-wide uppercase sm:text-xs">
              {product.gallery.mobile.label}
            </figcaption>
            <button
              type="button"
              className="focus-visible:ring-ring block w-fit max-w-full cursor-zoom-in rounded-md border border-border/80 bg-background p-0 focus-visible:ring-2 focus-visible:outline-none"
              onClick={() => {
                const g = product.gallery
                if (!g) return
                setLightbox({ src: g.mobile.src, alt: g.mobile.alt })
              }}
              aria-label={`View full size: ${product.gallery.mobile.label}`}
            >
              <img
                src={product.gallery.mobile.src}
                alt=""
                className="pointer-events-none max-h-56 w-auto max-w-full object-contain object-top"
                loading="lazy"
                decoding="async"
                aria-hidden
              />
            </button>
          </figure>
          {product.links && product.links.length > 0 && (
            <ul className="flex flex-wrap gap-x-2.5 gap-y-1 text-xs">
              {product.links.map((l) => (
                <li key={l.href}>
                  <a
                    className={cn(
                      "inline-flex items-center gap-0.5",
                      "text-[#3182ce] hover:underline",
                    )}
                    href={l.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {l.label}
                    <ArrowUpRight className="size-3 opacity-80" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : product.imageSrc ? (
        <>
          <div className="flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
            <button
              type="button"
              className="focus-visible:ring-ring block w-fit max-w-full shrink-0 cursor-zoom-in rounded-md border border-border/80 bg-background/80 p-0 shadow-sm focus-visible:ring-2 focus-visible:outline-none"
              onClick={() => {
                if (!product.imageSrc) return
                setLightbox({
                  src: product.imageSrc,
                  alt: product.imageAlt ?? product.title,
                })
              }}
              aria-label={`View full size: ${product.title}`}
            >
              <div className="h-24 w-40 overflow-hidden sm:h-[7.25rem] sm:w-44">
                <img
                  src={product.imageSrc}
                  alt=""
                  className="pointer-events-none h-full w-full object-cover object-top"
                  loading="lazy"
                  aria-hidden
                />
              </div>
            </button>
            <div className="min-w-0 flex-1">
              <h4 className="text-xs font-semibold text-[#1a365d] sm:text-sm">{product.title}</h4>
              {product.description ? (
                <p className="text-muted-foreground mt-1 text-xs leading-relaxed sm:text-sm">
                  {product.description}
                </p>
              ) : null}
              {product.links && product.links.length > 0 && (
                <ul className="mt-2 flex flex-wrap gap-x-2.5 gap-y-1 text-xs">
                  {product.links.map((l) => (
                    <li key={l.href}>
                      <a
                        className={cn(
                          "inline-flex items-center gap-0.5",
                          "text-[#3182ce] hover:underline",
                        )}
                        href={l.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {l.label}
                        <ArrowUpRight className="size-3 opacity-80" aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          {product.diagramSrc ? (
            <figure className="m-0 mt-3 min-w-0 space-y-1.5 border-t border-border/60 pt-3">
              <figcaption className="text-muted-foreground text-[0.65rem] font-medium tracking-wide uppercase sm:text-xs">
                {diagramCaption}
              </figcaption>
              <button
                type="button"
                className="focus-visible:ring-ring bg-background block w-full max-w-full cursor-zoom-in rounded-md border border-border/80 p-1 focus-visible:ring-2 focus-visible:outline-none sm:p-1.5"
                onClick={() => {
                  const src = product.diagramSrc
                  if (!src) return
                  setLightbox({
                    src,
                    alt: product.diagramAlt ?? diagramCaption,
                  })
                }}
                aria-label={`View full size: ${diagramCaption}`}
              >
                <img
                  src={product.diagramSrc}
                  alt=""
                  className="pointer-events-none mx-auto max-h-44 w-full max-w-full object-contain object-left-top sm:max-h-52"
                  loading="lazy"
                  decoding="async"
                  aria-hidden
                />
              </button>
            </figure>
          ) : null}
        </>
      ) : product.diagramSrc ? (
        <div className="w-full min-w-0 space-y-3">
          <div>
            <h4 className="text-xs font-semibold text-[#1a365d] sm:text-sm">{product.title}</h4>
            {product.description ? (
              <p className="text-muted-foreground mt-1 text-xs leading-relaxed sm:text-sm">
                {product.description}
              </p>
            ) : null}
          </div>
          <figure className="m-0 min-w-0 space-y-1.5">
            <figcaption className="text-muted-foreground text-[0.65rem] font-medium tracking-wide uppercase sm:text-xs">
              {diagramCaption}
            </figcaption>
            <button
              type="button"
              className="focus-visible:ring-ring bg-background block w-full max-w-full cursor-zoom-in rounded-md border border-border/80 p-1 focus-visible:ring-2 focus-visible:outline-none sm:p-1.5"
              onClick={() => {
                const src = product.diagramSrc
                if (!src) return
                setLightbox({
                  src,
                  alt: product.diagramAlt ?? diagramCaption,
                })
              }}
              aria-label={`View full size: ${diagramCaption}`}
            >
              <img
                src={product.diagramSrc}
                alt=""
                className="pointer-events-none mx-auto max-h-44 w-full max-w-full object-contain object-left-top sm:max-h-52"
                loading="lazy"
                decoding="async"
                aria-hidden
              />
            </button>
          </figure>
          {product.links && product.links.length > 0 && (
            <ul className="flex flex-wrap gap-x-2.5 gap-y-1 text-xs">
              {product.links.map((l) => (
                <li key={l.href}>
                  <a
                    className={cn(
                      "inline-flex items-center gap-0.5",
                      "text-[#3182ce] hover:underline",
                    )}
                    href={l.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {l.label}
                    <ArrowUpRight className="size-3 opacity-80" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div>
          <h4 className="text-xs font-semibold text-[#1a365d] sm:text-sm">{product.title}</h4>
          {product.description ? (
            <p className="text-foreground/90 mt-1 text-xs leading-relaxed sm:text-sm">
              {product.description}
            </p>
          ) : null}
          {product.links && product.links.length > 0 && (
            <ul className="mt-2 flex flex-wrap gap-x-2.5 gap-y-1 text-xs sm:text-sm">
              {product.links.map((l) => (
                <li key={l.href}>
                  <a
                    className={cn(
                      "inline-flex items-center gap-0.5",
                      "text-[#3182ce] hover:underline",
                    )}
                    href={l.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {l.label}
                    <ArrowUpRight className="size-3" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      <ImageLightbox open={lightbox} onDismiss={() => setLightbox(null)} />
    </div>
  )
}
