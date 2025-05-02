import { RootState } from "@app/store";

const selectPost = (state: RootState) => state.post.data;
const selectPostLoading = (state: RootState) => state.post.isPostloading;
const selectIsCommentLoading = (state: RootState) =>
  state.post.isCommentLoading;
const selectIsCommentType = (state: RootState) => state.post.isCommentType;
const selectSkip = (state: RootState) => state.post.skip;
const selectIsEnd = (state: RootState) => state.post.isEnd;

export {
  selectPost,
  selectPostLoading,
  selectIsCommentType,
  selectSkip,
  selectIsCommentLoading,
  selectIsEnd,
};
