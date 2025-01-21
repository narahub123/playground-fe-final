import { useLanguageContent } from "@shared/@common/models/hooks";
import { isAlphabetOrBlank, splitIntoChars } from "./utils";

const useCreateUserId = (text: string) => {
  // 언어 설정
  const {} = useLanguageContent(["hooks", "useCreateUserId"]);

  // 예시
  const username = "s 안녕";

  // 텍스트 분해 하기
  const splitChars = splitIntoChars(username);

  console.log(splitChars);
  const convertedChars = splitChars.map((char) => {
    // 영문이나 공백 문자인 경우 그대로 반환
    if (isAlphabetOrBlank(char)) {
      return char;
    }

    // 그 외는 빈문자열로 반환
    return "";
  });

  console.log(convertedChars);

  const convertedText = convertedChars.join("");

  console.log(convertedText);

  return;
};

export default useCreateUserId;
