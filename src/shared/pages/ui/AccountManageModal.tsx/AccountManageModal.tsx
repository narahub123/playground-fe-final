import styles from "./AccountManageModal.module.css";
import { getParalleModal, selectUser } from "@shared/@common/models/selectors";
import {
  useKeepParallelModalOpen,
  useLanguageContent,
} from "@shared/@common/models/hooks";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { joinClassNames, setPlayGroundData } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@app/store";
import { useNavigate } from "react-router-dom";
import {
  onParallelModalClose,
  onParallelModalOpen,
  onStandAlonClose,
  onStandAlonOpen,
} from "@shared/@common/models/slices/modalSlice";
import AccountItem from "../AccountItem/AccountItem";
import { Icon } from "@shared/@common/ui/icons";
import { LogoutModal } from "@features/auth-logout/ui";
import { fetchWithAuth } from "@shared/pages/utils";
import { useToast } from "@shared/@common/ui/components/Toast/hooks";
import { PRIMARY_LINK } from "@shared/@common/constants";

interface AccountManageModalProps {
  className?: string;
}

const AccountManageModal = ({ className }: AccountManageModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const isOpen = useSelector(getParalleModal("account"));
  const onClose = () => {
    dispatch(onParallelModalClose("account"));
    navigate(-1);
  };

  const onLogoutClose = () => {
    dispatch(onStandAlonClose("logout"));
  };

  useKeepParallelModalOpen(PRIMARY_LINK.ACCOUNT_MANAGE, "account");

  // 언어 설정
  const { title, addBtn, expl, logoutBtn, errors } = useLanguageContent([
    "components",
    "AccountManageModal",
  ]);

  const classNames = joinClassNames([
    styles["account__manage__modal"],
    className,
  ]);

  const toast = useToast();

  // 계정 전환
  const switchAccount = async (userId: string) => {
    const result = await fetchWithAuth(
      "/users/switch",
      {},
      { targetUserId: userId }
    );

    if (result.success) {
      setPlayGroundData({
        accessToken: result.data.accessToken,
        activeSessionId: result.data.activeSessionId,
      });

      window.location.href = "PRIMARY_LINK.HOME";
    } else {
      // false 시 toast 사용
      for (const error of Object.values(result.error.details)) {
        toast({
          title: `${errors.title(result.code)}`,
          description: `${errors.description(error)}`,
          type: "error",
        });
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      domId="write-modal"
      className={classNames}
    >
      <Modal.Overlay />
      <Modal.Container>
        <Modal.CloseButton location="left" />
        <Modal.Content>
          <Modal.Header className={styles[`account__manage__modal__header`]}>
            <Text>{title}</Text>
          </Modal.Header>
          <Modal.Body className={styles[`account__manage__modal__body`]}>
            <LogoutModal isAllAccounts onClose={onLogoutClose} />
            <ul className={styles["account__list"]}>
              {user.accountGroup.map((account) => {
                const currentCond = user.userId === account.userId;
                return (
                  <li
                    className={joinClassNames([
                      styles["account__item"],
                      !currentCond ? styles["account__item--unselected"] : "",
                    ])}
                    key={account.userId}
                    onClick={
                      currentCond
                        ? undefined
                        : () => switchAccount(account.userId)
                    }
                    tabIndex={currentCond ? -1 : 0}
                  >
                    <AccountItem account={account} />
                    {currentCond && (
                      <Icon iconName="valid" style={{ color: "green" }} />
                    )}
                  </li>
                );
              })}
            </ul>
            <Button
              onClick={() => {
                dispatch(onParallelModalOpen("login"));
                navigate(PRIMARY_LINK.LOGIN, { state: { api: "addAccount" } });
              }}
              variant="plain"
              className={styles[`account__manage__modal__add`]}
              fontColor="colorTheme"
            >
              {addBtn}
            </Button>

            <p className={styles[`account__manage__modal__paragraph`]}>
              <Text type="expl">{expl}</Text>
            </p>

            <Button
              onClick={() => {
                dispatch(onStandAlonOpen("logout"));
              }}
              variant="plain"
              className={styles[`account__manage__modal__logout`]}
              fontColor="red"
            >
              {logoutBtn}
            </Button>
          </Modal.Body>
          <Modal.Footer>{""}</Modal.Footer>
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default AccountManageModal;
