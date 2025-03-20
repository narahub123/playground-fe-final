import styles from "./EmojiTab.module.css";
import { Button } from "@shared/@common/ui/components";
import { IEmoji } from "../../types";
import { joinClassNames } from "@shared/@common/utils";

interface EmojiTabProps {
  tabInfo: IEmoji;
  isCurTab: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const EmojiTab = ({
  tabInfo,
  isCurTab,
  onClick,
  disabled = false,
}: EmojiTabProps) => {
  const classNames = joinClassNames([
    styles["emoji__tab"],
    isCurTab ? styles["selected"] : styles["unselected"],
  ]);

  const { char, name } = tabInfo;

  return (
    <Button
      className={classNames}
      onClick={onClick}
      isValid
      variant="ghost"
      fontSize="lg"
      aria-label={name}
      disabled={disabled}
    >
      <div className={styles["emoji"]}>{char}</div>
    </Button>
  );
};

export default EmojiTab;
