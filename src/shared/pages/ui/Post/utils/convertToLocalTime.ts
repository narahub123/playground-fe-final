const convertToLocalTime = (dateString: string) => {
  const target = new Date(dateString);

  const local = navigator.language;
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const dateTimeFormat = new Intl.DateTimeFormat(local, options);
  const parts = dateTimeFormat.formatToParts(target);

  // 날짜와 관련된 type 목록
  const dateTypes = ["year", "month", "day"];
  // 시간과 관련된 type 목록
  const timeTypes = ["hour", "minute", "dayPeriod"];

  // 날짜와 시간의 첫 등장 위치 찾기
  const dateIndex = parts.findIndex((part) => dateTypes.includes(part.type));
  const timeIndex = parts.findIndex((part) => timeTypes.includes(part.type));

  // 기준점을 바탕으로 분리
  const [firstIndex, secondIndex] =
    timeIndex < dateIndex ? [timeIndex, dateIndex] : [dateIndex, timeIndex];

  const dateParts =
    timeIndex < dateIndex
      ? parts.slice(secondIndex)
      : parts.slice(firstIndex, secondIndex);

  const timeParts =
    timeIndex < dateIndex
      ? parts.slice(firstIndex, secondIndex)
      : parts.slice(secondIndex);

  const time = timeParts
    .map((part) => part.value)
    .join("")
    .trim();
  const date = dateParts
    .map((part) => part.value)
    .join("")
    .trim();

  return `${time} · ${date}`;
};

export default convertToLocalTime;
