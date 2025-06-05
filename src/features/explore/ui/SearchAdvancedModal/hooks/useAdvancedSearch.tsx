import { selectSearchAdvanced } from "@features/explore/models";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { splitByWhiteSpace } from "../utils";

const useAdvancedSearch = () => {
  const { keywords, accounts, filter, engagement, period } =
    useSelector(selectSearchAdvanced);

  const { allKeywords, phrase, anyKeywords, excludeKeywords, hashtags } =
    keywords;

  const { fromAccounts, toAccounts, mentionsToAccounts } = accounts;

  const { comments, links } = filter;

  const { min_comments, min_likes, min_reposts } = engagement;

  const { since, until } = period;

  const [search, setSearch] = useState<string[]>([]);

  useEffect(() => {
    const result: string[] = [];

    if (allKeywords) {
      result.push(allKeywords);
    }

    if (phrase) {
      result.push(`"${phrase}"`);
    }

    if (anyKeywords) {
      const splitAnyKeywords = splitByWhiteSpace(anyKeywords);
      result.push(`(${splitAnyKeywords.join(" OR ")})`);
    }

    if (excludeKeywords) {
      const splitExcludeKeywords = splitByWhiteSpace(excludeKeywords);
      result.push(splitExcludeKeywords.map((k) => `-${k}`).join(" "));
    }

    if (hashtags) {
      const splitHashtags = splitByWhiteSpace(hashtags);
      result.push(`(${splitHashtags.map((h) => `#${h}`).join(" OR ")})`);
    }

    if (fromAccounts) {
      const splitFromAccounts = splitByWhiteSpace(fromAccounts);
      result.push(
        `(${splitFromAccounts.map((f) => `from:${f}`).join(" OR ")})`
      );
    }

    if (toAccounts) {
      const splitToAccounts = splitByWhiteSpace(toAccounts);
      result.push(`(${splitToAccounts.map((t) => `to:${t}`).join(" OR ")})`);
    }

    if (mentionsToAccounts) {
      const splitMentions = splitByWhiteSpace(mentionsToAccounts);
      result.push(`(${splitMentions.map((m) => `@${m}`).join(" OR ")})`);
    }

    if (comments.isOn && comments.range === "comments") {
      result.push("filter:replies");
    }

    if (links.isOn && links.range === "links") {
      result.push("filter:links");
    }

    if (min_comments > 0) {
      result.push(`min_replies:${min_comments}`);
    }

    if (min_likes > 0) {
      result.push(`min_faves:${min_likes}`);
    }

    if (min_reposts > 0) {
      result.push(`min_retweets:${min_reposts}`);
    }

    if (since.year || since.month || since.date) {
      result.push(
        `since:${since.year}-${String(since.month).padStart(2, "0")}-${String(
          since.date
        ).padStart(2, "0")}`
      );
    }

    if (until.year || until.month || until.date) {
      result.push(
        `until:${until.year}-${String(until.month).padStart(2, "0")}-${String(
          until.date
        ).padStart(2, "0")}`
      );
    }

    setSearch(result);
  }, [keywords, accounts, filter, engagement, period]);

  return search;
};

export default useAdvancedSearch;
