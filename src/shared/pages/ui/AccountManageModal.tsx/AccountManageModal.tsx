import { getParalleModal, getUser } from "@shared/@common/models/selectors";
import styles from "./AccountManageModal.module.css";
import {
  useKeepParallelModalOpen,
  useLanguageContent,
} from "@shared/@common/models/hooks";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
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

interface AccountManageModalProps {
  className?: string;
}

const AccountManageModal = ({ className }: AccountManageModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUser);
  const isOpen = useSelector(getParalleModal("account"));
  const onClose = () => {
    dispatch(onParallelModalClose("account"));
    navigate(-1);
  };

  const onLogoutClose = () => {
    dispatch(onStandAlonClose("logout"));
  };

  useKeepParallelModalOpen("/account/manage", "account");

  // 언어 설정
  const { title, addBtn, expl, logoutBtn } = useLanguageContent([
    "components",
    "AccountManageModal",
  ]);

  const classNames = joinClassNames([
    styles["account__manage__modal"],
    className,
  ]);

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
                navigate("/i/flow/login", { state: { api: "addAccount" } });
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
