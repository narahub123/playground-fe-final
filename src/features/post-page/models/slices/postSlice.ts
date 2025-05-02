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
} = postSlice.actions;
