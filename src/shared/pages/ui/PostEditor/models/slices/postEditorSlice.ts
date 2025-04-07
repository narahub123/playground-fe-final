import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IPostEditorPost,
  IPostEditorToolbar,
  IVote,
  PostEditorToolbarButtonType,
} from "../../types";
import { IEmoji, SkintoneType } from "../../ui/PostEditorToolbar/EmojiButton";

interface PostEditorState {
  post: IPostEditorPost;
  toolbar: IPostEditorToolbar;
  emoji?: string;
  skintoneType: SkintoneType;
  recentEmojis: IEmoji[];
}

const initialState: PostEditorState = {
  post: {
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
  skintoneType: "default",
  recentEmojis: [],
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
    setSkintone: (state, action: PayloadAction<SkintoneType>) => {
      state.skintoneType = action.payload;
    },
    setRecentEmojis: (state, action: PayloadAction<IEmoji>) => {
      let recentEmojis = state.recentEmojis;

      // 최근 목록에서 추가되는 이모지와 같은 이모지는 삭제
      recentEmojis = recentEmojis.filter((e) => e.name !== action.payload.name);

      const newRecentEmojis = [action.payload, ...recentEmojis];

      state.recentEmojis = newRecentEmojis;
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
  setPostEditorVote,
  setEmoji,
  setSkintone,
  setRecentEmojis,
} = postEditorSlice.actions;
