import { summary } from "@/data/resume"

import { SectionHeading } from "./SectionHeading"

export function SummarySection() {
  return (
    <section aria-labelledby="summary-heading">
      <SectionHeading id="summary-heading">Summary</SectionHeading>
      <p className="mt-3 text-pretty text-base leading-relaxed sm:text-lg">{summary}</p>
    </section>
  )
}
