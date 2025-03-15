import createNewLine from "./createNewLine";
import updateLines from "./updateLines";
import {
  isPlainSegment,
  isInlineSegment,
  getRowAndColOfSegment,
  getSegmentType,
  logError,
  logStart,
  logEnd,
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
  logStart,
  logEnd,
};
