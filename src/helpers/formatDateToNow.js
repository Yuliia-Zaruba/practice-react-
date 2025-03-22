import { formatDistanceToNowStrict } from 'date-fns';

export const formatDateToNow = postedAt => {
  return formatDistanceToNowStrict(new Date(postedAt));
};
