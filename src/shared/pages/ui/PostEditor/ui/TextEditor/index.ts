import { TextEditor, InlineSegment, Line, Segment } from "./ui";
import {
  ILine,
  ISegment,
  ISegmentProps,
  SegmentType,
  ITextEditorContext,
  IOffset,
} from "./types";
import {
  createNewLine,
  isPlainSegment,
  isInlineSegment,
  getRowAndColOfSegment,
  getSegmentType,
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
};
export {
  createNewLine,
  isPlainSegment,
  isInlineSegment,
  getRowAndColOfSegment,
  getSegmentType,
};
export { TextEditorContext, TextEditorContextProvider };
export { useTextEditorContext };
export { initialLine };
