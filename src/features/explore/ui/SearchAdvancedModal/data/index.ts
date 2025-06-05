import {
  selectAllKeywords,
  selectAnyKeywords,
  selectExcludeKeywords,
  selectFromAccounts,
  selectHashtags,
  selectMentionToAccounts,
  selectMinComments,
  selectMinLikes,
  selectMinReposts,
  selectPhrase,
  selectToAccounts,
  setAllKeywords,
  setAnyKeywords,
  setEngageMinComments,
  setEngageMinLikes,
  setEngageMinReposts,
  setExcludeKeywords,
  setFromAccounts,
  setHashtags,
  setMentionsToAccounts,
  setPhrase,
  setToAccounts,
} from "@features/explore";

const keywordArray = [
  {
    field: "allKeywords",
    reducer: setAllKeywords,
    selector: selectAllKeywords,
  },
  {
    field: "phrase",
    reducer: setPhrase,
    selector: selectPhrase,
  },
  {
    field: "anyKeywords",
    reducer: setAnyKeywords,
    selector: selectAnyKeywords,
  },
  {
    field: "excludeKeywords",
    reducer: setExcludeKeywords,
    selector: selectExcludeKeywords,
  },
  {
    field: "hashtags",
    reducer: setHashtags,
    selector: selectHashtags,
  },
];

const accountArray = [
  {
    field: "fromAccounts",
    reducer: setFromAccounts,
    selector: selectFromAccounts,
  },
  {
    field: "toAccounts",
    reducer: setToAccounts,
    selector: selectToAccounts,
  },
  {
    field: "mentionsToAccounts",
    reducer: setMentionsToAccounts,
    selector: selectMentionToAccounts,
  },
];

const engagementArray = [
  {
    field: "min_comments",
    reducer: setEngageMinComments,
    selector: selectMinComments,
    min: 0,
    max: 1000,
  },
  {
    field: "min_likes",
    reducer: setEngageMinLikes,
    selector: selectMinLikes,
    min: 0,
    max: 1000,
  },
  {
    field: "min_reposts",
    reducer: setEngageMinReposts,
    selector: selectMinReposts,
    min: 0,
    max: 1000,
  },
];

export { keywordArray, accountArray, engagementArray };
