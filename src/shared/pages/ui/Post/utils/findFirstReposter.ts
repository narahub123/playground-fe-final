import { IRepost } from "@shared/@common/types";

const findFirstReposter = (
  reposters: IRepost[],
  followings: string[]
): IRepost | undefined => {
  // 시간 복잡도를 줄이기 위해 Set 사용
  const followingsSet = new Set(followings);

  return reposters.find((reposter) => followingsSet.has(reposter.userId));
};

export default findFirstReposter;
