import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IPostEditorPost,
  IPostEditorToolbar,
  IVote,
  PostEditorToolbarButtonType,
} from "../../types";
import { ICaretPosition } from "../../ui/TextEditor";

interface PostEditorState {
  post: IPostEditorPost;
  toolbar: IPostEditorToolbar;
  emoji?: string;
  caretPosition: ICaretPosition;
  cursorPosition: ICaretPosition;
  shouldClearEditor: boolean;
}

const initialState: PostEditorState = {
  post: {
    innerHtml: "",
    textLength: 0,
    media: [],
    vote: {
      options: [],
      duration: null,
    },
  },
  toolbar: {
    media: false,
    vote: false,
    emoji: false,
    schedule: false,
    location: false,
  },
  caretPosition: { caretPos: 0, row: 0, col: 0 },
  cursorPosition: { caretPos: 0, row: 0, col: 0 },
  shouldClearEditor: false,
};

const postEditorSlice = createSlice({
  name: "postEditor",
  initialState,
  reducers: {
    clearPostEditor: () => initialState,
    setPostEditorTextLength: (state, action: PayloadAction<number>) => {
      state.post.textLength = action.payload;
    },
    setPostEditorMedia: (state, action: PayloadAction<string[]>) => {
      const prevMedia = [...state.post.media];

      state.post.media = [...prevMedia, ...action.payload];
    },
    removePostEditorMedia: (state, action: PayloadAction<number>) => {
      const prevMedia = [...state.post.media];

      const newMedia = prevMedia.filter((_, index) => index !== action.payload);

      state.post.media = newMedia;
    },
    setPostEditorVote: (state, action: PayloadAction<IVote>) => {
      state.post.vote = action.payload;
    },
    postEditorToolbarButtonOn: (
      state,
      action: PayloadAction<PostEditorToolbarButtonType>
    ) => {
      if (!state.toolbar[action.payload]) {
        state.toolbar = { ...state.toolbar, [action.payload]: true };
      }
    },
    postEditorToolbarButtonOff: (
      state,
      action: PayloadAction<PostEditorToolbarButtonType>
    ) => {
      if (state.toolbar[action.payload]) {
        state.toolbar = { ...state.toolbar, [action.payload]: false };
      }
    },
    setEmoji: (state, action: PayloadAction<string | undefined>) => {
      state.emoji = action.payload;
    },

    setCaretPosition: (state, action: PayloadAction<ICaretPosition>) => {
      state.caretPosition = action.payload;
    },
    setCursorPosition: (state, action: PayloadAction<ICaretPosition>) => {
      state.cursorPosition = action.payload;
    },
    setPostEditorSchedule: (state, action: PayloadAction<Date | undefined>) => {
      state.post.schedule = action.payload;
    },
    setInnerHtml: (state, action: PayloadAction<string>) => {
      state.post.innerHtml = action.payload;
    },
    setShouldClearEditor: (state) => {
      state.shouldClearEditor = !state.shouldClearEditor;
    },
  },
});

export default postEditorSlice.reducer;
export const {
  clearPostEditor,
  setPostEditorTextLength,
  setPostEditorMedia,
  removePostEditorMedia,
  postEditorToolbarButtonOff,
  postEditorToolbarButtonOn,
  setPostEditorVote,
  setEmoji,
  setCaretPosition,
  setCursorPosition,
  setPostEditorSchedule,
  setInnerHtml,
  setShouldClearEditor,
} = postEditorSlice.actions;
