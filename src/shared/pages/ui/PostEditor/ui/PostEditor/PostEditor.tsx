import styles from "./PostEditor.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { ProfileImage } from "@shared/@common/ui/components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "@shared/@common/models/selectors";
import { useState } from "react";
import {
  AddPostLink,
  CircularProgressBar,
  MediaPreviewContainer,
  PostButton,
  PostEditorToolbar,
  ReplyPermissionControl,
  TextEditor,
  Vote,
} from "@shared/pages/ui/PostEditor/ui";
import { ReplyOptionType } from "@shared/pages/ui/PostEditor/types";
import { selectPostEditor } from "../../models/selectors";

interface PostEditorProps {
  className?: string;
}

const PostEditor = ({ className }: PostEditorProps) => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const [replyOption, setReplyOption] = useState<ReplyOptionType>("all");

  const user = useSelector(selectUser);
  const postEditorContent = useSelector(selectPostEditor);
  const { post, toolbar } = postEditorContent;
  const { media, vote } = toolbar;

  console.log(toolbar);

  // 언어 설정
  const {} = useLanguageContent(["components", "PostEditor"]);

  const classNames = joinClassNames([styles["post__editor"], className]);

  return (
    <div className={classNames}>
      <span className={styles["post__editor__left"]}>
        <div className={styles["profile__container"]}>
          <ProfileImage
            width={"40px"}
            rounded="full"
            onClick={() => {
              navigate(`/${user.userId}`);
            }}
            className={styles["profile_image"]}
          />
        </div>
      </span>
      <span className={styles["post__editor__right"]}>
        <div className={styles["text__editor__container"]}>
          <div className={styles["text__editor__wrapper"]}>
            <TextEditor />
          </div>
          {media && (
            <div className={styles["media__preview__wrapper"]}>
              <MediaPreviewContainer />
            </div>
          )}
          {vote && (
            <div className={styles["vote__wrapper"]}>
              <Vote />
            </div>
          )}
        </div>
        <div className={styles["controls__wrapper"]}>
          <div className={styles["reply__permission__control__wrapper"]}>
            <ReplyPermissionControl
              replyOption={replyOption}
              setReplyOption={setReplyOption}
            />
          </div>
          <div className={styles["toolbar__container"]}>
            <span className={styles["toolbar__wrapper"]}>
              <PostEditorToolbar />
            </span>
            <span className={styles["btns__wrapper"]}>
              <CircularProgressBar textLength={0} />
              <div className={styles["vertical__divider"]} />
              <AddPostLink />
              <PostButton isValid={isValid} />
            </span>
          </div>
        </div>
      </span>
    </div>
  );
};

export default PostEditor;
