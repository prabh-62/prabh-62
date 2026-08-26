import { type ReactNode } from "react"

type SectionHeadingProps = {
  id: string
  children: ReactNode
}

export function SectionHeading({ id, children }: SectionHeadingProps) {
  return (
    <h2 className="text-sm font-semibold tracking-[0.2em] text-[#1a365d] uppercase" id={id}>
      {children}
    </h2>
  )
}
