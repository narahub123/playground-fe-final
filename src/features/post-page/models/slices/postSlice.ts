import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "@shared/@common/types";

interface PostState {
  data?: IPost;
  isCommentType: boolean;
  isPostloading: boolean;
  skip: number;
  isCommentLoading: boolean;
  isEnd: boolean;
}

const initialState: PostState = {
  isPostloading: false,
  isCommentType: false,
  skip: 0,
  isCommentLoading: false,
  isEnd: false,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<IPost>) => {
      state.data = action.payload;
      state.skip = 1;
    },
    setPostLoading: (state, action: PayloadAction<boolean>) => {
      state.isPostloading = action.payload;
    },
    setIsCommentType: (state, action: PayloadAction<boolean>) => {
      state.isCommentType = action.payload;
    },
    setSkip: (state) => {
      state.skip = state.skip + 1;
    },
    setCommentLoading: (state, action: PayloadAction<boolean>) => {
      state.isCommentLoading = action.payload;
    },
    setComments: (state, action: PayloadAction<IPost[]>) => {
      const newComments = action.payload;

      if (state.data) {
        state.data.comments = [...state.data.comments, ...newComments];
      }
    },
    setIsEnd: (state, action: PayloadAction<boolean>) => {
      state.isEnd = action.payload;
    },
    addComment: (state, action: PayloadAction<IPost>) => {
      if (state.data) {
        state.data.comments = [action.payload, ...state.data.comments];
      }
    },
    addActionsComments: (state, action: PayloadAction<string>) => {
      if (state.data) {
        const thread = state.data.thread;

        state.data.thread = state.data.thread.map((entry, index) => {
          if (index !== thread.length - 1) return entry;

          return {
            ...entry,
            actions: {
              ...entry.actions,
              comments: [...entry.actions.comments, action.payload],
            },
          };
        });
      }
    },
  },
});

export default postSlice.reducer;

export const {
  setPost,
  setPostLoading,
  setIsCommentType,
  setSkip,
  setCommentLoading,
  setComments,
  setIsEnd,
  addComment,
  addActionsComments,
} = postSlice.actions;
