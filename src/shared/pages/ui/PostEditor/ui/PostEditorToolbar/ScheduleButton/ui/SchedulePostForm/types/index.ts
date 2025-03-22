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
  schedule: ISchedule;
  setSchedule: React.Dispatch<React.SetStateAction<ISchedule>>;
}

export type { ISchedule, AmPmType, IScheduleContext };
