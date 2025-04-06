import { HASHTAG_REGEX, MENTION_REGEX, URL_REGEX } from "./constants";
import { TextEditor, InlineDropdown } from "./ui";
import { useCaretPosition, useInlineAutoComplete } from "./hooks";
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
  handlePaste,
  convertToHtmlSegments,
  convertToHtmlLine,
  handlePlaceholder,
  handleNewLine,
  detectInlineType,
  handleSelectOption,
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
  handleNewLine,
  detectInlineType,
  handleSelectOption,
};

export type { InlineType, ISegment, SegmentType, ICaretPosition, IRect };
