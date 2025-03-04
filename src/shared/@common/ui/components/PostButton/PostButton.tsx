import styles from "./PostButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface PostButtonProps {
  disabled?: boolean;
  isValid: boolean;
}

const PostButton = ({ isValid }: PostButtonProps) => {
  // 언어 설정
  const { text } = useLanguageContent(["components", "PostButton"]);

  return (
    <button
      type="button"
      className={joinClassNames([
        styles["post__btn"],
        isValid ? styles["post__btn--valid"] : styles["post__btn--invalid"],
      ])}
    >
      {text}
    </button>
  );
};

export default PostButton;
