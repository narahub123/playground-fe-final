import styles from "./WritePost.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Modal } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useNavigate } from "react-router-dom";

interface WritePostProps {
  className?: string;
}

const WritePost = ({ className }: WritePostProps) => {
  const navigate = useNavigate();
  // 언어 설정
  const {} = useLanguageContent(["components", "WritePost"]);

  const classNames = joinClassNames([styles["write__post"], className]);

  return (
    <Modal.Container width={85}>
      <Modal.CloseButton location="left" />
      <Modal.Content>
        <Modal.Header className={classNames}>
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
        <Modal.Body>바디</Modal.Body>
        <Modal.Footer>푸터</Modal.Footer>
      </Modal.Content>
    </Modal.Container>
  );
};

export default WritePost;
