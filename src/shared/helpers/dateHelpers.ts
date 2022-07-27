import { Moment } from "moment"

const DEFAULT_DATE_FORMAT = "DD-MM-YYYY";

export const setDaysLimit = (date: Moment, days: number) => {
  return date.add(days, "months");
}

export const formatDate = (date: Moment): string => {
  return date.format(DEFAULT_DATE_FORMAT);
}