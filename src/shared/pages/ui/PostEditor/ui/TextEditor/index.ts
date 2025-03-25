import { TextEditor } from "./ui";
import { useCaretInfo, useMaintainTextEditorStructure } from "./hooks";
import { ICaretInfo, ILine, ISegment } from "./types";
import {
  handleSelectionChange,
  createLine,
  createTextSpan,
  createSegment,
  setCaretPosition,
} from "./utils";

export {
  TextEditor,
  useCaretInfo,
  useMaintainTextEditorStructure,
  handleSelectionChange,
  createLine,
  createSegment,
  createTextSpan,
  setCaretPosition,
};

export type { ICaretInfo, ILine, ISegment };
