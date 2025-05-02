import { RootState } from "@app/store";

const selectPosts = (state: RootState) => state.feed.posts;

export { selectPosts };
