import { BASE_YAER } from "@features/constants";

const today = new Date();

const thisYear = today.getFullYear(); // 년
const thisMonth = today.getMonth(); // 월

/**
 * 년도 목록을 생성하는 배열
 *
 * @constant
 * @type {Array<{text: string, value: string}>}
 * @description
 * - BASE_YAER부터 현재 연도까지의 목록을 생성하고, 각 년도를 "YYYY년" 형태로 표시합니다.
 */
const birthYearList = Array.from({ length: thisYear - BASE_YAER + 1 })
  .map((_, index) => ({
    value: (BASE_YAER + index).toString(),
    text: (BASE_YAER + index).toString() + "년",
  }))
  .reverse();

/**
 * 월 목록을 정의한 배열
 *
 * @constant
 * @type {Array<{text: string, value: string}>}
 * @description
 * - 1월부터 12월까지의 목록을 "1월", "2월" ... "12월" 형태로 표시합니다.
 */
const birthMonthList = [
  { text: "1월", value: "1" },
  { text: "2월", value: "2" },
  { text: "3월", value: "3" },
  { text: "4월", value: "4" },
  { text: "5월", value: "5" },
  { text: "6월", value: "6" },
  { text: "7월", value: "7" },
  { text: "8월", value: "8" },
  { text: "9월", value: "9" },
  { text: "10월", value: "10" },
  { text: "11월", value: "11" },
  { text: "12월", value: "12" },
];

/**
 * 특정 년도와 월에 해당하는 일 목록을 생성하는 함수
 *
 * @param {string | number} [year=thisYear] - 대상 년도 (기본값: 현재 년도)
 * @param {string | number} [month=thisMonth] - 대상 월 (기본값: 현재 월)
 * @returns {Array<{text: string, value: number}>} 일 목록
 * @description
 * - 지정된 년도와 월에 맞는 일 목록을 생성합니다.
 * - 월별 마지막 날짜를 기준으로 일 목록을 생성합니다.
 * - 예: 2024년 2월이면 29일까지 생성됩니다.
 */
const birthDateList = (
  year: string | number = thisYear,
  month: string | number = thisMonth
) => {
  const target = new Date(Number(year), Number(month), 0);

  const lastDate = target.getDate();

  return Array.from({ length: lastDate }).map((_, index) => ({
    text: index + 1 + "일",
    value: index + 1,
  }));
};

export { birthYearList, birthMonthList, birthDateList };
