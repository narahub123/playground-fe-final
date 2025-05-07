import { useAppDispatch } from "@app/store";
import styles from "./QuoteButton.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { selectPostEditor } from "../../models/selectors";
import { useToast } from "@shared/@common/ui/components/Toast/hooks";
import { useAPIError } from "@shared/@common/models/hooks";
import { fetchWithAuth } from "@shared/pages/utils";
import { setPost } from "@features/post-page";
import { clearPostEditor } from "../../models/slices";
import {
  setIsPostEditorLoading,
  setShouldClearEditor,
} from "../../models/slices/postEditorSlice";
import { ErrorTitleCodeType } from "@shared/@common/types";

interface QuoteButtonProps {
  className?: string;
  isValid: boolean;
  text: string;
}

const QuoteButton = ({ className, text, isValid }: QuoteButtonProps) => {
  const dispatch = useAppDispatch();
  const { post } = useSelector(selectPostEditor);

  const toast = useToast();
  const { getErrorTitle } = useAPIError();

  const classNames = joinClassNames([styles["quote__button"], className]);

  const handleClick = async () => {
    const { innerHtml, media, textLength, originalPost } = post;
    if (!originalPost) return;

    dispatch(setIsPostEditorLoading(true));

    try {
      const result = await fetchWithAuth(
        `/posts/${originalPost._id}/quote`,
        { method: "POST" },
        {
          text: textLength > 0 ? innerHtml : undefined,
          media,
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
        classNames,
        isValid
          ? styles["quote__button--valid"]
          : styles["quote__button--invalid"],
      ])}
      onClick={isValid ? handleClick : undefined}
    >
      {text}
    </button>
  );
};

export default QuoteButton;
