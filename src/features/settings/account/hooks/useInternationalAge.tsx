import { useLanguageContent } from "@shared/@common/models/hooks";
import { IBirth } from "@shared/@common/types";

const useInternationalAge = (birth: IBirth): string => {
  const { yearOld, monthOld, dateOld, birthDate } = useLanguageContent([
    "hooks",
    "useInternationalAge",
  ]);

  if (!birth) return "N/A";

  const { year, month, date } = birth;

  const today = new Date();
  const cYear = today.getFullYear(); // 현재 연도
  const cMonth = today.getMonth() + 1; // 현재 월 (0부터 시작하므로 +1 필요)
  const cDate = today.getDate(); // 현재 일자

  // 생년과 현재 연도가 같은 경우 (올해 태어난 경우)
  if (cYear - year === 0) {
    // 같은 달에 태어난 경우
    if (cMonth - month === 0) {
      // 오늘 태어난 경우
      if (cDate - date === 0) return `${birthDate}`;

      // 같은 달, 다른 날짜에 태어난 경우: 일 수 반환
      return `${cDate - date}${dateOld}`;
    }

    // 같은 해, 다른 달에 태어난 경우: 개월 수 반환
    return `${cMonth - month}${monthOld}`;
  }

  // 다른 해에 태어난 경우 (나이 계산)
  if (cMonth > month || (cMonth === month && cDate >= date)) {
    // 생일이 지났거나 오늘인 경우: 만 나이 반환
    return `${cYear - year}${yearOld}`;
  } else {
    // 생일이 지나지 않은 경우: 한 살 감소한 나이 반환
    return `${cYear - year - 1}${yearOld}`;
  }
};

export default useInternationalAge;
