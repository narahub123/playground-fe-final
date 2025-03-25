const distructDate = (target: Date) => {
  const year = target.getFullYear();
  const month = target.getMonth() + 1;
  const date = target.getDate();
  const hour = target.getHours();
  const minute = target.getMinutes();
  const amPm = hour >= 12 ? "pm" : "am";

  return { year, month, date, hour, minute, amPm };
};

export { distructDate };
