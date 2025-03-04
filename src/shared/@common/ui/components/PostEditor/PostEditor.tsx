import styles from "./PostEditor.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import ProfileImage from "../ProfileImage/ProfileImage";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "@shared/@common/models/selectors";

interface PostEditorProps {
  className?: string;
}

const PostEditor = ({ className }: PostEditorProps) => {
  const navigate = useNavigate();

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
          <div className={styles["text__editor__wrapper"]}>텍스트 에디터</div>
          <div className={styles["dropdown__btn__wrapper"]}>버튼</div>
        </div>
        <div className={styles["toolbar__container"]}>
          <span className={styles["toolbar__wrapper"]}>툴바</span>
          <span className={styles["post__btn__wrapper"]}>버튼</span>
        </div>
      </span>
    </div>
  );
};

export default PostEditor;
