import { TextEditor, InlineSegment, Line, Segment } from "./ui";
import {
  ILine,
  ISegment,
  ISegmentProps,
  SegmentType,
  ITextEditorContext,
  IOffset,
  ICaretInfo,
} from "./types";
import {
  createNewLine,
  isPlainSegment,
  isInlineSegment,
  getRowAndColOfSegment,
  getSegmentType,
  logError,
  logStart,
  logEnd,
  setCaretPosition,
} from "./utils";
import { TextEditorContext, TextEditorContextProvider } from "./context";
import { useTextEditorContext } from "./hooks";
import { initialLine } from "./data";

export { TextEditor, InlineSegment, Line, Segment };
export type {
  ILine,
  ISegment,
  ISegmentProps,
  SegmentType,
  ITextEditorContext,
  IOffset,
  ICaretInfo,
};
export {
  createNewLine,
  isPlainSegment,
  isInlineSegment,
  getRowAndColOfSegment,
  getSegmentType,
  logStart,
  logEnd,
  logError,
  setCaretPosition,
};
export { TextEditorContext, TextEditorContextProvider };
export { useTextEditorContext };
export { initialLine };
