import { useState } from "react"
import { ArrowUpRight, MapPin } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { community } from "@/data/spotlight"
import { education as resumeEducation } from "@/data/resume"
import { cn } from "@/lib/utils"

import { ImageLightbox } from "./ImageLightbox"
import { SectionHeading } from "./SectionHeading"

export function EducationSection() {
  const [lightbox, setLightbox] = useState<{
    src: string
    alt: string
  } | null>(null)
  const educationWhere = resumeEducation.where.replace(" - ", " · ")

  return (
    <section aria-labelledby="education-heading">
      <SectionHeading id="education-heading">Education</SectionHeading>
      <Card className="mt-6">
        <CardContent className="p-4 sm:px-6 sm:pt-6 sm:pb-6">
          <div className="flex flex-col sm:flex-row sm:gap-3 sm:pt-0">
            <div className="w-full min-w-0 sm:w-max sm:shrink-0 sm:pt-1 sm:text-right">
              <p className="text-xs font-medium text-muted-foreground sm:whitespace-nowrap sm:text-sm">
                {resumeEducation.dates}
              </p>
              <p className="mt-0.5 flex items-start justify-start gap-1.5 text-left text-xs leading-snug text-muted-foreground sm:mt-1 sm:justify-end sm:gap-1.5 sm:text-right sm:text-[0.7rem] md:text-xs">
                <MapPin className="mt-0.5 size-3 shrink-0 text-muted-foreground/85" aria-hidden />
                <span className="min-w-0">{educationWhere}</span>
              </p>
            </div>
            <div className="relative mt-3 flex min-w-0 flex-1 flex-row gap-0 sm:mt-0 sm:min-h-0 sm:items-stretch sm:gap-2">
              <div
                className="relative z-0 hidden w-2 shrink-0 self-stretch flex-col sm:flex"
                aria-hidden
              >
                <div className="relative z-10 mx-auto mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-card bg-[#1a365d] ring-1 ring-border" />
              </div>
              <div className="min-w-0 flex-1 sm:border-0">
                <div className="relative min-w-0 border-l-2 border-border/90 pl-4 sm:border-0 sm:pl-0">
                  <div
                    className="bg-[#1a365d] ring-card absolute top-1.5 left-0 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full ring-2 sm:hidden"
                    aria-hidden
                  />
                  <h3 className="m-0 text-base font-semibold text-[#1a365d] sm:text-lg">
                    <a
                      className="inline font-semibold text-[#3182ce] hover:underline"
                      href={resumeEducation.programPageHref}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {resumeEducation.program}
                      <ArrowUpRight
                        className="ml-0.5 inline size-3.5 align-[-0.125em] opacity-80"
                        aria-hidden
                      />
                    </a>
                  </h3>
                  <p className="m-0 mt-1 text-sm font-medium leading-snug text-[#3182ce]">
                    {resumeEducation.school}
                  </p>
                  <div className="border-border/80 mt-4 border-t pt-5 sm:mt-5">
                    <p className="text-muted-foreground mb-3 text-[0.7rem] font-medium tracking-wide uppercase sm:text-xs">
                      During my studies
                    </p>
                    <div className="flex flex-col overflow-hidden rounded-md border border-border/60 sm:flex-row sm:items-stretch">
                      <button
                        type="button"
                        className="focus-visible:ring-ring relative block h-28 w-full shrink-0 cursor-zoom-in border-0 bg-transparent p-0 focus-visible:z-10 focus-visible:ring-2 focus-visible:outline-none sm:h-auto sm:w-40 sm:min-h-[7.5rem]"
                        onClick={() =>
                          setLightbox({
                            src: community.mlh.imageSrc,
                            alt: community.mlh.imageAlt,
                          })
                        }
                        aria-label={`View full size: ${community.mlh.title}`}
                      >
                        <img
                          src={community.mlh.imageSrc}
                          alt=""
                          className="pointer-events-none h-full w-full object-cover"
                          loading="lazy"
                          decoding="async"
                          aria-hidden
                        />
                      </button>
                      <div className="min-w-0 flex-1 px-3 py-3 sm:px-4 sm:py-3.5">
                        <h3 className="text-sm font-semibold leading-snug text-[#1a365d]">
                          {community.mlh.title}
                        </h3>
                        <p className="text-muted-foreground mt-1.5 text-xs leading-relaxed sm:text-sm">
                          {community.mlh.description}
                        </p>
                        <a
                          className={cn(
                            "mt-2 inline-flex w-fit items-center gap-0.5 text-xs font-medium",
                            "text-[#3182ce] hover:underline",
                          )}
                          href={community.mlh.href}
                          rel="noreferrer"
                          target="_blank"
                        >
                          Read on MLH Stories
                          <ArrowUpRight className="size-3.5 shrink-0" aria-hidden />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <ImageLightbox open={lightbox} onDismiss={() => setLightbox(null)} />
    </section>
  )
}
