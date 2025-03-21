import {
  scheduleAmPm,
  scheduleHour,
  scheduleMinute,
  scheduleMonth,
  scheduleYear,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";

const useScheduleData = () => {
  const year = scheduleYear();
  const month = scheduleMonth();
  const hour = scheduleHour();
  const minute = scheduleMinute();
  const amPm = scheduleAmPm();

  return {
    year,
    month,
    hour,
    minute,
    amPm,
  };
};

export default useScheduleData;
