import { postpage_lang } from "./data";
import { PostPageHeader, CommentSortDropdown } from "./ui";
import { PostPageMain, PostPageQuotes, PostPageAnalytics } from "./pages";
import { CommentSortType } from "./types";
import {
  postSlice,
  setPost,
  setPostLoading,
  setIsCommentType,
  selectPost,
  selectPostLoading,
  selectIsCommentType,
} from "./models";

export {
  // ui
  PostPageHeader,
  CommentSortDropdown,

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

  // selectors
  selectPost,
  selectPostLoading,
  selectIsCommentType,
};

export type { CommentSortType };
