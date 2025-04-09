import { RootState } from "@app/store";

const selectPosts = (state: RootState) => state.post.posts;

export { selectPosts };
