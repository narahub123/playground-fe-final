import styles from "./LogoutModal.module.css";
import {
  getAccountGroup,
  getStandAloneModal,
} from "@shared/@common/models/selectors";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { logo } from "@shared/@common/assets";
import { removeAccessToken } from "@features/auth-logout/utils";
import { useAppDispatch } from "@app/store";
import { clearUserState } from "@shared/@common/models/slices/userSlice";
import { clearDisplayState } from "@shared/@common/models/slices/displaySlice";
import { clearNotificationState } from "@shared/@common/models/slices/notificationSlice";
import { clearPrivacyState } from "@shared/@common/models/slices/privacySlice";
import { clearSecurityState } from "@shared/@common/models/slices/securitySlice";
import { fetchWithAuth } from "@shared/pages/utils";

interface LogoutModalProps {
  className?: string;
  isAllAccounts?: boolean;
  onClose: () => void;
}

const LogoutModal = ({
  isAllAccounts = false,
  className,
  onClose,
}: LogoutModalProps) => {
  const dispatch = useAppDispatch();

  // 실제 코드
  const accounts = useSelector(getAccountGroup);

  // 여닫기 구현
  const isOpen = useSelector(getStandAloneModal("logout"));

  // 언어 설정
  const { all, title, expl1, expl2, logoutBtn, cancelBtn } = useLanguageContent(
    ["components", "LogoutModal"]
  );

  const classNames = joinClassNames([styles["logout__modal"], className]);

  // 로그아웃 구현 함수
  const logout = async (): Promise<void> => {
    // api 연결
    const response = isAllAccounts
      ? await fetchWithAuth("/auth/logout/all", { method: "POST" })
      : await fetchWithAuth("/auth/logout", { method: "POST" });

    // error 코드 작성할 것
    if (!response.success) return;

    removeAccessToken(); // access 토큰 삭제

    // clear slices
    dispatch(clearUserState());
    dispatch(clearDisplayState());
    dispatch(clearNotificationState());
    dispatch(clearPrivacyState());
    dispatch(clearSecurityState());

    // 페이지 이동
    window.location.href = "/";
  };

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
              isAllAccounts ? all : accounts[0].userId
            } ${title}`}</Text>
            <Text type="expl">{isAllAccounts ? expl2 : expl1}</Text>
          </Modal.Body>
          <Modal.Footer className={styles["logout__modal__footer"]}>
            <Button onClick={logout} width="100%" rounded="2xl" isValid={true}>
              {logoutBtn}
            </Button>
            <Button
              onClick={onClose}
              width="100%"
              rounded="2xl"
              variant="outline"
              isValid={true}
            >
              {cancelBtn}
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default LogoutModal;
