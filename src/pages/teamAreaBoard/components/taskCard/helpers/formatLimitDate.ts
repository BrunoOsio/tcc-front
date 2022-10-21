import { dateHoursSeparator, dateSeparator } from "../../../../../shared/helpers/dateHelpers";

type DateTime = {
  day: string,
  month: string,
  year: string,
  hours: string
}

export const getFrom = (limitDate: string | undefined): DateTime | undefined => {
  if (!limitDate) return undefined;
  
  const [date, hours] = limitDate.split(dateHoursSeparator);
  const [day, month, year] = date.split(dateSeparator);

  return {
    day: day,
    month: month, 
    year: year,
    hours: hours
  }
}