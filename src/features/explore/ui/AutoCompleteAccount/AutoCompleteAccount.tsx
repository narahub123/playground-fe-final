import styles from "./AutoCompleteAccount.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface AutoCompleteAccountProps {
  className?: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AutoCompleteAccount = ({
  className,
  setIsOpen,
}: AutoCompleteAccountProps) => {
  const classNames = joinClassNames([styles["autocompleteaccount"], className]);

  return <div className={classNames}>AutoCompleteAccount</div>;
};

export default AutoCompleteAccount;
