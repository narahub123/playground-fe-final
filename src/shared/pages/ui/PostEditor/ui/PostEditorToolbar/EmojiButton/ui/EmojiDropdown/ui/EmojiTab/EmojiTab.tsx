import styles from "./EmojiTab.module.css";
import { Button } from "@shared/@common/ui/components";
import { IEmojiTab } from "../../types";
import { joinClassNames } from "@shared/@common/utils";

interface EmojiTabProps {
  tabInfo: IEmojiTab;
  isCurTab: boolean;
  onClick: () => void;
}

const EmojiTab = ({ tabInfo, isCurTab, onClick }: EmojiTabProps) => {
  const classNames = joinClassNames([
    styles["emoji__tab"],
    isCurTab ? styles["selected"] : styles["unselected"],
  ]);

  const { emoji, title } = tabInfo;

  return (
    <Button
      className={classNames}
      onClick={onClick}
      isValid
      variant="ghost"
      fontSize="lg"
      aria-label={title}
      data-title={title}
    >
      <div className={styles["emoji"]}>{emoji}</div>
    </Button>
  );
};

export default EmojiTab;
