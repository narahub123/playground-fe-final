import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "@shared/@common/types";

interface FeedState {
  posts: IPost[];
  page: number;
  isEnd: boolean;
}

const initialState: FeedState = {
  posts: [],
  page: 0,
  isEnd: false,
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    },
    addPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = [...state.posts, ...action.payload];
    },

    setPost: (state, action: PayloadAction<IPost>) => {
      state.posts = [action.payload, ...state.posts];
    },
    deleteFeedPost: (state, action: PayloadAction<string>) => {
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
    addPage: (state) => {
      state.page = state.page + 1;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setIsEnd: (state, action: PayloadAction<boolean>) => {
      state.isEnd = action.payload;
    },

    toggleFeedPostLike: (
      state,
      action: PayloadAction<{ postId: string; isAdding: boolean }>
    ) => {
      const { postId, isAdding } = action.payload;

      state.posts = state.posts.map((post) => {
        if (post._id !== postId) return post;

        const delta = isAdding ? 1 : -1;

        return {
          ...post,
          actions: {
            ...post.actions,
            likes: Math.max(0, post.actions.likes + delta),
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

          const delta = isAdding ? 1 : -1;

          return {
            ...entry,
            actions: {
              ...entry.actions,
              likes: Math.max(0, entry.actions.likes + delta),
            },
          };
        });

        return {
          ...post,
          thread: newThread,
        };
      });
    },
    toggleFeedPostBookmark: (
      state,
      action: PayloadAction<{ postId: string; isAdding: boolean }>
    ) => {
      const { postId, isAdding } = action.payload;

      state.posts = state.posts.map((post) => {
        if (post._id !== postId) return post;

        const delta = isAdding ? 1 : -1;

        return {
          ...post,
          actions: {
            ...post.actions,
            bookmarks: Math.max(0, post.actions.bookmarks + delta),
          },
        };
      });
    },
    toggleFeedThreadBookmark: (
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

          const delta = isAdding ? 1 : -1;

          return {
            ...entry,
            actions: {
              ...entry.actions,
              bookmarks: Math.max(0, entry.actions.bookmarks + delta),
            },
          };
        });

        return {
          ...post,
          thread: newThread,
        };
      });
    },
    toggleFeedPostRepost: (
      state,
      action: PayloadAction<{ postId: string; isAdding: boolean }>
    ) => {
      const { postId, isAdding } = action.payload;

      state.posts = state.posts.map((post) => {
        if (post._id !== postId) return post;

        const delta = isAdding ? 1 : -1;

        return {
          ...post,
          actions: {
            ...post.actions,
            reposts: Math.max(0, post.actions.reposts + delta),
          },
          isRepostedByCurrentUser: isAdding,
        };
      });
    },
    toggleFeedThreadRepost: (
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

          const delta = isAdding ? 1 : -1;

          return {
            ...entry,
            actions: {
              ...entry.actions,
              reposts: Math.max(0, entry.actions.reposts + delta),
            },
            isRepostedByCurrentUser: isAdding,
          };
        });

        return {
          ...post,
          thread: newThread,
        };
      });
    },
  },
});

export default feedSlice.reducer;

export const {
  setPosts,
  setPost,
  deleteFeedPost,
  updatePin,
  toggleFeedPostLike,
  toggleFeedPostBookmark,
  toggleFeedThreadLike,
  toggleFeedThreadBookmark,
  toggleFeedPostRepost,
  toggleFeedThreadRepost,
  addPage,
  setPage,
  setIsEnd,
  addPosts,
} = feedSlice.actions;
