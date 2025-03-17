import { RootState } from "@app/store";

const selectPostEditor = (state: RootState) => state.postEditor;
const selectPostEditorImages = (state: RootState) => state.postEditor.images;
const selectPostEditorVideos = (state: RootState) => state.postEditor.videos;

export { selectPostEditor, selectPostEditorImages, selectPostEditorVideos };
