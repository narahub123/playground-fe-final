import { useSelector } from "react-redux";
import { getLanguage } from "@shared/@common/models/selectors";
import { languages } from "@shared/@common/data";
import {
  ErrorDescriptionCodeType,
  ErrorTitleCodeType,
  LanguagesType,
} from "@shared/@common/types";

const useAPIError = () => {
  const language = useSelector(getLanguage);

  const lang = languages[language as LanguagesType];

  const ERRORS = lang["ERRORS"];

  const getErrorTitle = (code: ErrorTitleCodeType): string => {
    return ERRORS.ERROR_TITLE_CODE[code];
  };

  const getErrorDescription = (code: ErrorDescriptionCodeType): string => {
    return ERRORS.ERROR_DESCRIPTION_CODE[code];
  };

  return {
    getErrorTitle,
    getErrorDescription,
  };
};

export default useAPIError;
