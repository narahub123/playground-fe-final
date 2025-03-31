import { HASHTAG_REGEX, MENTION_REGEX, URL_REGEX } from "./constants";
import { TextEditor, PlainSegment } from "./ui";
import {} from "./hooks";
import { InlineType, ISegment, SegmentType } from "./types";
import { inlineRegExpArr } from "./data";
import { getLines, getSegments, getInlineTexts } from "./utils";

export {
  // ui
  TextEditor,
  PlainSegment,

  // constant
  HASHTAG_REGEX,
  MENTION_REGEX,
  URL_REGEX,

  // data
  inlineRegExpArr,

  // utils
  getLines,
  getSegments,
  getInlineTexts,
};

export type { InlineType, ISegment, SegmentType };
