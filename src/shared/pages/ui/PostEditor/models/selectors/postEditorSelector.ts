import { RootState } from "@app/store";

const selectPostEditor = (state: RootState) => state.postEditor;
const selectPostEditorMedia = (state: RootState) => state.postEditor.post.media;
const selectPostEditorToolbar = (state: RootState) => state.postEditor.toolbar;
const selectEmoji = (state: RootState) => state.postEditor.emoji;
const selectCaretPosition = (state: RootState) =>
  state.postEditor.caretPosition;
const selectCursorPosition = (state: RootState) =>
  state.postEditor.cursorPosition;
const selectPostEditorTextLength = (state: RootState) =>
  state.postEditor.post.textLength;
const selectPostEditorSchedule = (state: RootState) =>
  state.postEditor.post.schedule;
const selectInnerHtml = (state: RootState) => state.postEditor.post.innerHtml;

export {
  selectPostEditor,
  selectPostEditorMedia,
  selectPostEditorToolbar,
  selectEmoji,
  selectCaretPosition,
  selectCursorPosition,
  selectPostEditorTextLength,
  selectPostEditorSchedule,
  selectInnerHtml,
};
