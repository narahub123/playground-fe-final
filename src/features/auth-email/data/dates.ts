import { BASE_YAER } from "@shared/@common/constants";

const today = new Date();

const thisYear = today.getFullYear(); // 년
const thisMonth = today.getMonth(); // 월

/**
 * 년도 목록을 생성하는 함수
 *
 * @param {string} unit - 년도를 나타낼 때 추가할 단위 (예: "년")
 * @returns {Array<{text: string, value: string}>} 년도 목록
 * @description
 * - BASE_YAER부터 현재 연도까지의 목록을 생성하고, 각 년도를 `YYYY${unit}` 형태로 표시합니다.
 */
const birthYearList = (unit: string) =>
  Array.from({ length: thisYear - BASE_YAER + 1 })
    .map((_, index) => ({
      text: (BASE_YAER + index).toString() + unit,
      value: (BASE_YAER + index).toString(),
    }))
    .reverse();

/**
 * 월 목록을 생성하는 함수
 *
 * @param {string} unit - 월을 나타낼 때 추가할 단위 (예: "월")
 * @returns {Array<{text: string, value: string}>} 월 목록
 * @description
 * - 1월부터 12월까지의 목록을 생성하고, 각 월을 `M${unit}` 형태로 표시합니다.
 */
const birthMonthList = (unit: string) => [
  { text: `1${unit}`, value: "1" },
  { text: `2${unit}`, value: "2" },
  { text: `3${unit}`, value: "3" },
  { text: `4${unit}`, value: "4" },
  { text: `5${unit}`, value: "5" },
  { text: `6${unit}`, value: "6" },
  { text: `7${unit}`, value: "7" },
  { text: `8${unit}`, value: "8" },
  { text: `9${unit}`, value: "9" },
  { text: `10${unit}`, value: "10" },
  { text: `11${unit}`, value: "11" },
  { text: `12${unit}`, value: "12" },
];

/**
 * 특정 년도와 월에 해당하는 일 목록을 생성하는 함수
 *
 * @param {string | number} [year=thisYear] - 대상 년도 (기본값: 현재 년도)
 * @param {string | number} [month=thisMonth] - 대상 월 (기본값: 현재 월)
 * @param {string} unit - 일자를 나타낼 때 추가할 단위 (예: "일")
 * @returns {Array<{text: string, value: string}>} 일 목록
 * @description
 * - 지정된 년도와 월에 맞는 일 목록을 생성합니다.
 * - 월별 마지막 날짜를 기준으로 일 목록을 생성합니다.
 * - 예: 2024년 2월이면 29일까지 생성됩니다.
 */
const birthDateList = (
  year: string | number = thisYear,
  month: string | number = thisMonth,
  unit: string
) => {
  const target = new Date(Number(year), Number(month), 0);

  const lastDate = target.getDate();

  return Array.from({ length: lastDate }).map((_, index) => ({
    text: index + 1 + unit,
    value: (index + 1).toString(),
  }));
};

export { birthYearList, birthMonthList, birthDateList };
