import styles from "./PostVote.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { usePostContext } from "@shared/pages/ui/Post";
import { useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

interface PostVoteProps {
  className?: string;
}

const PostVote = ({ className }: PostVoteProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "PostVote"]);

  const { vote } = usePostContext();

  if (!vote) return null;

  const { options, duration } = vote;

  // 투표를 했는지 여부 상태
  const [hasVoted, setHasVoted] = useState(false);

  const classNames = joinClassNames([styles["post__vote"], className]);

  const handleVote = () => {
    console.log("누름");
    setHasVoted(true);
  };

  return (
    <div className={classNames}>
      <div className={styles["main"]}>
        <ul className={styles["list"]}>
          {options.map((option, index) => (
            <li className={styles["result"]} key={index}>
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
                  <Text className={styles["option__text"]}>
                    {option.option}
                  </Text>
                  <IoIosCheckmarkCircleOutline className={styles["icon"]} />
                </div>
                <div className={styles["right"]}>
                  <Text>{`${option.voters.length}%`}</Text>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* {hasVoted ? (
          <ul className={styles["list"]}>
            {options.map((option, index) => (
              <li className={styles["result"]} key={index}>
                <div className={styles["left"]}>
                  <Text>{option.option}</Text>
                  <IoIosCheckmarkCircleOutline className={styles["icon"]} />
                </div>
                <div className={styles["right"]}>
                  <Text>{option.count}</Text>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ul className={styles["list"]}>
            {options.map((option, index) => (
              <li className={styles["option"]} key={index}>
                <Button
                  isValid
                  onClick={handleVote}
                  className={styles["option__btn"]}
                  variant="outline"
                  rounded="2xl"
                  fontColor="colorTheme"
                >
                  {option.option}
                </Button>
              </li>
            ))}
          </ul>
        )} */}
      </div>
      <div className={styles["text__wrapper"]}>
        <Text className={styles["stats"]}>{`표 · 남은 시간`}</Text>
      </div>
    </div>
  );
};

export default PostVote;
