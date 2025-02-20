import { getParalleModal } from "@shared/@common/models/selectors";
import styles from "./AccountManageModal.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@app/store";
import { useNavigate } from "react-router-dom";
import { onParallelModalClose } from "@shared/@common/models/slices/modalSlice";
import { defaultProfileImage } from "@shared/@common/assets";
import AccountItem from "../AccountItem/AccountItem";
import { Icon } from "@shared/@common/ui/icons";

interface AccountManageModalProps {
  className?: string;
}

const AccountManageModal = ({ className }: AccountManageModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isOpen = useSelector(getParalleModal("account"));
  const onClose = () => {
    dispatch(onParallelModalClose("account"));
    navigate(-1);
  };

  // 언어 설정
  const { title, addBtn, expl, logoutBtn } = useLanguageContent([
    "components",
    "AccountManageModal",
  ]);

  const classNames = joinClassNames([
    styles["account__manage__modal"],
    className,
  ]);

  // 현재 유저에 대한 정보를 가져오는 코드 필요
  const currentUser = "test1234";
  // 계정 목록 가져오는 코드 필요
  const accounts = [
    {
      profileImage: defaultProfileImage,
      username: "몰러",
      userId: "test1234",
    },
    {
      profileImage: defaultProfileImage,
      username: "몰러",
      userId: "test1232",
    },
  ];

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
            <ul className={styles["account__list"]}>
              {accounts.map((account) => {
                const currentCond = currentUser === account.userId;
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
              onClick={() => {}}
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
              onClick={() => {}}
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
