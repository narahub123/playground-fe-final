import { postSlice, setPost, setPostLoading } from "./slices";

import { selectPost, selectPostLoading } from "./selectors";

export {
  // slices
  postSlice,

  // reducers
  setPost,
  setPostLoading,

  // selectors
  selectPost,
  selectPostLoading,
};
