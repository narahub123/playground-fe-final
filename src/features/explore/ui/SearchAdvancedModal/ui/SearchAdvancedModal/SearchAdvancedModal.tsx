import { getParalleModal } from "@shared/@common/models/selectors";
import styles from "./SearchAdvancedModal.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@app/store";
import { onParallelModalClose } from "@shared/@common/models/slices/modalSlice";
import { Icon } from "@shared/@common/ui/icons";
import InputAllWords from "../InputAllWords/InputAllWords";
import InputPhrase from "../InputPhrase/InputPhrase";
import InputAnyWords from "../InputAnyWords/InputAnyWords";
import InputExcludeWords from "../InputExcludeWords/InputExcludeWords";
import InputHashtag from "../InputHashtag/InputHashtag";
import { selectSearchAdvanced } from "@features/explore/models";

interface SearchAdvancedModalProps {
  className?: string;
}

const SearchAdvancedModal = ({ className }: SearchAdvancedModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // 언어 설정
  const {
    title,
    search__btn,
    heading1,
    heading2,
    heading3,
    heading4,
    heading5,
  } = useLanguageContent(["explore", "SearchAdvancedModal"]);

  const { keyword, phrase, anyWords, excludeWords, hashtag } =
    useSelector(selectSearchAdvanced);

  const classNames = joinClassNames([
    styles["search__advanced__modal"],
    className,
  ]);

  const isOpen = useSelector(getParalleModal("search_advanced"));

  const onClose = () => {
    dispatch(onParallelModalClose("search_advanced"));
    navigate(-1);
  };

  if (!isOpen) return null;

  return (
    <Modal
      className={classNames}
      domId="search-advanced"
      isOpen={true}
      onClose={onClose}
    >
      <Modal.Overlay />
      <Modal.Container>
        <Modal.Content>
          <Modal.Header className={styles["header"]}>
            <div className={styles["left"]}>
              <div className={styles["close__wrapper"]}>
                <Icon
                  iconName="close"
                  onClick={() => {}}
                  className={styles["close__icon"]}
                />
              </div>
              <Text type="heading3">{title}</Text>
            </div>
            <div className={styles["right"]}>
              <Button
                isValid
                onClick={() => {}}
                rounded="2xl"
                className={styles["search__button"]}
              >
                {search__btn}
              </Button>
            </div>
          </Modal.Header>
          <Modal.Body className={styles["body"]}>
            <Text type="heading3" className={styles["heading"]}>
              {heading1}
            </Text>
            <div className={styles["section"]}>
              <InputAllWords />
              <InputPhrase />
              <InputAnyWords />
              <InputExcludeWords />
              <InputHashtag />
            </div>
            <Text type="heading3" className={styles["heading"]}>
              {heading2}
            </Text>
            <div className={styles["section"]}></div>
            <Text type="heading3" className={styles["heading"]}>
              {heading3}
            </Text>
            <Text type="heading3" className={styles["heading"]}>
              {heading4}
            </Text>
            <div className={styles["section"]}></div>
            <Text type="heading3" className={styles["heading"]}>
              {heading5}
            </Text>
            <div className={styles["section"]}></div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default SearchAdvancedModal;
