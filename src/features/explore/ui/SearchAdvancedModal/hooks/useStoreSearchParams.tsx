import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ANYKEYWORDS_REGEXP,
  PHRASE_REGEXP,
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
  ALLKEYWORDS_REGEXP,
  extractQuery,
  REMOVE_CLOSER_REGEXP,
} from "@features/explore/ui/SearchAdvancedModal";
import { IAdvancedSearch } from "@features/explore/types";
import { useAppDispatch } from "@app/store";
import { setAdvancedSearch } from "@features/explore/models";

const useStoreSearchParams = () => {
  const dispatch = useAppDispatch();
  const [query] = useSearchParams();

  useEffect(() => {
    const searchParam = query.get("q");

    if (!searchParam) return;

    const search: IAdvancedSearch = {
      keywords: {
        allKeywords: "",
        phrase: "",
        anyKeywords: "",
        excludeKeywords: "",
        hashtags: "",
      },
      accounts: {
        fromAccounts: "",
        toAccounts: "",
        mentionsToAccounts: "",
      },
      filter: {
        comments: {
          isOn: true,
          range: "",
        },
        links: {
          isOn: true,
          range: "",
        },
      },
      engagement: {
        min_comments: 0,
        min_likes: 0,
        min_reposts: 0,
      },
      period: {
        since: {},
        until: {},
      },
    };

    const cleanedSearchParam = searchParam.replace(REMOVE_CLOSER_REGEXP, "");

    const extractAllKeywords = extractQuery(
      cleanedSearchParam,
      ALLKEYWORDS_REGEXP
    );

    search.keywords.allKeywords = extractAllKeywords;

    const extractPhrase = extractQuery(searchParam, PHRASE_REGEXP);

    search.keywords.phrase = extractPhrase;

    const extractAnyKeywords = extractQuery(searchParam, ANYKEYWORDS_REGEXP);

    search.keywords.anyKeywords = extractAnyKeywords;

    const extractHashtags = extractQuery(searchParam, HASHTAGS_REGEXP);

    search.keywords.hashtags = extractHashtags;

    const extractExcludeKeywords = extractQuery(
      searchParam,
      EXCLUDEKEYWORDS_REGEXP
    );

    search.keywords.excludeKeywords = extractExcludeKeywords;

    const extractFromAccounts = extractQuery(searchParam, FROMACCOUNTS_REGEXP);

    search.accounts.fromAccounts = extractFromAccounts;

    const extractToAccounts = extractQuery(searchParam, TOACCOUNTS_REGEXP);

    search.accounts.toAccounts = extractToAccounts;

    const extractMentionsToAccounts = extractQuery(
      searchParam,
      MENTIONSTOACCOUNTS_REGEXP
    );

    search.accounts.mentionsToAccounts = extractMentionsToAccounts;

    const extractFilterExclude = extractQuery(
      searchParam,
      FILTEREXCLUDE_REGEXP
    );

    const isCommentsOff = extractFilterExclude.includes("comments");
    const isLinksOff = extractFilterExclude.includes("links");

    search.filter.comments.isOn = !isCommentsOff;
    search.filter.links.isOn = !isLinksOff;

    const extractFilterOnly = extractQuery(searchParam, FILTERONLY_REGEXP);

    const isCommentsOnly = extractFilterOnly.includes("comments");
    const isLinksOnly = extractFilterOnly.includes("links");

    search.filter.comments.range = isCommentsOnly ? "comments" : "";
    search.filter.links.range = isLinksOnly ? "links" : "";

    const extractMinComments = extractQuery(searchParam, MIN_COMMENTS_REGEXP);

    search.engagement.min_comments = Number(extractMinComments);

    const extractMinLikes = extractQuery(searchParam, MIN_LIKES_REGEXP);

    search.engagement.min_likes = Number(extractMinLikes);

    const extractMinReposts = extractQuery(searchParam, MIN_REPOSTS_REGEXP);

    search.engagement.min_reposts = Number(extractMinReposts);

    const extractSince = extractQuery(searchParam, SINCE_REGEXP);

    const splitSince = extractSince.split("-");

    search.period.since = {
      year: Number(splitSince[0]),
      month: Number(splitSince[1]),
      date: Number(splitSince[2]),
    };

    const extractUntil = extractQuery(searchParam, UNTIL_REGEXP);

    const splitUntil = extractUntil.split("-");

    search.period.until = {
      year: Number(splitUntil[0]),
      month: Number(splitUntil[1]),
      date: Number(splitUntil[2]),
    };

    dispatch(setAdvancedSearch(search));
  }, [query.get("q")]);
};

export default useStoreSearchParams;
