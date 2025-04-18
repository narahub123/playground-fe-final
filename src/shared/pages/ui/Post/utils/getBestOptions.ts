import { IPostVoteOption } from "@shared/@common/types";

// 최고 투표 옵션 구하기
const getBestOptions = (options: IPostVoteOption[]) => {
  return options.reduce<{ max: number; indices: number[] }>(
    (acc, option, index) => {
      const voteCount = option.voters.length;

      if (voteCount > acc.max) {
        // 더 큰 득표수를 발견한 경우: 최고값 갱신 및 인덱스 초기화
        return { max: voteCount, indices: [index] };
      } else if (voteCount === acc.max) {
        // 동률인 경우: 인덱스 추가
        acc.indices.push(index);
      }
      return acc;
    },
    { max: 0, indices: [] }
  ).indices;
};

export default getBestOptions;
