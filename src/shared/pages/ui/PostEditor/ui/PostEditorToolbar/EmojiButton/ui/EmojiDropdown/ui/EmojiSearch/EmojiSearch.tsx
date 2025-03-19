import styles from "./EmojiSearch.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import { useState } from "react";

interface EmojiSearchProps {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const EmojiSearch = ({ keyword, setKeyword }: EmojiSearchProps) => {
  // 언어 설정
  const { ph } = useLanguageContent(["components", "EmojiSearch"]);

  const [isFocused, setIsFocused] = useState(false);

  const classNames = joinClassNames([
    styles["emoji__search"],
    isFocused
      ? styles["emoji__search--focused"]
      : styles["emoji__search--unfocused"],
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setKeyword(value);
  };

  const clearKeyword = () => {
    setKeyword("");
  };

  return (
    <div className={classNames}>
      <Icon iconName="exploreLine" aria-hidden={true} />
      <input
        type="text"
        className={styles["emoji__search__field"]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={ph}
        onChange={handleChange}
        value={keyword}
      />
      <Icon
        iconName="close"
        onClick={clearKeyword}
        iconColor="white"
        bgColor="black"
        bgSize="xs"
        className={styles["emoji__search__clear__icon"]}
      />
    </div>
  );
};

export default EmojiSearch;
