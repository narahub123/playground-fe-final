import { PRIMARY_LINK } from "@shared/@common/constants";
import styles from "./PostAction.module.css";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import {
  formatNumber,
  PostActionIcon,
  postActionIcons,
  PostActionType,
  RepostDropdown,
  ShareDropdown,
  usePostContext,
} from "@shared/pages/ui/Post";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectBookmarks,
  selectUserId,
} from "@shared/@common/models/selectors";
import { useDispatch } from "react-redux";
import { setLike } from "@shared/@common/models/slices/postSlice";
import { setBookmark } from "@shared/@common/models/slices/userSlice";
import { fetchWithAuth } from "@shared/pages/utils";

interface PostActionProps {
  className?: string;
  action: PostActionType;
}

const PostAction = ({ action }: PostActionProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isRepostOpen, setIsRepostOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const userId = useSelector(selectUserId);
  const bookmarks = useSelector(selectBookmarks);

  const { actions, _id: postId } = usePostContext();

  const { comments, reposts, likes, views } = actions;

  const className =
    action === "reposts"
      ? styles["green"]
      : action === "likes"
      ? styles["red"]
      : styles["cornflower"];

  const handleRepostOpen = () => {
    setIsRepostOpen(!isRepostOpen);
  };
  const handleShareOpen = () => {
    setIsShareOpen(!isShareOpen);
  };

  const isLiking = (userId: string) => {
    return likes.includes(userId);
  };

  const handleLikes = async () => {
    try {
      const result = await fetchWithAuth(`/posts/${postId}/likes`, {
        method: "PATCH",
      });

      if (result.success) {
        dispatch(setLike({ postId, userId }));
      } else {
        console.error("좋아요 업데이트 실패");
      }
    } catch (error) {
      console.error("좋아요 업데이트 중 에러 발생");
    }
  };

  const isBookmarking = (postId: string) => {
    return bookmarks.includes(postId);
  };

  const handleBookmark = () => {
    dispatch(setBookmark(postId));
  };

  const handleClick: Record<PostActionType, () => void> = {
    comments: () => {
      navigate(PRIMARY_LINK.COMPOSE_POST);
    },
    reposts: handleRepostOpen,
    likes: handleLikes,
    views: () => {},
    bookmarks: handleBookmark,
    share: handleShareOpen,
  };

  const iconName: keyof typeof postActionIcons =
    action === "comments"
      ? "commentOutline"
      : action === "reposts"
      ? "repost"
      : action === "likes"
      ? isLiking(userId)
        ? "likeFill"
        : "likeOutline"
      : action === "bookmarks"
      ? isBookmarking(postId)
        ? "bookmarkFill"
        : "bookmarkOutline"
      : action === "share"
      ? "share"
      : "view";

  return (
    <span className={joinClassNames([styles["action__wrapper"], className])}>
      {action === "reposts" && isRepostOpen && <RepostDropdown />}
      {action === "share" && isShareOpen && <ShareDropdown />}
      <PostActionIcon
        left={action === "share" ? undefined : "-0.5rem"}
        right={action === "share" ? "-0.5rem" : undefined}
        className={styles["icon"]}
        onClick={handleClick[action]}
        action={action}
        iconName={iconName}
      />
      {action !== "bookmarks" && action !== "share" && (
        <Text className={styles["stat"]}>
          {formatNumber(
            action === "views" ? actions[action] : actions[action].length
          )}
        </Text>
      )}
    </span>
  );
};

export default PostAction;
