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
import {
  selectAdvancedFilter,
  setFilterComments,
  setFilterLinks,
  setKeyword,
  toggleFilterComments,
  toggleFilterLinks,
} from "@features/explore";
import {
  accountArray,
  engagementArray,
  InputSearchAdvanced,
  keywordArray,
  SelectDateGroup,
  sinceArray,
  untilArray,
  useAdvancedSearch,
  useStoreSearchParams,
} from "@features/explore/ui/SearchAdvancedModal";
import { InputNumber, RadioGroup, ToggleButton } from "@shared/pages";

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
    filterComments,
    filterLinks,
    filterHeading1,
    filterHeading2,
  } = useLanguageContent(["explore", "SearchAdvancedModal"]);

  const isOpen = useSelector(getParalleModal("search_advanced"));

  const { comments, links } = useSelector(selectAdvancedFilter);

  const handleCommentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleFilterComments());
  };

  const handleCommentsKeydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.ctrlKey && e.key === "Enter") {
      dispatch(toggleFilterComments());
    }
  };

  const handleLinksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleFilterLinks());
  };

  const handleLinksKeydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.ctrlKey && e.key === "Enter") {
      dispatch(toggleFilterLinks());
    }
  };

  useStoreSearchParams();

  const classNames = joinClassNames([
    styles["search__advanced__modal"],
    className,
  ]);

  const onClose = () => {
    dispatch(onParallelModalClose("search_advanced"));
    navigate(-1);
  };

  const searchArray = useAdvancedSearch();

  const handleSubmit = () => {
    const search = searchArray.join(" ");

    dispatch(setKeyword(search));

    dispatch(onParallelModalClose("search_advanced"));
  };

  const selectComments = (value: string) => {
    dispatch(setFilterComments());
  };

  const handleKeydownSelectionOfComments = (
    e: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (e.ctrlKey && e.key === "Enter") {
      dispatch(setFilterComments());
    }
  };

  const selectLinks = (value: string) => {
    dispatch(setFilterLinks());
  };

  const handleKeydownSelectionOfLinks = (
    e: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (e.ctrlKey && e.key === "Enter") {
      dispatch(setFilterLinks());
    }
  };

  // if (!isOpen) return null;

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
                onClick={handleSubmit}
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
              {keywordArray.map((keyword) => {
                const { field, reducer, selector } = keyword;
                return (
                  <InputSearchAdvanced
                    key={field}
                    field={field}
                    reducer={reducer}
                    selector={selector}
                  />
                );
              })}
            </div>
            <Text type="heading3" className={styles["heading"]}>
              {heading2}
            </Text>
            <div className={styles["section"]}>
              {accountArray.map((keyword) => {
                const { field, reducer, selector } = keyword;
                return (
                  <InputSearchAdvanced
                    key={field}
                    field={field}
                    reducer={reducer}
                    selector={selector}
                  />
                );
              })}
            </div>
            <Text type="heading3" className={styles["heading"]}>
              {heading3}
            </Text>
            <div className={styles["filter__container"]}>
              <div className={styles["filter__wrapper"]}>
                <div className={styles["filter__toggle"]}>
                  <Text>{filterHeading1}</Text>
                  <ToggleButton
                    isChecked={comments.isOn}
                    onChange={handleCommentsChange}
                    onKeydown={handleCommentsKeydown}
                    field="comments"
                  />
                </div>
                <div className={styles["filter__radio"]}>
                  <RadioGroup
                    field="comments"
                    list={filterComments}
                    selected={comments.range}
                    onChange={selectComments}
                    onKeydown={handleKeydownSelectionOfComments}
                  />
                </div>
              </div>
              <div className={styles["filter__wrapper"]}>
                <div className={styles["filter__toggle"]}>
                  <Text>{filterHeading2}</Text>
                  <ToggleButton
                    isChecked={links.isOn}
                    onChange={handleLinksChange}
                    onKeydown={handleLinksKeydown}
                    field="links"
                  />
                </div>
                <div className={styles["filter__radio"]}>
                  <RadioGroup
                    field="links"
                    list={filterLinks}
                    selected={links.range}
                    onChange={selectLinks}
                    onKeydown={handleKeydownSelectionOfLinks}
                  />
                </div>
              </div>
            </div>
            <Text type="heading3" className={styles["heading"]}>
              {heading4}
            </Text>
            <div className={styles["section"]}>
              {engagementArray.map((engagement) => (
                <InputNumber
                  field={engagement.field}
                  selector={engagement.selector}
                  reducer={engagement.reducer}
                  min={engagement.min}
                  max={engagement.max}
                  key={engagement.field}
                />
              ))}
            </div>
            <Text type="heading3" className={styles["heading"]}>
              {heading5}
            </Text>
            <div className={styles["section"]}>
              <SelectDateGroup field="since" array={sinceArray} />
              <SelectDateGroup field="until" array={untilArray} />
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default SearchAdvancedModal;
