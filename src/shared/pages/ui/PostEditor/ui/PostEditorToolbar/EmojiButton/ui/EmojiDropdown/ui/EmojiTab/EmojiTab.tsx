import styles from "./EmojiTab.module.css";
import { Button } from "@shared/@common/ui/components";
import { IEmoji } from "../../types";
import { joinClassNames } from "@shared/@common/utils";

interface EmojiTabProps {
  tabInfo: IEmoji;
  isCurTab: boolean;
  onClick: () => void;
}

const EmojiTab = ({ tabInfo, isCurTab, onClick }: EmojiTabProps) => {
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
      data-title={name}
    >
      <div className={styles["emoji"]}>{char}</div>
    </Button>
  );
};

export default EmojiTab;
