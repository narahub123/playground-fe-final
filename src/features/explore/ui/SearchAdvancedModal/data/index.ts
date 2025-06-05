import {
  selectAllKeywords,
  selectAnyKeywords,
  selectExcludeKeywords,
  selectFromAccounts,
  selectHashtags,
  selectMentionToAccounts,
  selectPhrase,
  selectToAccounts,
  setAllKeywords,
  setAnyKeywords,
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

export { keywordArray, accountArray };
