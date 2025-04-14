import { useLanguageContent } from "@shared/@common/models/hooks";

const useRelativeTime = () => {
  // 언어 설정
  const { now, min, hour } = useLanguageContent(["post", "useRelativeTime"]);

  const convertToRelativeTime = (dateString: string): string => {
    const target = new Date(dateString);
    const today = new Date();

    const timeGap = today.getTime() - target.getTime();
    const seconds = Math.floor(timeGap / 1000);

    // 1분 미만인 경우
    if (seconds < 60) {
      return `${now}`;
    } else if (60 <= seconds && seconds < 3600) {
      // 1분 이상 1시간 미만인 경우
      return `${Math.floor(seconds / 60)}${min}`;
    } else if (3600 <= seconds && seconds < 86400) {
      // 1시간 이상 1일 미만인 경우
      return `${Math.floor(seconds / 60 / 60)}${hour}`;
    } else {
      const local = navigator.language;
      const options: Intl.DateTimeFormatOptions = {
        month: "long",
        day: "numeric",
      };
      const dateTimeFormat = Intl.DateTimeFormat(local, options);
      // 1일 이상인 경우
      return `${dateTimeFormat.format(target)}`;
    }
  };

  return convertToRelativeTime;
};

export default useRelativeTime;
