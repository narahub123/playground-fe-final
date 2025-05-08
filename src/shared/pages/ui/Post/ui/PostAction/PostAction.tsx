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
  toggleFeedThreadBookmark,
  toggleFeedThreadLike,
  toggleFeedPostLike,
  toggleFeedPostBookmark,
} from "@shared/@common/models/slices/feedSlice";
import {
  toggleUserLikes,
  toggleUserBookmarks,
} from "@shared/@common/models/slices/userSlice";
import { fetchWithAuth } from "@shared/pages/utils";
import {
  togglePostBookmark,
  togglePostCommentBookmark,
  togglePostCommentLike,
  togglePostLike,
  togglePostThreadBookmark,
  togglePostThreadLike,
} from "@features/post-page";

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

  const { bookmarks, likes } = useSelector(selectUser);

  const {
    actions,
    _id: postId,
    type,
    basePostId,
    thread,
    postType,
    isRepostedByCurrentUser,
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
    return likes.some(
      (like) => like.postId === postId && like.isDeleted === false
    );
  };

  const handleLikes = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      const result = await fetchWithAuth(`/posts/${postId}/likes`, {
        method: "PATCH",
      });

      if (result.success) {
        // userSlice 업데이트
        dispatch(toggleUserLikes(postId));

        const isAdding = !isLiking(postId);

        if (postType === "post") {
          dispatch(toggleFeedPostLike({ postId, isAdding }));
          dispatch(togglePostLike({ isAdding }));
        } else if (postType === "thread") {
          dispatch(
            toggleFeedThreadLike({
              postId: basePostId,
              threadCommentId: postId,
              isAdding,
            })
          );
          dispatch(togglePostThreadLike({ threadCommentId: postId, isAdding }));
        } else {
          dispatch(togglePostCommentLike({ commentId: postId, isAdding }));
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
      (bookmark) => bookmark.postId === postId && !bookmark.isDeleted
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
        // userSlice 업데이트
        dispatch(toggleUserBookmarks(postId));

        const isAdding = !isBookmarking(postId);

        if (postType === "post") {
          dispatch(toggleFeedPostBookmark({ postId, isAdding }));
          dispatch(togglePostBookmark({ isAdding }));
        } else if (postType === "thread") {
          dispatch(
            toggleFeedThreadBookmark({
              postId: basePostId,
              threadCommentId: postId,
              isAdding,
            })
          );
          dispatch(
            togglePostThreadBookmark({ threadCommentId: postId, isAdding })
          );
        } else {
          dispatch(togglePostCommentBookmark({ commentId: postId, isAdding }));
        }
      } else {
        console.error("북마크 업데이트 실패");
      }
    } catch (error) {
      console.error("북마크 업데이트 중 에러 발생");
    }
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
      ? isLiking(postId)
        ? "likeFill"
        : "likeOutline"
      : action === "bookmarks"
      ? isBookmarking(postId)
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
      {action === "reposts" && isRepostOpen && (
        <RepostDropdown setIsRepostOpen={setIsRepostOpen} />
      )}
      <PostActionIcon
        left={"-0.5rem"}
        className={joinClassNames([
          styles["icon"],
          action === "likes" && isLiking(postId) ? styles["liking"] : "",
          action === "bookmarks" && isBookmarking(postId)
            ? styles["bookmarking"]
            : "",
          action === "reposts" && isRepostedByCurrentUser
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
            action === "likes" && isLiking(postId) ? styles["liking"] : "",
            action === "reposts" && isRepostedByCurrentUser
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
