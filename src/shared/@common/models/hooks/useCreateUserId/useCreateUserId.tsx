import { useLanguageContent } from "@shared/@common/models/hooks";
import {
  isAlphabet,
  isBlank,
  isHangul,
  romanizeHangul,
  splitIntoChars,
} from "./utils";

const useCreateUserId = (text: string) => {
  // 언어 설정
  const {} = useLanguageContent(["hooks", "useCreateUserId"]);

  // 예시
  const username = "s 안녕";

  // 텍스트 분해 하기
  const splitChars = splitIntoChars(username);

  const convertedChars = splitChars.map((char) => {
    // 영문인지 확인
    if (isAlphabet(char)) {
      // 영문인 경우 그대로 반환
      return char;
      // 한글인지 여부 확인
    } else if (isHangul(char)) {
      // 한글이면 영문으로 변경해서 반환
      return romanizeHangul(char);
      // 공백 문자 여부 확인
    } else if (isBlank(char)) {
      // _ 반환
      return "_";
    }

    // 그 외는 빈문자열로 반환
    return "";
  });

  const convertedText = convertedChars.join("");

  console.log(convertedText);

  return;
};

export default useCreateUserId;
