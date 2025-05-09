import styles from "./RepostDropdown.module.css";
import {
  useClickOutside,
  useLanguageContent,
} from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import PostActionIcon from "../PostActionIcon/PostActionIcon";
import { postActionIcons, usePostContext } from "../..";
import { fetchWithAuth } from "@shared/pages/utils";
import { useAppDispatch } from "@app/store";
import {
  deletePost,
  setPost,
  toggleFeedPostRepost,
  toggleFeedThreadRepost,
} from "@shared/@common/models/slices/feedSlice";
import { onParallelModalOpen } from "@shared/@common/models/slices/modalSlice";
import { useNavigate } from "react-router-dom";
import { PRIMARY_LINK } from "@shared/@common/constants";
import { useRef } from "react";
import {
  togglePostCommentRepost,
  togglePostRepost,
  togglePostThreadRepost,
} from "@features/post-page";

interface RepostDropdownProps {
  className?: string;
  setIsRepostOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface OptionProps {
  text: string;
  option: string;
  setIsRepostOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Option = ({ text, option, setIsRepostOpen }: OptionProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    _id: postId,
    isRepostedByCurrentUser,
    postType,
    basePostId,
  } = usePostContext();
  const handleClick = {
    repost: async (e: React.MouseEvent) => {
      e.stopPropagation();

      try {
        const result = isRepostedByCurrentUser
          ? await fetchWithAuth(`/posts/${postId}/repost`, {
              method: "DELETE",
            })
          : await fetchWithAuth(`/posts/${postId}/repost`, {
              method: "POST",
            });

        if (result.success) {
          // 현재 포스트의 action.reposts 조작
          // feed, post 둘 다 조작이 필요함
          const isAdding = !isRepostedByCurrentUser;

          if (isRepostedByCurrentUser) {
            dispatch(deletePost(result.data.repost._id));
          } else {
            dispatch(setPost(result.data.post));
          }

          if (postType === "post") {
            dispatch(togglePostRepost({ isAdding }));
            dispatch(toggleFeedPostRepost({ postId, isAdding }));
          } else if (postType === "thread") {
            dispatch(
              togglePostThreadRepost({ threadCommentId: postId, isAdding })
            );
            dispatch(
              toggleFeedThreadRepost({
                postId: basePostId,
                threadCommentId: postId,
                isAdding,
              })
            );
          } else {
            dispatch(togglePostCommentRepost({ commentId: postId, isAdding }));
          }
        } else {
          console.error(
            isRepostedByCurrentUser
              ? "리포스트 삭제 실패"
              : "리포스트 생성 실패"
          );
        }
      } catch (error) {
        console.error(
          isRepostedByCurrentUser
            ? "리포스트 삭제 도중 에러 발생"
            : "리포스트 생성 도중 에러 발생",
          error
        );
      } finally {
        setIsRepostOpen(false);
      }
    },
    quote: async (e: React.MouseEvent) => {
      e.stopPropagation();

      dispatch(onParallelModalOpen("write"));
      navigate(PRIMARY_LINK.COMPOSE_POST, { state: { type: "quote", postId } });
      setIsRepostOpen(false);
    },
  };

  return (
    <div
      className={styles["option"]}
      onClick={handleClick[option as keyof typeof handleClick]}
    >
      <PostActionIcon
        iconName={option as keyof typeof postActionIcons}
        onClick={() => {}}
        action="reposts"
      />
      <Text className={styles["text"]}>{text}</Text>
    </div>
  );
};

const RepostDropdown = ({
  className,

  setIsRepostOpen,
}: RepostDropdownProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // 언어 설정
  const { options } = useLanguageContent(["post", "RepostDropdown"]);

  const { isRepostedByCurrentUser } = usePostContext();

  useClickOutside({ containerRef, toggle: () => setIsRepostOpen(false) });

  const classNames = joinClassNames([styles["repost__dropdown"], className]);

  return (
    <div className={classNames} ref={containerRef}>
      {Object.keys(options).map((key) => (
        <Option
          key={key}
          option={key}
          text={options[key](isRepostedByCurrentUser)}
          setIsRepostOpen={setIsRepostOpen}
        />
      ))}
    </div>
  );
};

export default RepostDropdown;
