import styles from "./PostVoteResult.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { IPostVoteOption } from "@shared/@common/types";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Text } from "@shared/@common/ui/components";

interface PostVoteResultProps {
  className?: string;
  option: IPostVoteOption;
}

const PostVoteResult = ({ className, option }: PostVoteResultProps) => {
  const classNames = joinClassNames([styles["post__vote__result"], className]);

  return (
    <li className={classNames}>
      <div
        className={styles["background"]}
        style={{
          // width: `${option.count === 0 ? "0.5rem" : "100%"}`,
          width: `100%`,
          backgroundColor: `#ccc`,
        }}
      />
      <div className={styles["wrapper"]}>
        <div className={styles["left"]}>
          <Text className={styles["option__text"]}>{option.option}</Text>
          <IoIosCheckmarkCircleOutline className={styles["icon"]} />
        </div>
        <div className={styles["right"]}>
          <Text>{`${option.voters.length}%`}</Text>
        </div>
      </div>
    </li>
  );
};

export default PostVoteResult;
