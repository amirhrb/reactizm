import { formatDistanceToNow } from "date-fns";
import { faIR } from "date-fns/locale";

export const timeFunc = (posts) => {
  const dates = posts.map((post) => post.publishDate);
  const lastDate = new Date(dates.sort((a, b) => a < b)[0]);
  return formatDistanceToNow(lastDate, { locale: faIR });
};
