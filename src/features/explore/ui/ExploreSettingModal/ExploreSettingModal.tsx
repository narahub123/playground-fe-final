import { getStandAloneModal } from "@shared/@common/models/selectors";
import styles from "./ExploreSettingModal.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Modal, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@app/store";
import { onStandAlonClose } from "@shared/@common/models/slices/modalSlice";
import { Icon } from "@shared/@common/ui/icons";

interface ExploreSettingModalProps {
  className?: string;
}

const ExploreSettingModal = ({ className }: ExploreSettingModalProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const {
    title,
    heading1,
    option1,
    description1,
    heading2,
    option2,
    description2,
  } = useLanguageContent(["explore", "ExploreSettingModal"]);

  const isOpen = useSelector(getStandAloneModal("explore"));

  const onClose = () => {
    dispatch(onStandAlonClose("explore"));
  };

  return (
    <Modal domId="explore" isOpen={true} onClose={onClose}>
      <Modal.Overlay />
      <Modal.Container>
        <Modal.Content>
          <Modal.Header className={styles["header"]}>
            <div className={styles["close__wrapper"]}>
              <Icon
                iconName="close"
                onClick={onClose}
                className={styles["close"]}
                iconSize="xl"
              />
            </div>
            <Text type="heading3">{title}</Text>
          </Modal.Header>
          <Modal.Body className={styles["body"]}>
            <div style={{ padding: "0.75rem 1rem" }}>
              <Text type="heading3">{heading1}</Text>
            </div>
            <div style={{ padding: "1rem" }}>
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                onClick={() => {}}
              >
                <Text>{option1}</Text>
                <Icon iconName="rectCheckboxBlank" iconSize="xl" />
              </div>
              <Text type="expl">{description1}</Text>
            </div>
            <div style={{ borderBottom: "1px solid #ccc" }} />
            <div style={{ padding: "0.75rem 1rem" }}>
              <Text type="heading3">{heading2}</Text>
            </div>
            <div style={{ padding: "1rem" }}>
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                onClick={() => {}}
              >
                <Text>{option2}</Text>
                <Icon iconName="rectCheckboxBlank" iconSize="xl" />
              </div>
              <Text type="expl">{description2}</Text>
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default ExploreSettingModal;
