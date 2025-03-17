import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostEditorState {
  images: string[];
  videos: string[];
}

const initialState: PostEditorState = {
  images: [],
  videos: [],
};

const postEditorSlice = createSlice({
  name: "postEditor",
  initialState,
  reducers: {
    clearPostEditor: () => initialState,
    setPostEditorImages: (state, action: PayloadAction<string[]>) => {
      state.images = action.payload;
    },
    setPostEditorVideos: (state, action: PayloadAction<string[]>) => {
      state.videos = action.payload;
    },
  },
});

export default postEditorSlice.reducer;
export const { clearPostEditor, setPostEditorImages, setPostEditorVideos } =
  postEditorSlice.actions;
