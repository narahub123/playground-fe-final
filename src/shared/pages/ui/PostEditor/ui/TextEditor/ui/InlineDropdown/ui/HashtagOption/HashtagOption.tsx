import styles from "./HashtagOption.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface HashtagOptionProps {
  option: string;
  curText: string;
  index: number;
  selected: boolean;
  onClick: (index?: number) => void;
}

const HashtagOption = ({
  option,
  curText,
  index,
  selected,
  onClick,
}: HashtagOptionProps) => {
  const classNames = joinClassNames([
    styles["hashtag__option"],
    selected ? styles["selected"] : "",
  ]);

  return (
    <div className={classNames} onClick={() => onClick(index)}>
      <span className={styles["cur__text"]}>{curText}</span>
      <span className={styles["rest__text"]}>
        {option.slice(curText.length)}
      </span>
    </div>
  );
};

export default HashtagOption;
