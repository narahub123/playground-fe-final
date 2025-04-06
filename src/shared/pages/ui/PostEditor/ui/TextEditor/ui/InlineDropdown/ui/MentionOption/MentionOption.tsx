import styles from "./MentionOption.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { IAccount } from "@shared/@common/types";
import AccountItem from "@shared/pages/ui/AccountItem/AccountItem";

interface MentionOptionProps {
  account: IAccount;
  index: number;
  selected: boolean;
  onClick: (index?: number) => void;
}

const MentionOption = ({
  account,
  index,
  selected,
  onClick,
}: MentionOptionProps) => {
  const classNames = joinClassNames([
    styles["mention__option"],
    selected ? styles["selected"] : "",
  ]);

  return (
    <div
      onClick={() => onClick(index)}
      className={styles["mention__option__wrapper"]}
    >
      <AccountItem account={account} className={classNames} />
    </div>
  );
};

export default MentionOption;
