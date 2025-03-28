import {
  HASHTAG_REGEX,
  MENTION_REGEX,
  URL_REGEX,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";

const inlineRegExpArr = [HASHTAG_REGEX, MENTION_REGEX, URL_REGEX];

export { inlineRegExpArr };
