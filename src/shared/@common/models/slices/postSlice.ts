import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "@shared/@common/types";

interface PostState {
  posts: IPost[];
}

const initialState: PostState = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    },
    setLike: (
      state,
      action: PayloadAction<{ postId: string; userId: string }>
    ) => {
      const { postId, userId } = action.payload;

      state.posts = state.posts.map((post) => {
        if (post._id !== postId) return post;

        const likes = post.actions.likes;
        const newLikes = likes.includes(userId)
          ? likes.filter((like) => like !== userId)
          : [...likes, userId];

        return {
          ...post,
          actions: {
            ...post.actions,
            likes: newLikes,
          },
        };
      });
    },
    setCommentLike: (
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

          const likes = comment.actions.likes;
          const newLikes = likes.includes(userId)
            ? likes.filter((like) => like !== userId)
            : [...likes, userId];

          return {
            ...comment,
            actions: {
              ...comment.actions,
              likes: newLikes,
            },
          };
        });

        return {
          ...post,
          comments: updatedComments,
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
  },
});

export default postSlice.reducer;

export const {
  setPosts,
  setLike,
  setPost,
  deletePost,
  updatePin,
  updatePostBookmarks,
  setCommentLike,
  setCommentBookmark,
} = postSlice.actions;
