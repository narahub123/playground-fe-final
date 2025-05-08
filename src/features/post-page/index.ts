import { postpage_lang } from "./data";
import { PostPageHeader, CommentSortDropdown, PostPageCensor } from "./ui";
import { PostPageMain, PostPageQuotes, PostPageAnalytics } from "./pages";
import { CommentSortType } from "./types";
import {
  postSlice,
  setPost,
  setPostLoading,
  setIsCommentType,
  setSkip,
  selectPost,
  selectPostLoading,
  selectIsCommentType,
  selectSkip,
  setCommentLoading,
  selectIsCommentLoading,
  setComments,
  setIsEnd,
  selectIsEnd,
  addComment,
  addActionsComments,
  togglePostLike,
  togglePostThreadLike,
  togglePostCommentLike,
  togglePostBookmark,
  togglePostThreadBookmark,
  togglePostCommentBookmark,
} from "./models";

export {
  // ui
  PostPageHeader,
  CommentSortDropdown,
  PostPageCensor,

  // data
  postpage_lang,

  // pages
  PostPageMain,
  PostPageQuotes,
  PostPageAnalytics,

  // models
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

  // selectors
  selectPost,
  selectPostLoading,
  selectIsCommentType,
  selectSkip,
  selectIsCommentLoading,
  selectIsEnd,
};

export type { CommentSortType };
