/**
 * 특정 이름의 쿠키 값을 가져와 JSON 형식으로 파싱합니다.
 *
 * @param {string} name - 가져올 쿠키의 이름.
 * @returns {any | undefined} - 쿠키에서 파싱된 JSON 객체 또는 undefined.
 *
 * @example
 * // 쿠키에 "userInfo"라는 이름으로 저장된 데이터가 있을 경우:
 * // document.cookie = "userInfo=%7B%22id%22%3A1%2C%22name%22%3A%22John%22%7D";
 * const userInfo = getUserInfoFromCookie("userInfo");
 * console.log(userInfo); // { id: 1, name: "John" }
 *
 * @throws {Error} - 쿠키 데이터가 올바른 JSON 형식이 아닐 경우 오류를 기록하고 undefined를 반환합니다.
 */
const getUserInfoFromCookie = (name: string): any | undefined => {
  try {
    // 쿠키에서 주어진 이름과 일치하는 값을 정규식으로 검색
    const cookieValue = document.cookie.match(`(?:^|; )${name}=([^;]*)`);
    if (!cookieValue) {
      // 쿠키가 존재하지 않는 경우 undefined 반환
      return undefined;
    }

    // URI로 인코딩된 쿠키 값을 디코딩
    const decodedCookie = decodeURIComponent(cookieValue[1]);

    // 디코딩된 값을 JSON으로 파싱하여 객체로 변환
    return JSON.parse(decodedCookie);
  } catch (error) {
    // 파싱 중 오류가 발생한 경우 콘솔에 에러 메시지 출력
    console.error(`쿠키 이름이 '${name}'인 데이터를 파싱 중 에러 발생:`, error);
    return undefined;
  }
};

export default getUserInfoFromCookie;
