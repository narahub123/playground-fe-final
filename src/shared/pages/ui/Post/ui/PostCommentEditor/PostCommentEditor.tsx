import { selectUser } from "@shared/@common/models/selectors";
import styles from "./PostCommentEditor.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { ProfileImage, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import { useHoverDropdown } from "../../hooks";
import { defaultProfileImage } from "@shared/@common/assets";
import {
  CircularProgressBar,
  PostButton,
  PostEditorToolbar,
  TextEditor,
} from "@shared/pages/ui/PostEditor";
import { selectPostEditorTextLength } from "@shared/pages/ui/PostEditor/models/selectors";

interface PostCommentEditorProps {
  className?: string;
}

const PostCommentEditor = ({ className }: PostCommentEditorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textLength = useSelector(selectPostEditorTextLength);

  const [isValid, setIsValid] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  // 언어 설정
  const { mention, placeholder, btn } = useLanguageContent([
    "post",
    "PostCommentEditor",
  ]);
  const user = useSelector(selectUser);
  const { userId, profileImage } = user;

  const classNames = joinClassNames([
    styles["post__comment__editor"],
    className,
  ]);

  const {
    rect,
    isOpen,
    handleMouseEnter,
    handleMouseLeave,
    onClose,
    profileInfo,
    isLoading,
  } = useHoverDropdown();

  const handleFocus = () => {
    setIsShowing(true);
  };

  return (
    <div className={classNames} ref={containerRef}>
      <ProfileDropdown
        isOpen={isOpen}
        isLoading={isLoading}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        top={rect.top}
        left={rect.left}
        onClose={onClose}
        profileInfo={profileInfo}
      />
      {isShowing && (
        <div className={styles["mention"]}>
          <div className={styles["empty"]} />
          <Text>{mention()}</Text>
        </div>
      )}
      <div className={styles["container"]}>
        <div className={styles["side"]}>
          <div className={styles["avatar"]} ref={containerRef}>
            <Link to={`/${userId}`}>
              <ProfileImage
                width={"40px"}
                rounded="full"
                src={profileImage || defaultProfileImage}
                className={styles["profile_image"]}
                onMouseEnter={() => handleMouseEnter(containerRef, userId)}
                onMouseLeave={() => handleMouseLeave()}
              />
            </Link>
          </div>
        </div>
        <div className={styles["main"]}>
          <div className={styles["editor__container"]}>
            <div
              className={styles["input"]}
              style={{
                width: `${isShowing ? 100 : 85}%`,
                
              }}
            >
              <TextEditor placeholder={placeholder} onFocus={handleFocus} />
            </div>
            <div
              className={styles["toolbar"]}
              style={{
                marginTop: isShowing ? "0px" : "-60px",
              }}
            >
              <span className={styles["toolbar__wrapper"]}>
                <PostEditorToolbar />
              </span>
              <span className={styles["btns__wrapper"]}>
                <CircularProgressBar textLength={textLength} />
                <div className={styles["vertical__divider"]} />
                <PostButton isValid={isValid} text={btn} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCommentEditor;
