import styles from "./PostEditorToolbar.module.css";
import { joinClassNames } from "@shared/@common/utils";
import MediaButton from "./MediaButton/MediaButton";
import VoteButton from "./VoteButton/VoteButton";
import EmojiButton from "./EmojiButton/EmojiButton";
import ReserveButton from "./ReserveButton/ReserveButton";
import LocationTagButton from "./LocationTagButton/LocationTagButton";

interface PostEditorToolbarProps {
  className?: string;
}

const PostEditorToolbar = ({ className }: PostEditorToolbarProps) => {
  const classNames = joinClassNames([
    styles["post__editor__toolbar"],
    className,
  ]);

  return (
    <div className={classNames}>
      <nav className={styles["post__editor__toolbar__list"]}>
        <MediaButton />
        <VoteButton />
        <EmojiButton />
        <ReserveButton />
        <LocationTagButton />
      </nav>
    </div>
  );
};

export default PostEditorToolbar;
