import { getParalleModal } from "@shared/@common/models/selectors";
import styles from "./SearchAdvancedModal.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Modal, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch } from "@app/store";
import { onParallelModalClose } from "@shared/@common/models/slices/modalSlice";
import { Icon } from "@shared/@common/ui/icons";
import {
  selectAdvancedFilter,
  selectSearchAdvanced,
  setAllKeywords,
  setAnyKeywords,
  setExcludeKeywords,
  setFilterComments,
  setFilterLinks,
  setHashtags,
  setKeyword,
  setPhrase,
  toggleFilterComments,
  toggleFilterLinks,
} from "@features/explore";
import {
  accountArray,
  engagementArray,
  InputSearchAdvanced,
  keywordArray,
} from "@features/explore/ui/SearchAdvancedModal";
import { useEffect } from "react";
import { InputNumber, RadioGroup, ToggleButton } from "@shared/pages";

interface SearchAdvancedModalProps {
  className?: string;
}

const SearchAdvancedModal = ({ className }: SearchAdvancedModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useSearchParams();
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

  const { keywords, engagement } = useSelector(selectSearchAdvanced);

  const { allKeywords, phrase, anyKeywords, excludeKeywords, hashtags } =
    keywords;

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

  useEffect(() => {
    const keyword = query.get("q");

    if (!keyword) return;

    const extractPhrase = [...keyword.matchAll(/"([^"]+)"/g)]
      ?.map((m) => m[1])
      .join(" ");

    const extractAnyWords = [
      ...keyword.matchAll(/\(([^#][^)]*?\sOR\s[^)]*?)\)/g),
    ][0]?.[1]
      .split(/\s+OR\s+/)
      .join(" ");

    const extractHashtags = [
      ...keyword.matchAll(/\(\s*(#[^\s()#]+(?:\s+OR\s+#[^\s()#]+)*)\s*\)/g),
    ][0]?.[1]
      .split(/\s+OR\s+/)
      .map((s) => s.trim().slice(1))
      .join(" ");

    const extractExcludedWords = [...keyword.matchAll(/-\S+/g)]
      ?.map((m) => m[0].slice(1))
      .join(" ");

    // 모든 특수 표현 제거
    const cleaned = keyword
      .replace(/"[^"]+"/g, "") // phaze
      .replace(/\([^)]*?\)/g, "") // any + hashtags
      .replace(/-\S+/g, ""); // exclude

    const extractAllWords = cleaned
      ?.trim()
      .split(/\s+/)
      .filter(Boolean)
      .join(" ");

    dispatch(setAllKeywords(extractAllWords));
    dispatch(setPhrase(extractPhrase));
    dispatch(setAnyKeywords(extractAnyWords));
    dispatch(setExcludeKeywords(extractExcludedWords));
    dispatch(setHashtags(extractHashtags));
  }, [query]);

  const classNames = joinClassNames([
    styles["search__advanced__modal"],
    className,
  ]);

  const onClose = () => {
    dispatch(onParallelModalClose("search_advanced"));
    navigate(-1);
  };

  const handleSubmit = () => {
    const modifiedPhrase = phrase ? `"${phrase}"` : undefined;

    const splitAnyWords = anyKeywords.split(" ");

    const modifiedAnyWords = anyKeywords
      ? `(${splitAnyWords.join(" OR ")})`
      : undefined;

    const splitExcludeWords = excludeKeywords.split(" ");

    const modifiedExcludeWords = excludeKeywords
      ? splitExcludeWords.map((word) => "-" + word).join(" ")
      : undefined;

    const splitHashtag = hashtags.split(" ");

    const addSharp = splitHashtag.map((hashtag) => "#" + hashtag).join(" OR ");

    const modifiedHashtag = hashtags ? `(${addSharp})` : undefined;

    const searchArray = [
      allKeywords || undefined,
      modifiedPhrase,
      modifiedAnyWords,
      modifiedExcludeWords,
      modifiedHashtag,
    ];

    const search = searchArray.join(" ");

    console.log(search);

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
            <div className={styles["section"]}></div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default SearchAdvancedModal;
