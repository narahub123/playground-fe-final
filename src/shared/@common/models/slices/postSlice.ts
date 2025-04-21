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
  },
});

export default postSlice.reducer;

export const { setPosts, setLike } = postSlice.actions;
