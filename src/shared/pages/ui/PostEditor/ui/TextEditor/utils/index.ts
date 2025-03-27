import handleSelectionChange from "./handleSelectionChange";
import setCaretPosition from "./setCaretPosition";
import {
  createTextSpan,
  createLine,
  createSegment,
  createInlineSegment,
} from "./createElement";
import {
  isInlineSegment,
  isSegment,
  isLine,
  isTextSpan,
} from "./elementChecker";
import {
  detectInlineType,
  processInlineElements,
  handleInlineSegment,
} from "./inlineUtils";
import rearrangeOffsets from "./rearrangeOffset";
import handleBackspace from "./handleBackspace";

export {
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
  handleInlineSegment,
  rearrangeOffsets,
  handleBackspace,
  detectInlineType,
};
