import moment, { Moment } from "moment"

export const dateHoursSeparator = "T";
export const dateSeparator = "/";

const LIMIT_DATE_TIME_FORMAT = `YYYY-MM-DDTHH:mm`; //THIS IS USED ONLY FOR SHOWING THE DATE FOR USER

export const createDateOfNow = (): string => {
  return formatDate(moment().toDate());
}

export const formatDate = (date: Date): string => {
  return moment(date).format(LIMIT_DATE_TIME_FORMAT);
}

export const formatStringDate = (stringDate: string): string => {
  return moment(stringDate).format(LIMIT_DATE_TIME_FORMAT);
}

export const createDaysLimitOf = (daysLimit: number) => {
  const limitDate = setDaysLimit(daysLimit);

  return formatDateAndTime(setDefaultTime(limitDate).toDate());
}

const setDaysLimit = (days: number): Moment => {
  return setDefaultTime(moment().add(days, "days"));
}

export const formatDateAndTime = (date: Date): string => {
  return moment(date).format(LIMIT_DATE_TIME_FORMAT);
}

const setDefaultTime = (momentDate: Moment): Moment => {
  momentDate.set("hour", 23);
  momentDate.set("minute", 59);
  momentDate.set("second", 59);

  return momentDate;
}

export const createDefaultDateTimeLocalInput = (): string => {
  let limitDate = moment();
  setDefaultTime(limitDate);
  return formatStringDate(limitDate.toString());
}

export const isValidStringDate = (dateString: string): boolean => {
  return dateString !== "Invalid date";
}