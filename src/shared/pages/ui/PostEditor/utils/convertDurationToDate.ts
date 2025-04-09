import { IVoteDuration } from "../ui/Vote";

const convertDurationToDate = (duration: IVoteDuration): Date => {
  const { date, hour, minute } = duration;

  const today = new Date();

  const targetDate = new Date(today);

  if (date) {
    targetDate.setDate(targetDate.getDate() + date);
  }
  if (hour) {
    targetDate.setHours(targetDate.getHours() + hour);
  }
  if (minute) {
    targetDate.setMinutes(targetDate.getMinutes() + minute);
  }

  return targetDate;
};

export default convertDurationToDate;
