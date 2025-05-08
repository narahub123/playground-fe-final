import { RootState } from "@app/store";

const selectPosts = (state: RootState) => state.feed.posts;
const selectPage = (state: RootState) => state.feed.page;

export { selectPosts, selectPage };
