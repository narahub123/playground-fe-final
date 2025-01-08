import { useSelector } from "react-redux";
import { getLanguage } from "../selectors";
import { languages } from "@shared/@common/data";

type ContentType = (typeof languages)["ko-KR"];

type NestedKeys<T> = T extends object
  ? { [K in keyof T]: [K, ...NestedKeys<T[K]>] | [K] }[keyof T]
  : [];

type KeywordsType = [...NestedKeys<ContentType>];

const useLanguageContent = (keywords: KeywordsType) => {
  const language = useSelector(getLanguage);

  const lang = languages[language as keyof typeof languages];

  const compoObj = keywords.reduce((acc: any, name: string) => {
    if (acc && name in acc) {
      return acc[name as keyof typeof acc];
    }

    return undefined;
  }, lang);

  return compoObj;
};

export default useLanguageContent;
