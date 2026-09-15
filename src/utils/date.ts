type DateStyle = 'long' | 'short' | 'month';

const formats: Record<DateStyle, Intl.DateTimeFormatOptions> = {
  long: { year: 'numeric', month: 'long', day: 'numeric' },
  short: { year: 'numeric', month: 'short', day: 'numeric' },
  month: { year: 'numeric', month: 'short' },
};

/**
 * Format a content date for display. Frontmatter dates like `2026-09-15` are parsed
 * as UTC midnight, so format in UTC to keep them from shifting back a day.
 */
export function formatDate(date: Date, style: DateStyle = 'long'): string {
  return date.toLocaleDateString('en-US', { ...formats[style], timeZone: 'UTC' });
}
