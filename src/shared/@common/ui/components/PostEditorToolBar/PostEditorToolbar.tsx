import styles from "./PostEditorToolbar.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { Icon } from "../../icons";

interface PostEditorToolBarProps {
  className?: string;
}

const PostEditorToolbar = ({ className }: PostEditorToolBarProps) => {
  // 언어 설정
  const {} = useLanguageContent(["components", "PostEditorToolbar"]);

  const classNames = joinClassNames([
    styles["post__editor__toolbar"],
    className,
  ]);

  return (
    <div className={classNames}>
      <nav className={styles["post__editor__toolbar__list"]}>
        <span className={styles["post__editor__toolbar__item"]}>
          <Icon iconName="imageIcon" onClick={() => {}} />
        </span>
        <span className={styles["post__editor__toolbar__item"]}>
          <Icon iconName="voteIcon" onClick={() => {}} />
        </span>
        <span className={styles["post__editor__toolbar__item"]}>
          <Icon iconName="emojiIcon" onClick={() => {}} />
        </span>
        <span className={styles["post__editor__toolbar__item"]}>
          <Icon iconName="scheduleIcon" onClick={() => {}} />
        </span>
        <span className={styles["post__editor__toolbar__item"]}>
          <Icon iconName="pinIcon" onClick={() => {}} />
        </span>
      </nav>
    </div>
  );
};

export default PostEditorToolbar;
