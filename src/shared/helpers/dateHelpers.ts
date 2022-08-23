import moment, { Moment } from "moment"

const DEFAULT_DATE_FORMAT = "DD-MM-YYYY";

export const createDateOfNow = () => {
  return formatDate(moment().toDate());
}

const setDaysLimit = (days: number): Moment => {
  return setDefaultTime(moment().add(days, "days"));
}

const setDefaultTime = (momentDate: Moment): Moment => {
  momentDate.set("hour", 23);
  momentDate.set("minute", 59);
  momentDate.set("second", 59);

  return momentDate;
}

export const createDaysLimitOf = (daysLimit: number) => {
  const limitDate = setDaysLimit(daysLimit);

  return formatDate(setDefaultTime(limitDate).toDate());
}

export const formatDate = (date: Date): string => {
  return moment(date).format(DEFAULT_DATE_FORMAT);
}