export type ExperienceDate = string | Date | null | undefined;

export interface ExperiencePeriod {
  startDate: ExperienceDate;
  endDate?: ExperienceDate;
}

export interface InternshipExperience extends ExperiencePeriod {
  category: "internship";
}

export interface ProfessionalExperience extends ExperiencePeriod {
  category: "professional";
}

export interface CalculatedDuration {
  years: number;
  months: number;
  label: string;
}

interface DateRange {
  start: Date;
  end: Date;
}

function toUtcDate(value: ExperienceDate): Date | null {
  if (value instanceof Date) {
    if (Number.isNaN(value.getTime())) {
      return null;
    }

    return new Date(
      Date.UTC(value.getFullYear(), value.getMonth(), value.getDate()),
    );
  }

  if (typeof value !== "string") {
    return null;
  }

  const match = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(value);
  if (!match) {
    return null;
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = match[3] === undefined ? 1 : Number(match[3]);
  const date = new Date(Date.UTC(year, month - 1, day));

  if (
    year < 1 ||
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return date;
}

function getDateRange(
  startDate: ExperienceDate,
  endDate: ExperienceDate,
  referenceDate?: Date,
): DateRange | null {
  const start = toUtcDate(startDate);
  const reference = toUtcDate(referenceDate ?? new Date());
  const end = endDate == null ? reference : toUtcDate(endDate);

  if (!start || !end || end < start) {
    return null;
  }

  return { start, end };
}

function getFullMonths(start: Date, end: Date): number {
  let months =
    (end.getUTCFullYear() - start.getUTCFullYear()) * 12 +
    end.getUTCMonth() -
    start.getUTCMonth();

  if (end.getUTCDate() < start.getUTCDate()) {
    months -= 1;
  }

  return Math.max(0, months);
}

function createDuration(totalMonths: number): CalculatedDuration {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? "Year" : "Years"}`);
  }

  if (months > 0) {
    parts.push(`${months} ${months === 1 ? "Month" : "Months"}`);
  }

  return {
    years,
    months,
    label: parts.length > 0 ? parts.join(", ") : "Less than 1 Month",
  };
}

export function calculateCompanyExperience(
  startDate: ExperienceDate,
  endDate: ExperienceDate,
  referenceDate?: Date,
): CalculatedDuration | null {
  const range = getDateRange(startDate, endDate, referenceDate);
  return range ? createDuration(getFullMonths(range.start, range.end)) : null;
}

export function calculateInternshipExperience(
  internship: InternshipExperience,
  referenceDate?: Date,
): CalculatedDuration | null {
  return calculateCompanyExperience(
    internship.startDate,
    internship.endDate,
    referenceDate,
  );
}

export function calculateProfessionalExperience(
  job: ProfessionalExperience,
  referenceDate?: Date,
): CalculatedDuration | null {
  return calculateCompanyExperience(job.startDate, job.endDate, referenceDate);
}

export function calculateTotalProfessionalExperience(
  experiences: readonly ProfessionalExperience[],
  referenceDate?: Date,
): CalculatedDuration | null {
  const ranges = experiences
    .map((experience) =>
      getDateRange(experience.startDate, experience.endDate, referenceDate),
    )
    .filter((range): range is DateRange => range !== null)
    .sort((left, right) => left.start.getTime() - right.start.getTime());

  if (ranges.length === 0) {
    return null;
  }

  const mergedRanges: DateRange[] = [];
  for (const range of ranges) {
    const previous = mergedRanges.at(-1);
    if (!previous || range.start > previous.end) {
      mergedRanges.push({ ...range });
    } else if (range.end > previous.end) {
      previous.end = range.end;
    }
  }

  const totalMonths = mergedRanges.reduce(
    (total, range) => total + getFullMonths(range.start, range.end),
    0,
  );

  return createDuration(totalMonths);
}

export function formatExperienceDateRange(
  experience: ExperiencePeriod,
): string | null {
  const start = toUtcDate(experience.startDate);
  if (!start) {
    return null;
  }

  const formatMonthYear = (date: Date) =>
    new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(date);

  const startLabel = formatMonthYear(start);
  if (experience.endDate == null) {
    return `${startLabel} – Present`;
  }

  const end = toUtcDate(experience.endDate);
  return end ? `${startLabel} – ${formatMonthYear(end)}` : null;
}
