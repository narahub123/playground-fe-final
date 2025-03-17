import { RootState } from "@app/store";

const selectPostEditor = (state: RootState) => state.postEditor;
const selectPostEditorMedia = (state: RootState) => state.postEditor.media;

export { selectPostEditor, selectPostEditorMedia };
