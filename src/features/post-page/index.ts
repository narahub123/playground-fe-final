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

  // selectors
  selectPost,
  selectPostLoading,
  selectIsCommentType,
  selectSkip,
  selectIsCommentLoading,
  selectIsEnd,
};

export type { CommentSortType };
