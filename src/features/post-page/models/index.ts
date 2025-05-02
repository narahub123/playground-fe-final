import { postSlice, setPost, setPostLoading, setIsCommentType } from "./slices";

import {
  selectPost,
  selectPostLoading,
  selectIsCommentType,
} from "./selectors";

export {
  // slices
  postSlice,

  // reducers
  setPost,
  setPostLoading,
  setIsCommentType,

  // selectors
  selectPost,
  selectPostLoading,
  selectIsCommentType,
};
