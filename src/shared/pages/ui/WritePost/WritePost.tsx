import styles from "./WritePost.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Modal, ProfileImage } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPosts } from "@shared/@common/models/selectors";
import {
  PostEditorToolbar,
  ReplyPermissionControl,
  TextEditor,
} from "../PostEditor";
import { useAppDispatch } from "@app/store";
import { setOriginalPost } from "../PostEditor/models/slices/postEditorSlice";
import { selectOriginalPost } from "../PostEditor/models/selectors";

interface WritePostProps {
  className?: string;
}

const WritePost = ({ className }: WritePostProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  const posts = useSelector(selectPosts);

  const originalPost = useSelector(selectOriginalPost);

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

  console.log(originalPost);

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
              <ProfileImage
                width={"40px"}
                rounded="full"
                className={styles["profile_image"]}
              />
            </span>
            <span className={styles["right"]}>
              <TextEditor placeholder="내용 추가하기" />
              {originalPost && (
                <div className={styles["original__post__contaienr"]}>
                  원 포스트
                </div>
              )}
            </span>
          </div>
          <div className={styles["control__wrapper"]}>
            <ReplyPermissionControl />
          </div>
        </Modal.Body>
        <Modal.Footer className={styles["footer"]}>
          <PostEditorToolbar />
          <button>인용하기</button>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Container>
  );
};

export default WritePost;
