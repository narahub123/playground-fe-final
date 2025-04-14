import { selectFollowings } from "@shared/@common/models/selectors";
import { IFollower, IFollowing } from "@shared/@common/types";
import { useSelector } from "react-redux";

const useCofollowers = () => {
  const myFollowings: IFollowing[] = useSelector(selectFollowings);

  const getCofollowers = (followers: IFollower[]) => {
    const myFollowingIds = new Set(myFollowings.map((f) => f.userId));

    return followers.filter((follower) => myFollowingIds.has(follower.userId));
  };

  return getCofollowers;
};

export default useCofollowers;
