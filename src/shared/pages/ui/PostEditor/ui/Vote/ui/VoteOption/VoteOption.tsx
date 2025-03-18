import styles from "./VoteOption.module.css";
import { joinClassNames } from "@shared/@common/utils";
import {
  IVoteOption,
  InputOption,
  AddOptionButton,
} from "@shared/pages/ui/PostEditor/ui/Vote";

interface VoteOptionProps {
  className?: string;
  option: IVoteOption;
  index: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
}

const VoteOption = ({
  className,
  option,
  index,
  handleChange,
  handleClick,
}: VoteOptionProps) => {
  const classNames = joinClassNames([styles["vote__option"], className]);

  if (!option.visible) return null;

  return (
    <div className={classNames}>
      <InputOption
        className={styles["input"]}
        inputValue={option.text}
        index={index}
        handleChange={handleChange}
      />
      {index !== 0 && index !== 3 && (
        <AddOptionButton handleClick={handleClick} />
      )}
    </div>
  );
};

export default VoteOption;
