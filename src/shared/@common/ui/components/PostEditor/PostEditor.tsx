import styles from "./PostEditor.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface PostEditorProps {
  className?: string;
}

const PostEditor = ({ className }: PostEditorProps) => {
  // 언어 설정
  const {} = useLanguageContent(["components", "PostEditor"]);

  const classNames = joinClassNames([styles["post__editor"], className]);

  return (
    <div className={classNames}>
      <span className={styles["post__editor__left"]}>
        <div className={styles["profile__container"]}>프로필</div>
      </span>
      <span className={styles["post__editor__right"]}>
        <div className={styles["text__editor__container"]}>
          <div className={styles["text__editor__wrapper"]}>텍스트 에디터</div>
          <div className={styles["dropdown__btn__wrapper"]}>버튼</div>
        </div>
        <div className={styles["toolbar__container"]}>
          <span className={styles["toolbar__wrapper"]}>툴바</span>
          <span className={styles["post__btn__wrapper"]}>버튼</span>
        </div>
      </span>
    </div>
  );
};

export default PostEditor;
