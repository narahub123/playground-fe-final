import createNewLine from "./createNewLine";
import updateLines from "./updateLines";
import {
  isPlainSegment,
  isInlineSegment,
  getRowAndColOfSegment,
  getSegmentType,
  logError,
} from "./segments";
import setCaretPosition from "./setCaretPosition";

export {
  createNewLine,
  isPlainSegment,
  isInlineSegment,
  updateLines,
  getRowAndColOfSegment,
  getSegmentType,
  logError,
  setCaretPosition,
};
