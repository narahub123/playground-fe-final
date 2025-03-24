interface ISchedule {
  year: number;
  month: number;
  date: number;
  hour: number;
  minute: number;
  amPm: AmPmType;
  timeZone: string;
}

type AmPmType = "am" | "pm";

interface IScheduleContext {
  schedule: Date;
  setSchedule: React.Dispatch<React.SetStateAction<Date>>;
}

export type { ISchedule, AmPmType, IScheduleContext };
