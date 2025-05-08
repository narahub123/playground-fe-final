import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "@shared/@common/types";

interface PostState {
  posts: IPost[];
}

const initialState: PostState = {
  posts: [],
};

const feedSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    },

    setPost: (state, action: PayloadAction<IPost>) => {
      state.posts = [action.payload, ...state.posts];
    },
    deletePost: (state, action: PayloadAction<string>) => {
      const posts = state.posts;

      const filtered = posts.filter((post) => post._id !== action.payload);

      state.posts = filtered;
    },
    updatePin: (state, action: PayloadAction<string>) => {
      const postId = action.payload;

      state.posts = state.posts.map((post) =>
        post._id === postId ? { ...post, pin: !post.pin } : post
      );
    },
    updatePostBookmarks: (
      state,
      action: PayloadAction<{ postId: string; userId: string }>
    ) => {
      const { postId, userId } = action.payload;

      state.posts = state.posts.map((post) => {
        if (post._id === postId) {
          const bookmarks = post.actions.bookmarks;

          const newBookmarks = bookmarks.includes(userId)
            ? bookmarks.filter((bookmark) => bookmark !== userId)
            : [...bookmarks, userId];

          return {
            ...post,
            actions: {
              ...post.actions,
              bookmarks: newBookmarks,
            },
          };
        } else return post;
      });
    },
    toggleFeedPostLike: (
      state,
      action: PayloadAction<{ postId: string; isAdding: boolean }>
    ) => {
      const { postId, isAdding } = action.payload;

      state.posts = state.posts.map((post) => {
        if (post._id !== postId) return post;

        return {
          ...post,
          actions: {
            ...post.actions,
            likes: post.actions.likes + (isAdding ? 1 : -1),
          },
        };
      });
    },
    toggleFeedThreadLike: (
      state,
      action: PayloadAction<{
        postId: string;
        threadCommentId: string;
        isAdding: boolean;
      }>
    ) => {
      const { postId, threadCommentId, isAdding } = action.payload;

      state.posts = state.posts.map((post) => {
        if (post._id !== postId) return post;

        const newThread = post.thread.map((entry) => {
          if (entry._id !== threadCommentId) return entry;

          return {
            ...entry,
            actions: {
              ...entry.actions,
              likes: Math.max(0, entry.actions.likes + (isAdding ? 1 : -1)),
            },
          };
        });

        return {
          ...post,
          thread: newThread,
        };
      });
    },
    setCommentBookmark: (
      state,
      action: PayloadAction<{
        originalPostId: string;
        commentId: string;
        userId: string;
      }>
    ) => {
      const { originalPostId, commentId, userId } = action.payload;

      state.posts = state.posts.map((post) => {
        if (post._id !== originalPostId) return post;

        const updatedComments = post.comments.map((comment) => {
          if (comment._id !== commentId) return comment;

          const bookmarks = comment.actions.bookmarks;
          const newBookmarks = bookmarks.includes(userId)
            ? bookmarks.filter((bookmark) => bookmark !== userId)
            : [...bookmarks, userId];

          return {
            ...comment,
            actions: {
              ...comment.actions,
              bookmarks: newBookmarks,
            },
          };
        });

        return {
          ...post,
          comments: updatedComments,
        };
      });
    },
  },
});

export default feedSlice.reducer;

export const {
  setPosts,
  toggleFeedPostLike,
  setPost,
  deletePost,
  updatePin,
  updatePostBookmarks,
  toggleFeedThreadLike,
  setCommentBookmark,
} = feedSlice.actions;
