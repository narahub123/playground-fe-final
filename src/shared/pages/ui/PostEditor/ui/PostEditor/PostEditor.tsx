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
  PostButton,
  PostEditorToolbar,
  ReplyPermissionControl,
  TextEditor,
} from "@shared/pages/ui/PostEditor/ui";
import { ReplyOptionType } from "@shared/pages/ui/PostEditor/types";
import { selectPostEditor } from "../../models/selectors";

interface PostEditorProps {
  className?: string;
}

const PostEditor = ({ className }: PostEditorProps) => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const [text, setText] = useState("");
  const [replyOption, setReplyOption] = useState<ReplyOptionType>("all");

  const postEditorContent = useSelector(selectPostEditor);

  console.log(postEditorContent);

  console.log("텍스트", text);

  const user = useSelector(selectUser);
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
          <div className={styles["dropdown__btn__wrapper"]}>
            <ReplyPermissionControl
              replyOption={replyOption}
              setReplyOption={setReplyOption}
            />
          </div>
        </div>
        <div className={styles["toolbar__container"]}>
          <span className={styles["toolbar__wrapper"]}>
            <PostEditorToolbar />
          </span>
          <span className={styles["btns__wrapper"]}>
            <CircularProgressBar textLength={text.length} />
            <div className={styles["vertical__divider"]} />
            <AddPostLink />
            <PostButton isValid={isValid} />
          </span>
        </div>
      </span>
    </div>
  );
};

export default PostEditor;
