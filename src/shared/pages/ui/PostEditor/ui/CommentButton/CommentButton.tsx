import styles from "./CommentButton.module.css";
import { useAPIError } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { fetchWithAuth } from "@shared/pages/utils";
import { useSelector } from "react-redux";
import { selectPostEditor } from "../../models/selectors";
import { useToast } from "@shared/@common/ui/components/Toast/hooks";
import { ErrorTitleCodeType } from "@shared/@common/types";
import { usePostContext } from "@shared/pages/ui/Post/hooks";

interface CommentButtonProps {
  className?: string;
  text: string;
  isValid: boolean;
  isCommentType?: boolean;
}

const CommentButton = ({
  isValid,
  text,
  isCommentType = false,
}: CommentButtonProps) => {
  const { post } = useSelector(selectPostEditor);

  const { _id, thread } = usePostContext();

  const toast = useToast();
  const { getErrorTitle } = useAPIError();

  const handleClick = async () => {
    const { innerHtml, media } = post;

    // comment 타입인 경우 thread의 마지막 요소의 _id를 이니면 원포스트의 _id를 삽입
    const postId = isCommentType ? thread[thread.length - 1]._id : _id;

    try {
      const result = await fetchWithAuth(
        `/posts/${postId}/comment`,
        { method: "POST" },
        {
          type: "comment",
          text: innerHtml,
          media,
        }
      );
      if (result.success) {
        console.log(result.data);
      } else {
        const errorCode = result.code as ErrorTitleCodeType;

        if (errorCode === "POST_CREATION_FAILED") {
          toast({
            description: getErrorTitle(errorCode),
            type: "error",
          });
        }
      }
    } catch (error) {}
  };

  return (
    <button
      type="button"
      className={joinClassNames([
        styles["comment__button"],
        isValid
          ? styles["comment__button--valid"]
          : styles["comment__button--invalid"],
      ])}
      onClick={isValid ? handleClick : undefined}
    >
      {text}
    </button>
  );
};

export default CommentButton;
