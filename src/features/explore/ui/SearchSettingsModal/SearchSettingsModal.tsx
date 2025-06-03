import { getParalleModal } from "@shared/@common/models/selectors";
import styles from "./SearchSettingsModal.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Modal } from "@shared/@common/ui/components";
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
          <Modal.Header>헤더</Modal.Header>
          <Modal.Body>바디</Modal.Body>
          <Modal.Footer>고급 검색</Modal.Footer>
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default SearchSettingsModal;
