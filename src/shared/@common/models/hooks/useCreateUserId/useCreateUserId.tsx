import { useLanguageContent } from "@shared/@common/models/hooks";
import { splitIntoChars } from "./utils";

const useCreateUserId = (text: string) => {
  // 언어 설정
  const {} = useLanguageContent(["hooks", "useCreateUserId"]);

  // 예시
  const username = "s 안녕";

  // 텍스트 분해 하기
  const splitChars = splitIntoChars(username);

  console.log(splitChars);

  return;
};

export default useCreateUserId;
