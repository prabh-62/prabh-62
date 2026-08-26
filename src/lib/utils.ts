import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Parses "Mon YYYY" (e.g. Aug 2024). Returns 0-based month and year, or null. */
function parseMonthYear(s: string): { year: number; month: number } | null {
  const t = s.trim()
  if (!t) return null
  const m = t.match(/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+(\d{4})$/i)
  if (!m) return null
  const d = new Date(`${m[1]} 1, ${m[2]}`)
  if (Number.isNaN(d.getTime())) return null
  return { year: d.getFullYear(), month: d.getMonth() }
}

function toMonthIndex(y: number, m: number) {
  return y * 12 + m
}

/**
 * Human-readable length for resume strings like "Aug 2024 – Present" or "Oct 2021 – Jul 2024".
 * `now` is injectable for tests. Returns null if the range is unparseable.
 */
export function formatEmploymentDuration(dates: string, now: Date = new Date()): string | null {
  const parts = dates.split(/\s*[–-]\s+/)
  if (parts.length !== 2) return null
  const [startS, endS] = [parts[0]!.trim(), parts[1]!.trim()]

  const start = parseMonthYear(startS)
  if (!start) return null

  let endIndex: number
  if (/^present$/i.test(endS)) {
    // Through current month: exclusive end = first of next month
    const ex = new Date(now.getFullYear(), now.getMonth() + 1, 1)
    endIndex = toMonthIndex(ex.getFullYear(), ex.getMonth())
  } else {
    const end = parseMonthYear(endS)
    if (!end) return null
    // "through Jul 2024" -> exclusive = Aug 1
    const ex = new Date(end.year, end.month + 1, 1)
    endIndex = toMonthIndex(ex.getFullYear(), ex.getMonth())
  }

  const startIndex = toMonthIndex(start.year, start.month)
  const totalMonths = endIndex - startIndex
  if (totalMonths < 0) return null
  if (totalMonths === 0) return "less than 1 month"

  const y = Math.floor(totalMonths / 12)
  const mon = totalMonths % 12
  return formatYearsAndMonthsWithIntl(y, mon)
}

/**
 * Use {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat | Intl.DurationFormat}
 * for locale-aware “2 years, 9 months” style output; falls back to English if unavailable.
 */
function formatYearsAndMonthsWithIntl(
  years: number,
  months: number,
  locales: Intl.LocalesArgument = "en",
): string {
  if (typeof Intl === "undefined" || typeof Intl.DurationFormat !== "function") {
    if (years === 0) return months === 1 ? "1 month" : `${months} months`
    if (months === 0) return years === 1 ? "1 year" : `${years} years`
    return `${years === 1 ? "1 year" : `${years} years`} ${
      months === 1 ? "1 month" : `${months} months`
    }`
  }
  const duration: Partial<Record<Intl.DurationFormatUnit, number>> = {}
  if (years > 0) duration.years = years
  if (months > 0) duration.months = months
  return new Intl.DurationFormat(locales, { style: "long" }).format(duration)
}
