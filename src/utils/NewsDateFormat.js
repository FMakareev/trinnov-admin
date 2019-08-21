import {format} from "date-fns";



export const NewsDateFormat = (date) => {
  return format(
    new Date(date),
    'd MMMM yyyy',
  )
};

export default NewsDateFormat;
