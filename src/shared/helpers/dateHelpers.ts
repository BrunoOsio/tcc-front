import moment, { Moment } from "moment"

export const dateHoursSeparator = "T";
export const dateSeparator = "/";

const DATE_FORMAT = "DD/MM/YYYY";  //THIS IS USED FOR CREATING TASKS
const LIMIT_DATE_TIME_FORMAT = `DD/MM/YYYY${dateHoursSeparator}HH:mm`; //THIS IS USED FOR FRONTEND AND STORES TO BACKEND
const LIMIT_DATE_TIME_INPUT_FORMAT = `YYYY-MM-DDTHH:mm`; //THIS IS USED ONLY FOR SHOWING THE DATE FOR USER

export const createDateOfNow = (): string => {
  return formatDate(moment().toDate());
}

export const formatDate = (date: Date): string => {
  return moment(date).format(DATE_FORMAT);
}

export const formatInputDate = (date: Date): string => {
  return moment(date).format(LIMIT_DATE_TIME_INPUT_FORMAT);
}

export const formatToLimitDate = (stringDate: string) => {
  return moment(stringDate).format(LIMIT_DATE_TIME_FORMAT);
}

export const formatToLimitDateTimeInput = (stringDate: string): string => {
  return moment(stringDate).format(LIMIT_DATE_TIME_INPUT_FORMAT);
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
  return formatToLimitDateTimeInput(limitDate.toString());
}