import styles from "./PostButton.module.css";
import { useAPIError } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { fetchWithAuth } from "@shared/pages/utils";
import { useSelector } from "react-redux";
import { selectPostEditor } from "../../models/selectors";
import { convertVoteFormat } from "../../utils";
import { useToast } from "@shared/@common/ui/components/Toast/hooks";
import { ErrorTitleCodeType } from "@shared/@common/types";
import { useAppDispatch } from "@app/store";
import { clearPostEditor } from "../../models/slices";
import {
  setIsPostEditorLoading,
  setShouldClearEditor,
} from "../../models/slices/postEditorSlice";
import { setPost } from "@shared/@common/models/slices/feedSlice";

interface PostButtonProps {
  disabled?: boolean;
  text: string;
  isValid: boolean;
}

const PostButton = ({ isValid, text }: PostButtonProps) => {
  const dispatch = useAppDispatch();
  const { post } = useSelector(selectPostEditor);

  const toast = useToast();
  const { getErrorTitle } = useAPIError();

  const handleClick = async () => {
    const { innerHtml, media, schedule, vote, textLength } = post;

    const newVote = convertVoteFormat(vote);

    dispatch(setIsPostEditorLoading(true));

    try {
      const result = await fetchWithAuth(
        "/posts",
        { method: "POST" },
        {
          text: textLength > 0 ? innerHtml : undefined,
          media,
          schedule,
          vote: newVote,
        }
      );
      if (result.success) {
        dispatch(setPost(result.data.post));
        dispatch(clearPostEditor());
        dispatch(setShouldClearEditor());
      } else {
        const errorCode = result.code as ErrorTitleCodeType;

        if (errorCode === "POST_CREATION_FAILED") {
          toast({
            description: getErrorTitle(errorCode),
            type: "error",
          });
        }
      }
    } catch (error) {
    } finally {
      dispatch(setIsPostEditorLoading(false));
    }
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
