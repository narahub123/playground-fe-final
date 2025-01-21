// 초성(19개)
const CHO_HANGUL = [
  "g",
  "gg",
  "n",
  "d",
  "dd",
  "r",
  "m",
  "b",
  "bb",
  "s",
  "ss",
  "",
  "j",
  "jj",
  "ch",
  "k",
  "t",
  "p",
  "h",
];

// 중성(21개)
const JOONG_HANGUL = [
  "a",
  "ae",
  "ya",
  "yae",
  "eo",
  "e",
  "yeo",
  "ye",
  "o",
  "wa",
  "wae",
  "oe",
  "yo",
  "u",
  "wo",
  "we",
  "wi",
  "yu",
  "eu",
  "ui",
  "i",
];

// 종성(28개)
const JONG_HANGUL = [
  "",
  "k",
  "kk",
  "gs",
  "n",
  "nj",
  "nh",
  "d",
  "l",
  "lg",
  "lm",
  "lb",
  "ls",
  "lt",
  "lp",
  "lh",
  "m",
  "p",
  "bs",
  "s",
  "ss",
  "ng",
  "j",
  "ch",
  "k",
  "t",
  "p",
  "h",
];

const CHO_PERIOD = Math.floor("까".charCodeAt(0) - "가".charCodeAt(0));
const JOONG_PERIOD = Math.floor("개".charCodeAt(0) - "가".charCodeAt(0));
const JONG_PERIOD = 28;
const HANGUL_START_CHARCODE = "가".charCodeAt(0);
const HANGUL_END_CHARCODE = "힣".charCodeAt(0);

export {
  CHO_HANGUL,
  JOONG_HANGUL,
  JONG_HANGUL,
  CHO_PERIOD,
  JOONG_PERIOD,
  JONG_PERIOD,
  HANGUL_START_CHARCODE,
  HANGUL_END_CHARCODE,
};
