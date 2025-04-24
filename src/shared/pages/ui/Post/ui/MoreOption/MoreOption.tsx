import { useAppDispatch } from "@app/store";
import styles from "./MoreOption.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import {
  MoreMyOptionType,
  MoreOptionIcon,
  MoreOptionType,
  usePostContext,
  useUserRelationStatus,
} from "@shared/pages/ui/Post";
import { fetchWithAuth } from "@shared/pages/utils";
import { deletePost } from "@shared/@common/models/slices/postSlice";
import { setPinnedPost } from "@shared/@common/models/slices/userSlice";
import { useSelector } from "react-redux";
import { selectPinnedPost } from "@shared/@common/models/selectors";

interface MoreOptionProps {
  className?: string;
  disabled?: boolean;
  option: MoreOptionType | MoreMyOptionType;
  setIsReplyOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
}

const MoreOption = ({
  className,
  disabled = false,
  option,
  setIsReplyOpen,
  onClose,
}: MoreOptionProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const { text } = useLanguageContent(["post", "MoreOption"]);
  const classNames = joinClassNames([
    styles["more__option"],
    option === "delete" ? styles["delete"] : "",
    className,
  ]);

  const { _id: postId, author, type } = usePostContext();
  const { userId } = author;
  const pinnedPost = useSelector(selectPinnedPost);

  const { isFollowing, isMuting, isBlocking } = useUserRelationStatus();

  const toggle =
    option === "following"
      ? isFollowing(userId)
      : option === "mute"
      ? isMuting(userId)
      : option === "block"
      ? isBlocking(userId)
      : option === "delete"
      ? type === "repost"
      : option === "main"
      ? Boolean(pinnedPost) && pinnedPost === postId
      : undefined;

  const handleDelete = async () => {
    try {
      const result = await fetchWithAuth(`/posts/${postId}`, {
        method: "DELETE",
      });
      if (result.success) {
        const postIds = result.data.postIds;
        for (const postId of postIds) {
          dispatch(deletePost(postId));
        }
      } else {
        console.error("삭제 실패");
      }
    } catch (error) {
      console.error("삭제 도중 에러 발생", error);
    }
  };

  const handlePin = async () => {
    try {
      const result = await fetchWithAuth(
        `/users/me`,
        {
          method: "PATCH",
        },
        {
          pinnedPost: postId,
        }
      );

      if (result.success) {
        dispatch(setPinnedPost(postId));
      } else {
        console.error("핀 업데이트 실패");
      }
    } catch (error) {
      console.error("핀 업데이트 중 에러 발생", error);
    }
  };

  const handleReplyOption = () => {
    onClose();
    setIsReplyOpen(true);
  };

  // 나중에 hook으로 변경할 것
  const handleClick = () => {
    switch (option) {
      case "following":
        // 팔로잉 중인 경우 언팔로우, 팔로잉을 하지 않는 경우 팔로잉
        break;
      case "list":
        // 리스트에 있는 경우 삭제, 없는 경우 추가
        break;
      case "mute":
        // mute 중인 경우 뮤트 해제, 뮤트 중이 아닌 경우 뮤트
        break;
      case "block":
        // 차단 중인 경우 차단 해제, 차단 중이 아닌 경우 차단
        break;
      case "view":
        // post 페이지 url/quote로 이동해서 통계를 보여줌
        break;
      case "embed":
        // embed 페이지로 이동
        break;
      case "report":
        // 신고 모달을 엶
        break;
      case "groupNote":
        // communityNote 모달을 엶
        break;
      case "delete":
        // 현재 게시물 삭제
        handleDelete();
        break;
      case "main":
        // 현재 게시물를 프로필 페이지의 상태에 배치
        handlePin();
        break;
      case "replyOption":
        // 댓글 작성 옵션 드롭 다운이 열림
        handleReplyOption();
        break;
      case "analytics":
        // 게시물 애너리틱스 드롭다운 엶
        break;
    }
  };

  return (
    <button
      className={classNames}
      type="button"
      disabled={disabled}
      onClick={handleClick}
    >
      <MoreOptionIcon option={option} toggle={toggle} />
      <Text>{text(option, userId, toggle)}</Text>
    </button>
  );
};

export default MoreOption;
