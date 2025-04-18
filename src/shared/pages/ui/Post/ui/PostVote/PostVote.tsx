import styles from "./PostVote.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { Spinner, Text } from "@shared/@common/ui/components";
import {
  calculateTotalVotes,
  getBestOptions,
  PostVoteOption,
  PostVoteResult,
  usePostContext,
} from "@shared/pages/ui/Post";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "@shared/@common/models/selectors";
import { fetchWithAuth } from "@shared/pages/utils";
import { useAppDispatch } from "@app/store";
import { setPosts } from "@shared/@common/models/slices/postSlice";

interface PostVoteProps {
  className?: string;
}

const PostVote = ({ className }: PostVoteProps) => {
  const dispatch = useAppDispatch();
  const listRef = useRef<HTMLUListElement>(null);
  // 언어 설정
  const { stats } = useLanguageContent(["post", "PostVote"]);

  const { _id } = useSelector(selectUser);
  const { vote, _id: postId } = usePostContext();
  if (!vote) return null;

  const { options, duration } = vote;

  // 투표를 했는지 여부 상태
  const [votedOption, setVotedOption] = useState<number | undefined>(undefined);

  // 총 투표자 수
  const [totalVoters, setTotalVoters] = useState(0);

  // 투표 종료 여부
  const [isTimeUp, setIsTimeUp] = useState(false);

  // 최고 투표 옵션
  const [winningOptions, setWinningOptions] = useState<number[] | null>(null);

  // loading
  const [isLoading, setisLoading] = useState(false);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    // 본인은 투표하지 못하게 하는 코드 추가 필요

    // 투표 여부 확인
    const index = options.findIndex((option) => option.voters.includes(_id));
    if (index !== -1) setVotedOption(index);

    // 총 투표자 계산
    const totalVoters = calculateTotalVotes(options);

    setTotalVoters(totalVoters);

    // 투표 종료 여부 확인
    const now = Date.now();
    const end = new Date(duration).getTime();
    const diffInSeconds = Math.floor((end - now) / 1000);

    // 투표 종료된 경우
    if (diffInSeconds <= 0) {
      // 투표 종료 상태 변경
      setIsTimeUp((prev) => (prev === false ? true : prev));

      // 최고 투표 옵션 상태 변경
      setWinningOptions(getBestOptions(options));
    }
  }, [options]);

  useLayoutEffect(() => {
    if (!listRef.current) return;
    const height = listRef.current.getBoundingClientRect().height;

    setHeight(height);
  }, []);

  const classNames = joinClassNames([styles["post__vote"], className]);

  const handleVote = async (index: number) => {
    setisLoading(true);

    try {
      const result = await fetchWithAuth(`/posts/${postId}/${index}`, {
        method: "POST",
      });
      if (result.success) {
        dispatch(setPosts(result.data.posts));
        setVotedOption(index);
      } else {
        console.error(`투표 결과 추가 중 에러 발생`);
      }
    } catch (error) {
      console.error(`투표 결과 추가 중 에러 발생`, error);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <div className={classNames}>
      <div className={styles["main"]}>
        {isLoading ? (
          <div className={styles["spinner__wrapper"]} style={{ height }}>
            <Spinner />
          </div>
        ) : (
          <ul className={styles["list"]} ref={listRef}>
            {options.map((option, index) => {
              // 이미 투표를 한 경우 혹은 투표 종료된 경우
              if (typeof votedOption === "number" || isTimeUp) {
                return (
                  <PostVoteResult
                    key={index}
                    option={option}
                    isSelected={index === votedOption}
                    totalVoters={totalVoters}
                    isTimeUp={isTimeUp}
                    isWinning={
                      winningOptions && winningOptions.length > 0
                        ? winningOptions.includes(index)
                        : false
                    }
                  />
                );
              }
              // 투표를 하지 않은 경우
              else
                return (
                  <PostVoteOption
                    key={index}
                    option={option.option}
                    index={index}
                    onClick={() => handleVote(index)}
                  />
                );
            })}
          </ul>
        )}
      </div>
      <div className={styles["text__wrapper"]}>
        <Text className={styles["stats"]}>{`${totalVoters}${
          stats.vote
        } · ${stats.voteTime(duration)}`}</Text>
      </div>
    </div>
  );
};

export default PostVote;
