import styles from "./PostButton.module.css";
import { useAPIError, useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { fetchWithAuth } from "@shared/pages/utils";
import { useSelector } from "react-redux";
import { selectPostEditor } from "../../models/selectors";
import { convertVoteFormat } from "../../utils";
import { useToast } from "@shared/@common/ui/components/Toast/hooks";
import { ErrorTitleCodeType } from "@shared/@common/types";

interface PostButtonProps {
  disabled?: boolean;
  isValid: boolean;
}

const PostButton = ({ isValid }: PostButtonProps) => {
  const { post } = useSelector(selectPostEditor);
  // 언어 설정
  const { text } = useLanguageContent(["components", "PostButton"]);

  const toast = useToast();
  const { getErrorTitle } = useAPIError();

  const handleClick = async () => {
    const { innerHtml, media, schedule, vote } = post;

    const newVote = convertVoteFormat(vote);

    const result = await fetchWithAuth(
      "/posts",
      { method: "POST" },
      {
        text: innerHtml,
        media,
        schedule,
        vote: newVote,
      }
    );
    try {
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
        styles["post__btn"],
        isValid ? styles["post__btn--valid"] : styles["post__btn--invalid"],
      ])}
      onClick={isValid ? handleClick : undefined}
    >
      {text}
    </button>
  );
};

export default PostButton;
