import styles from "./PostEditorToolbar.module.css";
import { joinClassNames } from "@shared/@common/utils";
import MediaButton from "./MediaButton/MediaButton";
import VoteButton from "./VoteButton/VoteButton";
import { EmojiButton } from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar";
import ReserveButton from "./ReserveButton/ReserveButton";
import LocationTagButton from "./LocationTagButton/LocationTagButton";
import { useSelector } from "react-redux";
import { selectPostEditorToolbar } from "../../models/selectors";

interface PostEditorToolbarProps {
  className?: string;
}

const PostEditorToolbar = ({ className }: PostEditorToolbarProps) => {
  const { media, vote } = useSelector(selectPostEditorToolbar);

  const classNames = joinClassNames([
    styles["post__editor__toolbar"],
    className,
  ]);

  return (
    <div className={classNames}>
      <nav className={styles["post__editor__toolbar__list"]}>
        <MediaButton disabled={vote ? true : false} />
        <VoteButton disabled={vote || media ? true : false} />
        <EmojiButton />
        <ReserveButton disabled={vote ? true : false} />
        <LocationTagButton />
      </nav>
    </div>
  );
};

export default PostEditorToolbar;
