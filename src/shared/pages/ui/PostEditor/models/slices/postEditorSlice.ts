import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostEditorState {
  media: string[];
}

const initialState: PostEditorState = {
  media: [],
};

const postEditorSlice = createSlice({
  name: "postEditor",
  initialState,
  reducers: {
    clearPostEditor: () => initialState,
    setPostEditorMedia: (state, action: PayloadAction<string[]>) => {
      const prevMedia = [...state.media];

      state.media = [...prevMedia, ...action.payload];
    },
    removePostEditorMedia: (state, action: PayloadAction<string>) => {
      const prevMedia = [...state.media];

      const newMedia = prevMedia.filter((medium) => medium !== action.payload);

      state.media = newMedia;
    },
  },
});

export default postEditorSlice.reducer;
export const { clearPostEditor, setPostEditorMedia, removePostEditorMedia } =
  postEditorSlice.actions;
