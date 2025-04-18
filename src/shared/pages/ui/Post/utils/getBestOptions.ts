import { IPostVoteOption } from "@shared/@common/types";

// 최고 투표 옵션 구하기
const getBestOptions = (options: IPostVoteOption[]) => {
  const votersArr = options.map((option) => option.voters.length);

  const maxVotes = Math.max(...votersArr);

  const bestOptions = options
    .filter((option) => option.voters.length === maxVotes)
    .map((_, index) => index);

  return bestOptions;
};

export default getBestOptions;
