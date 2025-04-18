import styles from "./PostVote.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { Text } from "@shared/@common/ui/components";
import {
  calculateTotalVotes,
  PostVoteOption,
  PostVoteResult,
  usePostContext,
} from "@shared/pages/ui/Post";
import { useState } from "react";

interface PostVoteProps {
  className?: string;
}

const PostVote = ({ className }: PostVoteProps) => {
  // 언어 설정
  const { stats } = useLanguageContent(["post", "PostVote"]);

  const { vote } = usePostContext();

  if (!vote) return null;

  const { options, duration } = vote;

  // 투표를 했는지 여부 상태
  const [hasVoted, setHasVoted] = useState(false);

  const classNames = joinClassNames([styles["post__vote"], className]);

  const handleVote = (index: number) => {
    console.log("누름");
    console.log(index);

    setHasVoted(true);
  };

  return (
    <div className={classNames}>
      <div className={styles["main"]}>
        <ul className={styles["list"]}></ul>
        <ul className={styles["list"]}>
          {options.map((option, index) => (
            <PostVoteResult key={index} option={option} />
          ))}
        </ul>
        <ul className={styles["list"]}>
          {options.map((option, index) => (
            <PostVoteOption
              key={index}
              option={option.option}
              index={index}
              onClick={() => handleVote(index)}
            />
          ))}
        </ul>
      </div>
      <div className={styles["text__wrapper"]}>
        <Text className={styles["stats"]}>{`${calculateTotalVotes(options)}${
          stats.vote
        } · ${stats.voteTime(duration)}`}</Text>
      </div>
    </div>
  );
};

export default PostVote;
