import styles from "./PostEditorToolbar.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import ImageButton from "./ImageButton/ImageButton";
import VoteButton from "./VoteButton/VoteButton";
import EmojiButton from "./EmojiButton/EmojiButton";
import ReserveButton from "./ReserveButton/ReserveButton";
import LocationTagButton from "./LocationTagButton/LocationTagButton";

interface PostEditorToolbarProps {
  className?: string;
}

const PostEditorToolbar = ({ className }: PostEditorToolbarProps) => {
  // 언어 설정
  const {} = useLanguageContent(["components", "PostEditorToolbar"]);

  const classNames = joinClassNames([
    styles["post__editor__toolbar"],
    className,
  ]);

  return (
    <div className={classNames}>
      <nav className={styles["post__editor__toolbar__list"]}>
        <ImageButton />
        <VoteButton />
        <EmojiButton />
        <ReserveButton />
        <LocationTagButton />
      </nav>
    </div>
  );
};

export default PostEditorToolbar;
