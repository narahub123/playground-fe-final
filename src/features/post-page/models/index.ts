import {
  postSlice,
  setPost,
  setPostLoading,
  setIsCommentType,
  setSkip,
  setCommentLoading,
  setComments,
  setIsEnd,
  addComment,
  addActionsComments,
  togglePostLike,
  togglePostThreadLike,
  togglePostCommentLike,
  togglePostBookmark,
  togglePostThreadBookmark,
  togglePostCommentBookmark,
  togglePostRepost,
  togglePostThreadRepost,
  togglePostCommentRepost,
} from "./slices";

import {
  selectPost,
  selectPostLoading,
  selectIsCommentType,
  selectSkip,
  selectIsCommentLoading,
  selectIsEnd,
} from "./selectors";

export {
  // slices
  postSlice,

  // reducers
  setPost,
  setPostLoading,
  setIsCommentType,
  setSkip,
  setCommentLoading,
  setComments,
  setIsEnd,
  addComment,
  addActionsComments,
  togglePostLike,
  togglePostThreadLike,
  togglePostCommentLike,
  togglePostBookmark,
  togglePostThreadBookmark,
  togglePostCommentBookmark,
  togglePostRepost,
  togglePostThreadRepost,
  togglePostCommentRepost,

  // selectors
  selectPost,
  selectPostLoading,
  selectIsCommentType,
  selectSkip,
  selectIsCommentLoading,
  selectIsEnd,
};
