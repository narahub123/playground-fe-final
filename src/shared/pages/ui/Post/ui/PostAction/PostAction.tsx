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
import { selectBookmarks, selectUser } from "@shared/@common/models/selectors";
import { useDispatch } from "react-redux";
import { setLike } from "@shared/@common/models/slices/postSlice";
import { setBookmark } from "@shared/@common/models/slices/userSlice";
import { fetchWithAuth } from "@shared/pages/utils";

interface PostActionProps {
  className?: string;
  action: PostActionType;
}

const PostAction = ({ className, action }: PostActionProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isRepostOpen, setIsRepostOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const { _id: userId } = useSelector(selectUser);
  const bookmarks = useSelector(selectBookmarks);

  const { actions, _id: postId } = usePostContext();

  const { comments, reposts, likes, views } = actions;

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

  const handleBookmark = async () => {
    try {
      const result = await fetchWithAuth(
        `/users/me`,
        { method: "PATCH" },
        { bookmarks: postId }
      );

      if (result.success) {
        dispatch(setBookmark(postId));
      } else {
        console.error("북마크 업데이트 실패");
      }
    } catch (error) {
      console.error("북마크 업데이트 중 에러 발생");
    }
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
    <span
      className={joinClassNames([
        styles["action__wrapper"],
        action === "reposts"
          ? styles["green"]
          : action === "likes"
          ? styles["red"]
          : styles["cornflower"],
        className,
      ])}
    >
      {action === "reposts" && isRepostOpen && <RepostDropdown />}
      {action === "share" && isShareOpen && <ShareDropdown />}
      <PostActionIcon
        left={action === "share" ? undefined : "-0.5rem"}
        right={action === "share" ? "-0.5rem" : undefined}
        className={joinClassNames([
          styles["icon"],
          action === "likes" && isLiking(userId) ? styles["liking"] : "",
          action === "bookmarks" && isBookmarking(postId)
            ? styles["bookmarking"]
            : "",
          action === "reposts" && actions[action].isReposted
            ? styles["reposting"]
            : "",
        ])}
        onClick={handleClick[action]}
        action={action}
        iconName={iconName}
      />
      {action !== "bookmarks" && action !== "share" && (
        <Text
          className={joinClassNames([
            styles["stat"],
            action === "likes" && isLiking(userId) ? styles["liking"] : "",
            action === "reposts" && actions[action].isReposted
              ? styles["reposting"]
              : "",
          ])}
        >
          {formatNumber(
            action === "views"
              ? actions[action]
              : action === "reposts"
              ? actions[action].count
              : actions[action].length
          )}
        </Text>
      )}
    </span>
  );
};

export default PostAction;
