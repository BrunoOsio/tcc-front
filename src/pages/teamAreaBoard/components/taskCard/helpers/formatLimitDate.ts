import { dateHoursSeparator } from "../../../../../shared/helpers/dateHelpers";

export const getFrom = (limitAt: string | undefined): string[] => {
  if (!limitAt) return [];

  return limitAt.split(dateHoursSeparator);
}