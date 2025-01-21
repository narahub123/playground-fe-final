import {
  CHO_HANGUL,
  CHO_PERIOD,
  HANGUL_END_CHARCODE,
  HANGUL_START_CHARCODE,
  JONG_HANGUL,
  JONG_PERIOD,
  JOONG_HANGUL,
  JOONG_PERIOD,
} from "../data";

// 한글인지 여부 확인 하기
const isHangul = (char: string) => {
  const charCode = char.charCodeAt(0);

  return HANGUL_START_CHARCODE <= charCode && charCode <= HANGUL_END_CHARCODE;
};

// 한글 자모를 분리해서 영문으로 합쳐서 반환 하기
const romanizeHangul = (char: string) => {
  const hangulCode = char.charCodeAt(0);

  const charCode = hangulCode - HANGUL_START_CHARCODE;

  const choIndex = Math.floor(charCode / CHO_PERIOD);
  const joongIndex = Math.floor((charCode % CHO_PERIOD) / JOONG_PERIOD);
  const jongIndex = Math.floor(charCode % JONG_PERIOD);

  return (
    CHO_HANGUL[choIndex] + JOONG_HANGUL[joongIndex] + JONG_HANGUL[jongIndex]
  );
};

export { isHangul, romanizeHangul };
