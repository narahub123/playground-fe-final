import {
  selectAutoCompleteList,
  useSearchContext,
} from "@features/explore/models";
import styles from "./AutoCompleteList.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import AutoCompleteKeyword from "../AutoCompleteKeyword/AutoCompleteKeyword";
import { Text } from "@shared/@common/ui/components";
import AutoCompleteAccount from "../AutoCompleteAccount/AutoCompleteAccount";
import { useEffect } from "react";

interface AutoCompleteListProps {
  className?: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AutoCompleteList = ({
  className,
  isOpen,
  setIsOpen,
}: AutoCompleteListProps) => {
  const classNames = joinClassNames([styles["autocomplete__list"], className]);
  const { keywordSuggestions, accountSuggestions } = useSelector(
    selectAutoCompleteList
  );

  const { keyword } = useSearchContext();

  useEffect(() => {
    if (!isOpen) return;
  }, [isOpen]);

  return (
    <div className={classNames}>
      <div className={styles["keyword__list"]}>
        {keywordSuggestions.length > 0 ? (
          keywordSuggestions.map((keyword) => (
            <AutoCompleteKeyword
              key={keyword}
              option={keyword}
              setIsOpen={setIsOpen}
            />
          ))
        ) : (
          <div style={{ padding: "12px 16px" }}>
            <Text>{`"${keyword}" 검색`}</Text>
          </div>
        )}
      </div>
      <div className={styles["account__list"]}>
        {accountSuggestions.map((user) => (
          <AutoCompleteAccount key={user.userId} setIsOpen={setIsOpen} />
        ))}
      </div>
    </div>
  );
};

export default AutoCompleteList;
