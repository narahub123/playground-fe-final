import {
  selectBlockedUsers,
  selectFollowings,
  selectMutedUsers,
  selectUserId,
} from "@shared/@common/models/selectors";
import { useSelector } from "react-redux";

const useUserRelationStatus = () => {
  const currentUserId = useSelector(selectUserId);
  const followings = useSelector(selectFollowings);
  const mutedUsers = useSelector(selectMutedUsers);
  const blockedUsers = useSelector(selectBlockedUsers);

  const isMyself = (userId: string) => currentUserId === userId;
  const isFollowing = (userId: string) => followings.includes(userId);
  const isMuting = (userId: string) => mutedUsers.includes(userId);
  const isBlocking = (userId: string) => blockedUsers.includes(userId);

  return {
    isMyself,
    isFollowing,
    isMuting,
    isBlocking,
  };
};

export default useUserRelationStatus;
