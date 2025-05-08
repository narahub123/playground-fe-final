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
    togglePostLike: (state, action: PayloadAction<{ isAdding: boolean }>) => {
      if (!state.data) return;

      const { isAdding } = action.payload;

      const delta = isAdding ? 1 : -1;

      state.data.actions.likes = Math.max(0, state.data.actions.likes + delta);
    },
    togglePostThreadLike: (
      state,
      action: PayloadAction<{ threadCommentId: string; isAdding: boolean }>
    ) => {
      if (!state.data) return;

      const { threadCommentId, isAdding } = action.payload;

      state.data.thread = state.data.thread.map((entry) => {
        if (entry._id !== threadCommentId) return entry;

        const delta = isAdding ? 1 : -1;

        return {
          ...entry,
          actions: {
            ...entry.actions,
            likes: Math.max(0, entry.actions.likes + delta),
          },
        };
      });
    },
    togglePostCommentLike: (
      state,
      action: PayloadAction<{ commentId: string; isAdding: boolean }>
    ) => {
      if (!state.data) return;

      const { commentId, isAdding } = action.payload;

      state.data.comments = state.data.comments.map((comment) => {
        if (comment._id !== commentId) return comment;

        const delta = isAdding ? 1 : -1;

        return {
          ...comment,
          actions: {
            ...comment.actions,
            likes: Math.max(0, comment.actions.likes + delta),
          },
        };
      });
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
  togglePostLike,
  togglePostThreadLike,
  togglePostCommentLike,
} = postSlice.actions;
