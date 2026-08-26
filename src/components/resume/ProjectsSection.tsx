import { useState } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/data/resume"
import { cn } from "@/lib/utils"

import { ImageLightbox } from "./ImageLightbox"
import { SectionHeading } from "./SectionHeading"

export function ProjectsSection() {
  const [lightbox, setLightbox] = useState<{
    src: string
    alt: string
  } | null>(null)

  return (
    <section aria-labelledby="projects-heading">
      <SectionHeading id="projects-heading">Projects</SectionHeading>
      {projects.map((p) => (
        <Card key={p.name} className="mt-6">
          <CardHeader>
            <CardTitle className="text-base text-[#1a365d] sm:text-lg">{p.name}</CardTitle>
          </CardHeader>
          <CardContent>
            {p.media && p.media.length > 0 ? (
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                <ul className="ml-1 list-outside list-disc space-y-2 pl-4 text-sm leading-relaxed sm:mt-0.5 sm:min-w-0 sm:flex-1 sm:pl-4 sm:text-base">
                  {p.items.map((b) => (
                    <li key={b} className="pl-0.5 marker:text-[#1a365d]">
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex w-full min-w-0 flex-col space-y-3 self-start sm:w-44 sm:shrink-0">
                  {p.media.map((m) => (
                    <figure key={m.src} className="m-0 min-w-0 space-y-1.5">
                      {m.label ? (
                        <figcaption className="text-muted-foreground text-center text-[0.65rem] font-medium tracking-wide uppercase sm:max-w-44 sm:text-left sm:text-xs">
                          {m.label}
                        </figcaption>
                      ) : null}
                      {/* Fixed frame + object-cover ≈ top “half” of the scroll; keeps card height near the bullets */}
                      <button
                        type="button"
                        className={cn(
                          "focus-visible:ring-ring bg-background mx-auto block h-40 w-40 max-w-full cursor-zoom-in overflow-hidden rounded-md border border-border/80 p-0 shadow-sm focus-visible:ring-2 focus-visible:outline-none sm:mx-0 sm:h-44 sm:w-44",
                        )}
                        onClick={() => setLightbox({ src: m.src, alt: m.alt })}
                        aria-label={
                          m.label ? `View full size: ${m.label}` : `View full size: ${m.alt}`
                        }
                      >
                        <img
                          src={m.src}
                          alt=""
                          className="pointer-events-none h-full w-full object-cover object-top"
                          loading="lazy"
                          decoding="async"
                          aria-hidden
                        />
                      </button>
                    </figure>
                  ))}
                </div>
              </div>
            ) : (
              <ul className="ml-1 list-outside list-disc space-y-2 pl-4 text-sm leading-relaxed sm:text-base">
                {p.items.map((b) => (
                  <li key={b} className="pl-0.5 marker:text-[#1a365d]">
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      ))}
      <ImageLightbox open={lightbox} onDismiss={() => setLightbox(null)} />
    </section>
  )
}
