import { getParalleModal, getPrivacy } from "@shared/@common/models/selectors";
import styles from "./SearchSettingsModal.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Modal, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@app/store";
import {
  onParallelModalClose,
  onParallelModalOpen,
} from "@shared/@common/models/slices/modalSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { PRIMARY_LINK } from "@shared/@common/constants";
import { Icon } from "@shared/@common/ui/icons";

interface SearchSettingsModalProps {
  className?: string;
}

const SearchSettingsModal = ({ className }: SearchSettingsModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // 언어 설정
  const { title } = useLanguageContent(["explore", "SearchSettingsModal"]);

  const isOpen = useSelector(getParalleModal("search_settings"));

  const onClose = () => {
    dispatch(onParallelModalClose("search_settings"));
    navigate(PRIMARY_LINK.SEARCH);
  };

  const classNames = joinClassNames([
    styles["search__settings__modal"],
    className,
  ]);

  const { isSensitiveMediaDisplayed, isMutesAndBlocksRemoved } =
    useSelector(getPrivacy);

  useEffect(() => {
    if (!pathname) return;

    if (pathname.includes("/settings/search")) {
      dispatch(onParallelModalOpen("search_settings"));
    }
  }, [pathname]);

  return (
    <Modal
      domId={"search-settings"}
      className={classNames}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Modal.Overlay />
      <Modal.Container>
        <Modal.Content>
          <Modal.Header className={styles["header"]}>
            <div className={styles["icon__wrapper"]}>
              <Icon
                className={styles["icon"]}
                iconName="close"
                onClick={() => {}}
              />
            </div>
            <Text type="heading3">{title}</Text>
          </Modal.Header>
          <Modal.Body className={styles["body"]}>
            <div className={styles["checkbox__container"]}>
              <div className={styles["checkbox__wrapper"]}>
                <Text>민감한 내용의 콘텐츠 숨기기</Text>
                {isSensitiveMediaDisplayed ? (
                  <Icon
                    iconName="rectCheckboxBlank"
                    iconSize="xl"
                    className={styles["checkbox__icon"]}
                    tabIndex={0}
                  />
                ) : (
                  <Icon
                    iconName="rectCheckboxFill"
                    iconSize="xl"
                    iconColor="cornflowerblue"
                    className={styles["checkbox__icon"]}
                    tabIndex={0}
                  />
                )}
              </div>
              <Text type="expl">
                검색 결과에서 민감한 콘텐츠를 포함할 수 있는 게시물을 숨깁니다.
              </Text>
            </div>
            <div className={styles["checkbox__container"]}>
              <div className={styles["checkbox__wrapper"]}>
                <Text>차단 또는 뮤트한 계정 제외하기</Text>
                {isMutesAndBlocksRemoved ? (
                  <Icon
                    iconName="rectCheckboxFill"
                    iconSize="xl"
                    iconColor="cornflowerblue"
                    className={styles["checkbox__icon"]}
                    tabIndex={0}
                  />
                ) : (
                  <Icon
                    iconName="rectCheckboxBlank"
                    iconSize="xl"
                    className={styles["checkbox__icon"]}
                    tabIndex={0}
                  />
                )}
              </div>
              <Text type="expl">
                검색 결과에서 내가 차단 또는 뮤트한 계정을 제외하려면
                사용하세요.
              </Text>
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default SearchSettingsModal;
