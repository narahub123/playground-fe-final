import { RootState } from "@app/store";

const selectPostEditor = (state: RootState) => state.postEditor;
const selectPostEditorMedia = (state: RootState) => state.postEditor.post.media;
const selectPostEditorToolbar = (state: RootState) => state.postEditor.toolbar;
const selectEmoji = (state: RootState) => state.postEditor.emoji;
const selectSkintone = (state: RootState) => state.postEditor.skintoneType;
const selectRecentEmojis = (state: RootState) => state.postEditor.recentEmojis;

export {
  selectPostEditor,
  selectPostEditorMedia,
  selectPostEditorToolbar,
  selectEmoji,
  selectSkintone,
  selectRecentEmojis,
};
