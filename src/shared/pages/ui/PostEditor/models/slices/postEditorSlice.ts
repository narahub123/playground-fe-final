import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IPostEditorPost,
  IPostEditorToolbar,
  PostEditorToolbarButtonType,
} from "../../types";

interface PostEditorState {
  post: IPostEditorPost;
  toolbar: IPostEditorToolbar;
}

const initialState: PostEditorState = {
  post: {
    media: [],
  },
  toolbar: {
    media: false,
    vote: false,
    emoticon: false,
    reserve: false,
    location: false,
  },
};

const postEditorSlice = createSlice({
  name: "postEditor",
  initialState,
  reducers: {
    clearPostEditor: () => initialState,
    setPostEditorMedia: (state, action: PayloadAction<string[]>) => {
      const prevMedia = [...state.post.media];

      state.post.media = [...prevMedia, ...action.payload];
    },
    removePostEditorMedia: (state, action: PayloadAction<number>) => {
      const prevMedia = [...state.post.media];

      const newMedia = prevMedia.filter((_, index) => index !== action.payload);

      state.post.media = newMedia;
    },
    postEditorToolbarButtonOn: (
      state,
      action: PayloadAction<PostEditorToolbarButtonType>
    ) => {
      state.toolbar[action.payload] = true;
    },
    postEditorToolbarButtonOff: (
      state,
      action: PayloadAction<PostEditorToolbarButtonType>
    ) => {
      state.toolbar[action.payload] = false;
    },
  },
});

export default postEditorSlice.reducer;
export const {
  clearPostEditor,
  setPostEditorMedia,
  removePostEditorMedia,
  postEditorToolbarButtonOff,
  postEditorToolbarButtonOn,
} = postEditorSlice.actions;
