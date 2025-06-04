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
import { fetchWithAuth } from "@shared/pages";
import {
  toggleIsMutesAndBlocksRemoved,
  toggleIsSensitiveMediaDisplayed,
} from "@shared/@common/models/slices/privacySlice";

interface SearchSettingsModalProps {
  className?: string;
}

const SearchSettingsModal = ({ className }: SearchSettingsModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // 언어 설정
  const { title, heading1, expl1, heading2, expl2 } = useLanguageContent([
    "explore",
    "SearchSettingsModal",
  ]);

  const isOpen = useSelector(getParalleModal("search_settings"));

  const onClose = () => {
    dispatch(onParallelModalClose("search_settings"));
    navigate(-1);
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

  const handleSensitiveMedia = async () => {
    try {
      const result = await fetchWithAuth(
        "/privacies/me",
        {
          method: "PATCH",
        },
        {
          isSensitiveMediaDisplayed: "toggle",
        }
      );
      if (result.success) {
        dispatch(toggleIsSensitiveMediaDisplayed());
      } else {
        console.error("민감한 미디어 제한 실패");
      }
    } catch (error) {
      console.error("민감한 미디어 제한 도중 에러 발생", error);
    }
  };
  const handleSearchResult = async () => {
    try {
      const result = await fetchWithAuth(
        "/privacies/me",
        {
          method: "PATCH",
        },
        {
          isMutesAndBlocksRemoved: "toggle",
        }
      );
      if (result.success) {
        dispatch(toggleIsMutesAndBlocksRemoved());
      } else {
        console.error("차단 또는 뮤트한 계정 제외하기 실패");
      }
    } catch (error) {
      console.error("차단 또는 뮤트한 계정 제외하기 도중 에러 발생", error);
    }
  };

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
              <div
                className={styles["checkbox__wrapper"]}
                onClick={handleSensitiveMedia}
              >
                <Text>{heading1}</Text>
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
              <Text type="expl">{expl1}</Text>
            </div>
            <div className={styles["checkbox__container"]}>
              <div
                className={styles["checkbox__wrapper"]}
                onClick={handleSearchResult}
              >
                <Text>{heading2}</Text>
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
              <Text type="expl">{expl2}</Text>
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default SearchSettingsModal;
