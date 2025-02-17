/**
 * 주어진 연도와 월에 대해 날짜가 유효한지 확인하고,
 * 유효하지 않으면 해당 월의 마지막 날짜를 반환하는 함수입니다.
 *
 * @param { number} year - 연도 값 (문자열 또는 숫자)
 * @param { number} month - 월 값 (문자열 또는 숫자)
 * @param { number} date - 날짜 값 (문자열 또는 숫자)
 *
 * @returns { number} - 유효한 날짜 값 또는 해당 월의 마지막 날짜
 */
const validateDate = (year: number, month: number, date: number) => {
  // 입력된 연도와 월을 바탕으로 해당 월의 마지막 날짜를 구합니다.
  const targetMonth = new Date(year, month, 0);

  // 해당 월의 마지막 날짜를 가져옵니다.
  const lastDate = targetMonth.getDate();

  // 입력된 날짜가 해당 월의 마지막 날짜보다 크면, 마지막 날짜로 변경하여 반환
  // 그렇지 않으면 입력된 날짜 그대로 반환
  return date > lastDate ? lastDate : date;
};

export { validateDate };
