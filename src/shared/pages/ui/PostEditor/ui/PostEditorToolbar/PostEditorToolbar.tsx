import styles from "./PostEditorToolbar.module.css";
import { joinClassNames } from "@shared/@common/utils";
import {
  EmojiButton,
  LocationTagButton,
  MediaButton,
  ReserveButton,
  VoteButton,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar";

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
