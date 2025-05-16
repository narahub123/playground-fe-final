import { RootState } from "@app/store";

const selectPosts = (state: RootState) => state.feed.posts;
const selectPage = (state: RootState) => state.feed.page;
const selectIsEnd = (state: RootState) => state.feed.isEnd;
const selectIsFeedLoading = (state: RootState) => state.feed.isLoading;

export { selectPosts, selectPage, selectIsEnd, selectIsFeedLoading };
