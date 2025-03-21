const scheduleYear = () => {
  const today = new Date();

  const year = today.getFullYear();

  return Array.from({ length: 3 }).map((_, index) => ({
    text: (year + index).toString(),
    value: year + index,
  }));
};

const scheduleMonth = () => {
  return Array.from({ length: 12 }).map((_, index) => ({
    text: (index + 1).toString(),
    value: index + 1,
  }));
};

const scheduleDate = (year: number, month: number) => {
  const target = new Date(year, month, 0);

  const targetDate = target.getDate();

  return Array.from({ length: targetDate }).map((_, index) => ({
    text: (index + 1).toString(),
    value: index + 1,
  }));
};

const scheduleHour = () => {
  return Array.from({ length: 12 }).map((_, index) => ({
    text: (index + 1).toString(),
    value: index + 1,
  }));
};

const scheduleMinute = () => {
  return Array.from({ length: 60 }).map((_, index) => ({
    text: index.toString(),
    value: index,
  }));
};

const scheduleAmPm = () => {
  return Array.from({ length: 2 }).map((_, index) => ({
    text: index === 0 ? "am" : "pm",
    value: index === 0 ? "am" : "pm",
  }));
};

export {
  scheduleMonth,
  scheduleYear,
  scheduleDate,
  scheduleHour,
  scheduleMinute,
  scheduleAmPm,
};
