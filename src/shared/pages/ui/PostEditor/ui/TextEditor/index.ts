import { HASHTAG_REGEX, MENTION_REGEX, URL_REGEX } from "./constants";
import { TextEditor, PlainSegment, InlineSegment } from "./ui";
import { useCaretPosition } from "./hooks";
import { InlineType, ISegment, SegmentType, ICaretPosition } from "./types";
import { inlineRegExpArr } from "./data";
import {
  getLines,
  getSegments,
  getInlineTexts,
  getCaretPosition,
  createInnerHtml,
  handlePaste,
  convertToHtmlSegments,
  convertToHtmlLine,
  handlePlaceholder,
} from "./utils";

export {
  // ui
  TextEditor,
  PlainSegment,
  InlineSegment,

  // constant
  HASHTAG_REGEX,
  MENTION_REGEX,
  URL_REGEX,

  // data
  inlineRegExpArr,

  // hooks
  useCaretPosition,

  // utils
  getLines,
  getSegments,
  getInlineTexts,
  getCaretPosition,
  createInnerHtml,
  handlePaste,
  convertToHtmlSegments,
  convertToHtmlLine,
  handlePlaceholder,
};

export type { InlineType, ISegment, SegmentType, ICaretPosition };
