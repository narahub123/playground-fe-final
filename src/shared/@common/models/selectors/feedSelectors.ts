import { RootState } from "@app/store";

const selectPosts = (state: RootState) => state.feed.posts;
const selectPage = (state: RootState) => state.feed.page;
const selectIsEnd = (state: RootState) => state.feed.isEnd;

export { selectPosts, selectPage, selectIsEnd };
