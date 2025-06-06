import {
  SearchAdvancedModal,
  InputSearchAdvanced,
  SelectDateGroup,
  SelectDateUnit,
} from "./ui";
import {
  keywordArray,
  accountArray,
  engagementArray,
  sinceArray,
  untilArray,
} from "./data";

import { useAdvancedSearch, useStoreSearchParams } from "./hooks";

import { splitByWhiteSpace, extractQuery } from "./utils";

import {
  ALLKEYWORDS_REGEXP,
  PHRASE_REGEXP,
  ANYKEYWORDS_REGEXP,
  HASHTAGS_REGEXP,
  EXCLUDEKEYWORDS_REGEXP,
  FROMACCOUNTS_REGEXP,
  TOACCOUNTS_REGEXP,
  MENTIONSTOACCOUNTS_REGEXP,
  FILTERONLY_REGEXP,
  FILTEREXCLUDE_REGEXP,
  MIN_COMMENTS_REGEXP,
  MIN_LIKES_REGEXP,
  MIN_REPOSTS_REGEXP,
  SINCE_REGEXP,
  UNTIL_REGEXP,
} from "./constants";

export {
  // data
  keywordArray,
  accountArray,
  engagementArray,
  sinceArray,
  untilArray,

  // ui
  SearchAdvancedModal,
  InputSearchAdvanced,
  SelectDateGroup,
  SelectDateUnit,

  // hooks
  useAdvancedSearch,
  useStoreSearchParams,

  // utils
  splitByWhiteSpace,
  extractQuery,

  // constants
  ALLKEYWORDS_REGEXP,
  PHRASE_REGEXP,
  ANYKEYWORDS_REGEXP,
  HASHTAGS_REGEXP,
  EXCLUDEKEYWORDS_REGEXP,
  FROMACCOUNTS_REGEXP,
  TOACCOUNTS_REGEXP,
  MENTIONSTOACCOUNTS_REGEXP,
  FILTERONLY_REGEXP,
  FILTEREXCLUDE_REGEXP,
  MIN_COMMENTS_REGEXP,
  MIN_LIKES_REGEXP,
  MIN_REPOSTS_REGEXP,
  SINCE_REGEXP,
  UNTIL_REGEXP,
};
