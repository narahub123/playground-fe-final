import { useSelector } from "react-redux";
import { getLanguage } from "../selectors";
import { languages } from "@shared/@common/data";

const useLanguageContent = (keywords: string[] = []) => {
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
