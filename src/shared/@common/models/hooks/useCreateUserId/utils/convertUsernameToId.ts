import { isAlphabet } from "./alphabet";
import { isBlank } from "./blank";
import { isHangul, romanizeHangul } from "./hangul";
import splitIntoChars from "./splitIntoChars";

// 유저 이름을 유저 아이디로 변환하기
const convertUsernameToId = (username: string) => {
  // 텍스트 분해하기
  const splitChars = splitIntoChars(username);

  const convertedChars = splitChars.map((char) => {
    // 영문인 경우 그대로 반환
    if (isAlphabet(char)) {
      return char;
      // 한글인 경우 영문으로 변경하여 반환
    } else if (isHangul(char)) {
      return romanizeHangul(char);
      // 공백 문자는 _로 반환
    } else if (isBlank(char)) {
      return "_";
    }

    // 그 외 문자는 빈 문자열로 반환
    return "";
  });

  return convertedChars.join("");
};

export default convertUsernameToId;
