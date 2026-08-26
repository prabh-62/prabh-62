import { MapPin } from "lucide-react"

import { experience } from "@/data/resume"
import { formatEmploymentDuration } from "@/lib/utils"

import { ExperienceBulletLine } from "./ExperienceBulletLine"
import { ExperienceProductCallout } from "./ExperienceProductCallout"

type Job = (typeof experience)[number]

type ExperienceItemProps = {
  job: Job
  isLast: boolean
}

export function ExperienceItem({ job, isLast }: ExperienceItemProps) {
  const where = job.where.replace(" - ", " · ")
  const duration = formatEmploymentDuration(job.dates)

  return (
    <li className="group relative m-0 pb-8 pl-0 last:pb-0 sm:pb-9">
      <div className="flex flex-col sm:flex-row sm:gap-3 sm:pt-0">
        <div className="w-full min-w-0 sm:w-max sm:shrink-0 sm:pt-1 sm:text-right">
          <p className="text-xs font-medium text-muted-foreground sm:whitespace-nowrap sm:text-sm">
            {job.dates}
          </p>
          {duration && (
            <p className="text-muted-foreground/90 mt-0.5 text-[0.65rem] sm:text-xs">{duration}</p>
          )}
          <p className="mt-0.5 flex items-start justify-start gap-1.5 text-left text-xs leading-snug text-muted-foreground sm:mt-1 sm:justify-end sm:gap-1.5 sm:text-right sm:text-[0.7rem] md:text-xs">
            <MapPin className="mt-0.5 size-3 shrink-0 text-muted-foreground/85" aria-hidden />
            <span className="min-w-0">{where}</span>
          </p>
        </div>
        <div className="relative mt-3 flex min-w-0 flex-1 flex-row gap-0 sm:mt-0 sm:min-h-0 sm:items-stretch sm:gap-2">
          <div
            className="relative z-0 hidden w-2 shrink-0 self-stretch flex-col sm:flex"
            aria-hidden
          >
            <div className="relative z-10 mx-auto mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-background bg-[#1a365d] ring-1 ring-border" />
            {!isLast && (
              <div className="bg-border absolute top-[14px] bottom-0 left-1/2 w-px -translate-x-1/2" />
            )}
          </div>
          <div className="min-w-0 flex-1 sm:border-0">
            <div className="relative min-w-0 border-l-2 border-border/90 pl-4 sm:border-0 sm:pl-0">
              <div
                className="bg-[#1a365d] ring-background absolute top-1.5 left-0 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full ring-2 sm:hidden"
                aria-hidden
              />
              <h3 className="m-0 text-base font-semibold text-[#1a365d] sm:text-lg">{job.title}</h3>
              <p className="m-0 mt-1 text-sm font-medium leading-snug text-[#3182ce]">
                {job.company}
              </p>
              <ul className="m-0 mt-3 list-outside list-disc space-y-2 pl-4 text-sm leading-relaxed sm:text-base">
                {job.items.map((b, bulletIndex) => (
                  <li
                    key={`${job.company}-${job.dates}-${bulletIndex}`}
                    className="pl-0.5 marker:font-normal marker:text-[#1a365d]"
                  >
                    <ExperienceBulletLine bullet={b} />
                  </li>
                ))}
              </ul>
              {"product" in job && job.product && (
                <ExperienceProductCallout product={job.product} className="mt-4" />
              )}
              {"secondaryProduct" in job && job.secondaryProduct && (
                <ExperienceProductCallout product={job.secondaryProduct} className="mt-3" />
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
