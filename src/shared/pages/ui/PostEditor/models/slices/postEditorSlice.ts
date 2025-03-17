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
    removePostEditorImage: (state, action: PayloadAction<string>) => {
      const prevImages = [...state.images];

      const newImages = prevImages.filter((image) => image !== action.payload);

      state.images = newImages;
    },
    setPostEditorVideos: (state, action: PayloadAction<string[]>) => {
      state.videos = action.payload;
    },
    removePostEditorVideo: (state, action: PayloadAction<string>) => {
      const prevVideos = [...state.videos];

      const newVideos = prevVideos.filter((video) => video !== action.payload);

      state.videos = newVideos;
    },
  },
});

export default postEditorSlice.reducer;
export const {
  clearPostEditor,
  setPostEditorImages,
  setPostEditorVideos,
  removePostEditorImage,
  removePostEditorVideo,
} = postEditorSlice.actions;
