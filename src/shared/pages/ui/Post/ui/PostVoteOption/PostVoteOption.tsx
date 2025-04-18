import { Button } from "@shared/@common/ui/components";
import styles from "./PostVoteOption.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface PostVoteOptionProps {
  className?: string;
  option: string;
  index: number;
  onClick: (index: number) => void;
}

const PostVoteOption = ({
  className,
  option,
  index,
  onClick,
}: PostVoteOptionProps) => {
  const classNames = joinClassNames([styles["post__vote__option"], className]);

  return (
    <li className={classNames}>
      <Button
        isValid
        onClick={() => onClick(index)}
        className={styles["option__btn"]}
        variant="outline"
        rounded="2xl"
        fontColor="colorTheme"
      >
        {option}
      </Button>
    </li>
  );
};

export default PostVoteOption;
