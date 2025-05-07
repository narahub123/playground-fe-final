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
  usePostContext,
} from "@shared/pages/ui/Post";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "@shared/@common/models/selectors";
import { useDispatch } from "react-redux";
import {
  setCommentBookmark,
  setCommentLike,
  setLike,
  updatePostBookmarks,
} from "@shared/@common/models/slices/feedSlice";
import { updateUserBookmarks } from "@shared/@common/models/slices/userSlice";
import { fetchWithAuth } from "@shared/pages/utils";

interface PostActionProps {
  className?: string;
  action: PostActionType;
  isPostPage?: boolean;
  handleShareOpen: (e: React.MouseEvent) => void;
}

const PostAction = ({
  className,
  action,
  isPostPage,
  handleShareOpen,
}: PostActionProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isRepostOpen, setIsRepostOpen] = useState(false);

  const { _id: userId, bookmarks, likes } = useSelector(selectUser);

  const {
    actions,
    _id: postId,
    type,
    originalPostId,
    thread,
  } = usePostContext();

  // 코멘트 여부
  const isCommenting = (): boolean => {
    // 해당 포스트가 post 타입인 경우
    if (type === "post" && thread.length > 0) return true;
    // 포스트가 comment 타입인 경우
    return false;
  };

  const handleRepostOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRepostOpen(!isRepostOpen);
  };

  const isLiking = (postId: string) => {
    return likes.some((like) => like._id === postId && !like.isDeleted);
  };

  const handleLikes = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      const result = await fetchWithAuth(`/posts/${postId}/likes`, {
        method: "PATCH",
      });

      if (result.success) {
        if (type === "comment") {
          dispatch(
            setCommentLike({ originalPostId, commentId: postId, userId })
          );
        } else {
          dispatch(setLike({ postId, userId }));
        }
      } else {
        console.error("좋아요 업데이트 실패");
      }
    } catch (error) {
      console.error("좋아요 업데이트 중 에러 발생");
    }
  };

  const isBookmarking = (postId: string) => {
    return bookmarks.some(
      (bookmark) => bookmark._id === postId && bookmark.isDeleted
    );
  };

  const handleBookmark = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    try {
      const result = await fetchWithAuth(
        `/posts/${postId}/bookmarks`,
        { method: "PATCH" },
        { bookmarks: postId }
      );

      if (result.success) {
        if (type === "comment") {
          dispatch(
            setCommentBookmark({ originalPostId, commentId: postId, userId })
          );
        } else {
          dispatch(updateUserBookmarks(postId));
          dispatch(updatePostBookmarks({ postId, userId }));
        }
      } else {
        console.error("북마크 업데이트 실패");
      }
    } catch (error) {
      console.error("북마크 업데이트 중 에러 발생");
    }
  };

  const isReposting = (userId: string) => {
    return false;
  };

  const handleClick: Record<PostActionType, (e: React.MouseEvent) => void> = {
    comments: (e: React.MouseEvent) => {
      e.preventDefault();
      navigate(PRIMARY_LINK.COMPOSE_POST);
    },
    reposts: handleRepostOpen,
    likes: handleLikes,
    views: () => {},
    bookmarks: handleBookmark,
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
      ? isBookmarking(userId)
        ? "bookmarkFill"
        : "bookmarkOutline"
      : "view";

  return (
    <span
      className={joinClassNames([
        styles["action__wrapper"],
        action === "reposts"
          ? styles["green"]
          : action === "likes"
          ? styles["red"]
          : action === "bookmarks" && !isPostPage
          ? ""
          : styles["cornflower"],
        className,
      ])}
    >
      {action === "reposts" && isRepostOpen && <RepostDropdown />}
      <PostActionIcon
        left={"-0.5rem"}
        className={joinClassNames([
          styles["icon"],
          action === "likes" && isLiking(userId) ? styles["liking"] : "",
          action === "bookmarks" && isBookmarking(userId)
            ? styles["bookmarking"]
            : "",
          action === "reposts" && isReposting(userId)
            ? styles["reposting"]
            : "",
          action === "bookmarks" && !isPostPage ? styles["irregular"] : "",
          action === "comments" && isCommenting() ? styles["commenting"] : "",
        ])}
        onClick={handleClick[action]}
        action={action}
        iconName={iconName}
      />

      {action === "bookmarks" && !isPostPage ? (
        <div className={styles["share__wrapper"]}>
          <PostActionIcon
            iconName="share"
            action={"share"}
            left={"-0.5rem"}
            className={joinClassNames([styles["icon"], styles["irregular"]])}
            onClick={handleShareOpen}
          />
        </div>
      ) : (
        <Text
          className={joinClassNames([
            styles["stat"],
            action === "likes" && isLiking(userId) ? styles["liking"] : "",
            action === "reposts" && isReposting(userId)
              ? styles["reposting"]
              : "",
            action === "comments" && isCommenting() ? styles["commenting"] : "",
          ])}
        >
          {formatNumber(actions[action])}
        </Text>
      )}
    </span>
  );
};

export default PostAction;
