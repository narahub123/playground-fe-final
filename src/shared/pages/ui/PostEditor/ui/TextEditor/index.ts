import { TextEditor } from "./ui";
import {
  useCaretInfo,
  useMaintainTextEditorStructure,
  useNewLine,
} from "./hooks";
import { ICaretInfo, ILine, ISegment, ISegmentOffset } from "./types";
import {
  handleSelectionChange,
  createLine,
  createTextSpan,
  createSegment,
  setCaretPosition,
  isInlineSegment,
  isSegment,
  isLine,
} from "./utils";

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
};

export type { ICaretInfo, ILine, ISegment, ISegmentOffset };
