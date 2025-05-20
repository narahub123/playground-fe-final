import styles from "./AutoCompleteKeyword.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface AutoCompleteKeywordProps {
  className?: string;
  option: string;
}

const AutoCompleteKeyword = ({
  className,
  option,
}: AutoCompleteKeywordProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "AutoCompleteKeyword"]);

  const classNames = joinClassNames([styles["autocompletekeyword"], className]);

  return <div className={classNames}>AutoCompleteKeyword</div>;
};

export default AutoCompleteKeyword;
