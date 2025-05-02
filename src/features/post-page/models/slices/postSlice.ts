import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "@shared/@common/types";

interface PostState {
  data?: IPost;
  isCommentType: boolean;
  loading: boolean;
}

const initialState: PostState = {
  loading: false,
  isCommentType: false,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<IPost>) => {
      state.data = action.payload;
    },
    setPostLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setIsCommentType: (state, action: PayloadAction<boolean>) => {
      state.isCommentType = action.payload;
    },
  },
});

export default postSlice.reducer;

export const { setPost, setPostLoading, setIsCommentType } = postSlice.actions;
