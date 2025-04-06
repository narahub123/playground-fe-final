import {
  InlineType,
  HASHTAG_REGEX,
  MENTION_REGEX,
  URL_REGEX,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";

// 텍스트의 인라인 타입을 구별하는 함수
const detectInlineType = (text: string): InlineType | null => {
  return new RegExp(HASHTAG_REGEX).test(text)
    ? "hashtag"
    : new RegExp(MENTION_REGEX).test(text)
    ? "mention"
    : new RegExp(URL_REGEX).test(text)
    ? "url"
    : null;
};

export default detectInlineType;
