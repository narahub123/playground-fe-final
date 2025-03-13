import { TextEditor, InlineSegment, Line, Segment } from "./ui";
import {
  ILine,
  ISegment,
  ISegmentProps,
  SegmentType,
  ITextEditorContext,
} from "./types";
import { createNewLine, isPlainSegment, isInlineSegment } from "./utils";
import { TextEditorContext, TextEditorContextProvider } from "./context";
import { useTextEditorContext } from "./hooks";

export { TextEditor, InlineSegment, Line, Segment };
export type { ILine, ISegment, ISegmentProps, SegmentType, ITextEditorContext };
export { createNewLine, isPlainSegment, isInlineSegment };
export { TextEditorContext, TextEditorContextProvider };
export { useTextEditorContext };
