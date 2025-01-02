import { BASE_YAER } from "@features/constants";

const today = new Date();

const year = today.getFullYear(); // 년
const month = today.getMonth(); // 월
const date = today.getDate(); // 일

// 년 목록
const birthYearList = Array.from({ length: year - BASE_YAER + 1 })
  .map((_, index) => ({
    value: (BASE_YAER + index).toString(),
    text: (BASE_YAER + index).toString(),
  }))
  .reverse();

export { birthYearList };
