const HASHTAG_REGEX =
  /(?<=^|[^\p{L}0-9_&])#[\p{L}0-9_]*(?=[\p{L}_])[\p{L}0-9_]*(?=$|[^\p{L}0-9_#])/gu;

const MENTION_REGEX =
  /(?<=^|[^a-zA-Z0-9_&!@#%&*])@[a-zA-Z0-9_]+(?=$|[^a-zA-Z0-9_@])/g;

const URL_REGEX =
  /(?<=^|[^\w\d@#$-])((?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9][a-z0-9-]*(?:\.[a-zA-Z]{2,})?(?:\.[a-zA-Z]{2,3})(?:\/[\p{L}0-9+-_]*)?(?=$|\s|[^\d\w.+-@/])/giu;

export { HASHTAG_REGEX, MENTION_REGEX, URL_REGEX };
