import { languages } from "@shared/@common/data";
import { getLanguage } from "@shared/@common/models/selectors";
import { useSelector } from "react-redux";

const useCountryName = (countryCode: string) => {
  const language = useSelector(getLanguage);

  const countryNames =
    languages[language as keyof typeof languages].countryNames;

  const code = countryCode.toLowerCase() ?? "kr";

  const countryName = countryNames[code as keyof typeof countryNames];

  return countryName.name;
};

export default useCountryName;
