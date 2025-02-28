import { languages } from "../data";
import ERRORS from "../data/languages/ko_KR/errors";

type LanguagesType = keyof typeof languages;

type ErrorTitleCodeType = keyof typeof ERRORS.ERROR_TITLE_CODE;

type ErrorDescriptionCodeType = keyof typeof ERRORS.ERROR_DESCRIPTION_CODE;

type ErrorDBCodeType = keyof typeof ERRORS.ERROR_DB_CODE;

export type {
  LanguagesType,
  ErrorTitleCodeType,
  ErrorDescriptionCodeType,
  ErrorDBCodeType,
};
