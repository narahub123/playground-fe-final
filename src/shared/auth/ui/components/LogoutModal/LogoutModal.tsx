import { getStandAloneModal } from "@shared/@common/models/selectors";
import styles from "./LogoutModal.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@app/store";
import { onStandAlonClose } from "@shared/@common/models/slices/modalSlice";
import { logo } from "@shared/@common/assets";

interface LogoutModalProps {
  className?: string;
  isAllAccounts?: boolean;
}

const LogoutModal = ({
  isAllAccounts = false,
  className,
}: LogoutModalProps) => {
  const dispatch = useAppDispatch();

  const currentUser = "test1234";

  // 여닫기 구현
  const isOpen = useSelector(getStandAloneModal("logout"));
  const onClose = () => {
    dispatch(onStandAlonClose("logout"));
  };

  // 언어 설정
  const { all, title, expl1, expl2, logout, cancel } = useLanguageContent([
    "components",
    "LogoutModal",
  ]);

  const classNames = joinClassNames([styles["logout__modal"], className]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      domId="logout-modal"
      className={classNames}
    >
      <Modal.Overlay />
      <Modal.Container width={56}>
        <Modal.CloseButton />
        <Modal.Content>
          <Modal.Header className={styles["logout__modal__header"]}>
            <img
              src={logo}
              alt="playground logo"
              className={styles["logout__modal__logo"]}
              aria-hidden="true"
            />
          </Modal.Header>
          <Modal.Body>
            <Text type={"heading3"}>{`${
              isAllAccounts ? all : currentUser
            } ${title}`}</Text>
            <Text type="expl">{isAllAccounts ? expl2 : expl1}</Text>
          </Modal.Body>
          <Modal.Footer className={styles["logout__modal__footer"]}>
            <Button
              onClick={() => {}}
              width="100%"
              rounded="2xl"
              isValid={true}
            >
              {logout}
            </Button>
            <Button
              onClick={() => {}}
              width="100%"
              rounded="2xl"
              variant="outline"
              isValid={true}
            >
              {cancel}
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default LogoutModal;
