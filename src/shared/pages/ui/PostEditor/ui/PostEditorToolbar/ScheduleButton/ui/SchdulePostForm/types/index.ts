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

export type { ISchedule, AmPmType };
