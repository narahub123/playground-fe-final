import { TextEditor } from "./ui";
import {
  useCaretInfo,
  useMaintainTextEditorStructure,
  useNewLine,
} from "./hooks";
import {
  ICaretInfo,
  ILine,
  ISegment,
  ISegmentOffset,
  InlineType,
} from "./types";
import {
  handleSelectionChange,
  createLine,
  createTextSpan,
  createSegment,
  setCaretPosition,
  isInlineSegment,
  isSegment,
  isLine,
  isTextSpan,
  processInlineElements,
  createInlineSegment,
} from "./utils";
import { HASHTAG_REGEX, MENTION_REGEX, URL_REGEX } from "./constants";

export {
  TextEditor,
  useCaretInfo,
  useMaintainTextEditorStructure,
  useNewLine,
  handleSelectionChange,
  createLine,
  createSegment,
  createTextSpan,
  setCaretPosition,
  isInlineSegment,
  isSegment,
  isLine,
  isTextSpan,
  processInlineElements,
  createInlineSegment,

  // constant
  HASHTAG_REGEX,
  MENTION_REGEX,
  URL_REGEX,
};

export type { ICaretInfo, ILine, ISegment, ISegmentOffset, InlineType };
