import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

import { type ExperienceBullet } from "@/data/resume"

import { ImageLightbox } from "./ImageLightbox"

type ExperienceBulletLineProps = { bullet: ExperienceBullet }

export function ExperienceBulletLine({ bullet }: ExperienceBulletLineProps) {
  const [lightbox, setLightbox] = useState<{
    src: string
    alt: string
  } | null>(null)

  if (typeof bullet === "string") {
    return bullet
  }

  if ("diagram" in bullet) {
    const openDiagram = () =>
      setLightbox({ src: bullet.diagram.src, alt: bullet.diagram.alt })

    return (
      <>
        {bullet.before}
        <button
          type="button"
          onClick={openDiagram}
          className="focus-visible:ring-ring mx-0.5 inline-flex cursor-zoom-in items-center gap-1 rounded border border-border/80 bg-background px-1 py-0.5 align-middle shadow-sm focus-visible:ring-2 focus-visible:outline-none"
          aria-label={`${bullet.diagram.label}: ${bullet.diagram.alt}`}
        >
          <img
            src={bullet.diagram.src}
            alt=""
            className="pointer-events-none h-6 w-10 rounded-sm object-cover object-left sm:h-7 sm:w-12"
            loading="lazy"
            decoding="async"
            aria-hidden
          />
          <span className="text-xs font-normal text-[#3182ce] sm:text-sm">
            {bullet.diagram.label}
          </span>
          <ArrowUpRight
            className="size-3 shrink-0 text-[#3182ce] opacity-80"
            aria-hidden
          />
        </button>
        {bullet.after}
        <ImageLightbox
          open={lightbox}
          onDismiss={() => setLightbox(null)}
        />
      </>
    )
  }

  const isExternal = /^https?:\/\//i.test(bullet.link.href)
  return (
    <>
      {bullet.before}
      <a
        className="text-[#3182ce] hover:underline"
        href={bullet.link.href}
        {...(isExternal
          ? { rel: "noreferrer", target: "_blank" }
          : undefined)}
      >
        {bullet.link.label}
      </a>
      {bullet.after}
    </>
  )
}
