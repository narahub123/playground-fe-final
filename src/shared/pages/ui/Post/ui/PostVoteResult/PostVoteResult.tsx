import styles from "./PostVoteResult.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { IPostVoteOption } from "@shared/@common/types";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Text } from "@shared/@common/ui/components";

interface PostVoteResultProps {
  className?: string;
  option: IPostVoteOption;
  isSelected: boolean;
  totalVoters: number;
  isTimeUp: boolean;
  isWinning: boolean;
}

const PostVoteResult = ({
  className,
  option,
  isSelected,
  totalVoters,
  isTimeUp,
  isWinning,
}: PostVoteResultProps) => {
  const classNames = joinClassNames([styles["post__vote__result"], className]);

  return (
    <li className={classNames}>
      <div
        className={joinClassNames([
          styles["background"],
          isTimeUp && isWinning ? styles["winning"] : "",
        ])}
        style={{
          width: `${
            option.voters.length === 0
              ? "0.5rem"
              : Math.floor((option.voters.length / totalVoters) * 100) + "%"
          }`,
        }}
      />
      <div className={styles["wrapper"]}>
        <div className={styles["left"]}>
          <Text className={styles["option__text"]}>{option.option}</Text>
          {isSelected && (
            <IoIosCheckmarkCircleOutline className={styles["icon"]} />
          )}
        </div>
        <div className={styles["right"]}>
          <Text>{`${
            option.voters.length === 0
              ? 0
              : Math.floor((option.voters.length / totalVoters) * 100)
          }%`}</Text>
        </div>
      </div>
    </li>
  );
};

export default PostVoteResult;
