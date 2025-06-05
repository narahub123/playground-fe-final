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
import InputAllKeywords from "../InputAllKeywords/InputAllKeywords";
import InputPhrase from "../InputPhrase/InputPhrase";
import InputAnyKeywords from "../InputAnyKeywords/InputAnyKeywords";
import InputExcludeKeywords from "../InputExcludeKeywords/InputExcludeKeywords";
import InputHashtags from "../InputHashtags/InputHashtags";
import {
  selectSearchAdvanced,
  setAllKeywords,
  setAnyKeywords,
  setExcludeKeywords,
  setHashtags,
  setKeyword,
  setPhrase,
} from "@features/explore/models";
import { useEffect } from "react";

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
  } = useLanguageContent(["explore", "SearchAdvancedModal"]);

  const { keywords } = useSelector(selectSearchAdvanced);

  const { allKeywords, phrase, anyKeywords, excludeKeywords, hashtags } =
    keywords;

  const isOpen = useSelector(getParalleModal("search_advanced"));

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
              <InputAllKeywords />
              <InputPhrase />
              <InputAnyKeywords />
              <InputExcludeKeywords />
              <InputHashtags />
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
