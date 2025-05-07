import styles from "./WritePost.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Modal, ProfileImage } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPosts, selectUser } from "@shared/@common/models/selectors";
import {
  OriginalPostContainer,
  PostEditorToolbar,
  QuoteButton,
  ReplyPermissionControl,
  TextEditor,
} from "../PostEditor";
import { useAppDispatch } from "@app/store";
import { setOriginalPost } from "../PostEditor/models/slices/postEditorSlice";
import { defaultProfileImage } from "@shared/@common/assets";

interface WritePostProps {
  className?: string;
}

const WritePost = ({ className }: WritePostProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  const posts = useSelector(selectPosts);

  const { profileImage } = useSelector(selectUser);

  useEffect(() => {
    if (!state) return;
    const { type, postId } = state;

    if (type === "quote") {
      // 인용할 포스트 가져오기
      const post = posts.find((post) => post._id === postId);

      if (!post) return;

      dispatch(setOriginalPost(post));
    }
  }, [state]);

  // 언어 설정
  const {} = useLanguageContent(["components", "WritePost"]);

  const classNames = joinClassNames([styles["write__post"], className]);

  return (
    <Modal.Container width={85} className={classNames}>
      <Modal.CloseButton location="left" />
      <Modal.Content>
        <Modal.Header className={styles["header"]}>
          <Button
            onClick={() => {
              navigate("unsent/drafts");
            }}
            type="button"
            variant="plain"
            fontColor="green"
            style={{ fontWeight: "bold" }}
          >
            초안
          </Button>
        </Modal.Header>
        <Modal.Body className={styles["body"]}>
          <div className={styles["wrapper"]}>
            <span className={styles["left"]}>
              <div className={styles["profile_image"]}>
                <ProfileImage
                  width={"40px"}
                  rounded="full"
                  src={profileImage || defaultProfileImage}
                />
              </div>
            </span>
            <span className={styles["right"]}>
              <div className={styles["editor__wrapper"]}>
                <TextEditor placeholder="내용 추가하기" />
              </div>
              <OriginalPostContainer />
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer className={styles["footer"]}>
          <div className={styles["control__wrapper"]}>
            <ReplyPermissionControl />
          </div>
          <div className={styles["toolbar__wrapper"]}>
            <PostEditorToolbar />
            <QuoteButton isValid={true} text={"인용하기"} />
          </div>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Container>
  );
};

export default WritePost;
