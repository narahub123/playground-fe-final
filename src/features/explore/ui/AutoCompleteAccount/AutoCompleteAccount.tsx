import styles from "./AutoCompleteAccount.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface AutoCompleteAccountProps {
  className?: string;
  disabled?: boolean;
}

const AutoCompleteAccount = ({
  className,
  disabled = false,
}: AutoCompleteAccountProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "AutoCompleteAccount"]);

  const classNames = joinClassNames([styles["autocompleteaccount"], className]);

  return <div className={classNames}>AutoCompleteAccount</div>;
};

export default AutoCompleteAccount;
