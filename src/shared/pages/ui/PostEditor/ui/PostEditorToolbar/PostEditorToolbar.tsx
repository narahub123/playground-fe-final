import styles from "./PostEditorToolbar.module.css";
import { joinClassNames } from "@shared/@common/utils";
import {
  EmojiButton,
  LocationTagButton,
  MediaButton,
  ScheduleButton,
  VoteButton,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar";

import { useSelector } from "react-redux";
import { selectPostEditorToolbar } from "../../models/selectors";

interface PostEditorToolbarProps {
  className?: string;
  isMediaOn?: boolean;
  isVoteOn?: boolean;
  isEmojiOn?: boolean;
  isScheduleOn?: boolean;
  isLocationOn?: boolean;
}

const PostEditorToolbar = ({
  className,
  isMediaOn = true,
  isVoteOn = true,
  isEmojiOn = true,
  isScheduleOn = true,
  isLocationOn = true,
}: PostEditorToolbarProps) => {
  const { media, vote } = useSelector(selectPostEditorToolbar);

  const classNames = joinClassNames([
    styles["post__editor__toolbar"],
    className,
  ]);

  return (
    <div className={classNames}>
      <nav className={styles["post__editor__toolbar__list"]}>
        {isMediaOn && <MediaButton disabled={vote ? true : false} />}
        {isVoteOn && <VoteButton disabled={vote || media ? true : false} />}
        {isEmojiOn && <EmojiButton />}
        {isScheduleOn && <ScheduleButton disabled={vote ? true : false} />}
        {isLocationOn && <LocationTagButton />}
      </nav>
    </div>
  );
};

export default PostEditorToolbar;
