import { selectUser } from "@shared/@common/models/selectors";
import styles from "./PostCommentEditor.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { ProfileImage, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import { useHoverDropdown, usePostContext } from "../../hooks";
import { defaultProfileImage } from "@shared/@common/assets";
import {
  CircularProgressBar,
  PostEditorToolbar,
  TextEditor,
} from "@shared/pages/ui/PostEditor";
import {
  selectPostEditor,
  selectPostEditorTextLength,
} from "@shared/pages/ui/PostEditor/models/selectors";
import {
  CommentButton,
  MediaPreviewContainer,
} from "@shared/pages/ui/PostEditor/ui";
import { POST_LENGTH_MAX } from "@shared/@common/constants";

interface PostCommentEditorProps {
  className?: string;
}

const PostCommentEditor = ({ className }: PostCommentEditorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mentionsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const textLength = useSelector(selectPostEditorTextLength);
  const commentEditor = useSelector(selectPostEditor);
  const { post } = commentEditor;
  const { media } = post;

  const [isValid, setIsValid] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  // 유효성 검사
  useEffect(() => {
    // 문자 혹은 미디어가 존재하는 경우 valid
    if ((textLength > 0 && textLength <= POST_LENGTH_MAX) || media.length > 0) {
      setIsValid((prev) => {
        if (prev === false) return true;
        else return prev;
      });
    } else {
      setIsValid((prev) => {
        if (prev === true) return false;
        else return prev;
      });
    }
  }, [textLength, media]);
  // 언어 설정
  const { mention, placeholder, btn } = useLanguageContent([
    "post",
    "PostCommentEditor",
  ]);
  const user = useSelector(selectUser);
  const { userId, profileImage } = user;

  const { mentions, author } = usePostContext();
  const { userId: authorId } = author;

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

  // 멘션 처리
  const authorHandle = "@" + authorId;

  const filteredMentions = mentions.includes(authorHandle)
    ? [authorHandle, ...mentions.filter((m) => m !== authorHandle)]
    : [authorHandle, ...mentions];

  const { prefix, suffix } = mention(filteredMentions);

  const renderPart = (part: string[] | string) => {
    return typeof part === "string" ? (
      <Text className={styles["mentions__text"]}>{part}</Text>
    ) : (
      part.map((mention, index) => (
        <Link
          key={mention}
          to={`/${mention.slice(1)}`}
          className={styles["mentions__mention"]}
          onMouseEnter={() =>
            handleMouseEnter(mentionsRef.current[index], mention.slice(1))
          }
          onMouseLeave={() => handleMouseLeave()}
          ref={(el) => (mentionsRef.current[index] = el)}
        >
          {mention}
        </Link>
      ))
    );
  };

  return (
    <div
      className={classNames}
      ref={containerRef}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
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
        <div className={styles["mentions__wrapper"]}>
          <div className={styles["empty"]} />
          <div className={styles["mentions"]}>
            <span className={styles["mentions__fix"]}>
              {renderPart(prefix)}
            </span>
            <span className={styles["mentions__fix"]}>
              {renderPart(suffix)}
            </span>
          </div>
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
            <div>
              <div
                className={styles["input"]}
                style={{
                  width: `${isShowing ? 100 : 85}%`,
                }}
              >
                <TextEditor placeholder={placeholder} onFocus={handleFocus} />
              </div>
              {media && (
                <div className={styles["media__preview__wrapper"]}>
                  <MediaPreviewContainer />
                </div>
              )}
            </div>
            <div
              className={styles["toolbar"]}
              style={{
                marginTop: isShowing ? "0px" : "-60px",
              }}
            >
              <span className={styles["toolbar__wrapper"]}>
                <PostEditorToolbar isVoteOn={false} isScheduleOn={false} />
              </span>
              <span className={styles["btns__wrapper"]}>
                <CircularProgressBar textLength={textLength} />
                <div className={styles["vertical__divider"]} />
                <CommentButton isValid={isValid} text={btn} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCommentEditor;
