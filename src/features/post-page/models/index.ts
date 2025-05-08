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

  // selectors
  selectPost,
  selectPostLoading,
  selectIsCommentType,
  selectSkip,
  selectIsCommentLoading,
  selectIsEnd,
};
