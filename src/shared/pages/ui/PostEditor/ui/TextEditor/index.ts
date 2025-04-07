import { HASHTAG_REGEX, MENTION_REGEX, URL_REGEX } from "./constants";
import { TextEditor, InlineDropdown } from "./ui";
import {
  useCaretPosition,
  useInlineAutoComplete,
  useEmoji,
  useNewLine,
  usePaste,
  useSelectOption,
  useTextLength,
} from "./hooks";
import {
  InlineType,
  ISegment,
  SegmentType,
  ICaretPosition,
  IRect,
} from "./types";
import { inlineRegExpArr } from "./data";
import {
  getLines,
  getSegments,
  getInlineTexts,
  getCaretPosition,
  createInnerHtml,
  convertToHtmlSegments,
  convertToHtmlLine,
  handlePlaceholder,
  detectInlineType,
} from "./utils";

export {
  // ui
  TextEditor,
  InlineDropdown,

  // constant
  HASHTAG_REGEX,
  MENTION_REGEX,
  URL_REGEX,

  // data
  inlineRegExpArr,

  // hooks
  useCaretPosition,
  useInlineAutoComplete,
  useEmoji,
  useNewLine,
  usePaste,
  useSelectOption,
  useTextLength,

  // utils
  getLines,
  getSegments,
  getInlineTexts,
  getCaretPosition,
  createInnerHtml,
  convertToHtmlSegments,
  convertToHtmlLine,
  handlePlaceholder,
  detectInlineType,
};

export type { InlineType, ISegment, SegmentType, ICaretPosition, IRect };
