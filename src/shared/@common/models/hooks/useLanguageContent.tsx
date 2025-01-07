import { useSelector } from "react-redux";
import { getLanguage } from "../selectors";
import { languages } from "@shared/@common/data";

/**
 * `useLanguageContent`는 다국어 지원을 위한 커스텀 훅으로, 주어진 키워드 배열을 사용하여
 * 선택된 언어에 맞는 내용을 반환합니다.
 *
 * @param {string[]} keywords - 언어 데이터를 조회하기 위한 키워드 배열.
 *                            각 키워드는 계층적 데이터에서 특정 값을 찾는 데 사용됩니다.
 * @returns {any} - 언어 데이터를 기반으로 해당 키워드에 해당하는 값. 해당 키워드가 없으면 `undefined`를 반환합니다.
 *
 * @example
 * const content = useLanguageContent(["components", "ExampleFile"]);
 * // "components"와 "ExampleFile"에 해당하는 데이터를 반환합니다.
 */
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
