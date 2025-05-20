import styles from "./AutoCompleteKeyword.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

interface AutoCompleteKeywordProps {
  className?: string;
  option: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AutoCompleteKeyword = ({
  className,
  option,
  setIsOpen,
}: AutoCompleteKeywordProps) => {
  const classNames = joinClassNames([
    styles["autocomplete__keyword"],
    className,
  ]);
  const navigate = useNavigate();

  const handleSelection = () => {
    setIsOpen(false);
    navigate(`/search?q=${option}&src=typed_query`);
  };

  return (
    <div className={classNames} onClick={() => handleSelection()}>
      <div className={styles["leading__icon"]}>
        <div className={styles["icon__wrapper"]}>
          <LuSearch className={styles["icon"]} />
        </div>
      </div>
      <div className={styles["keyword"]}>{option}</div>
    </div>
  );
};

export default AutoCompleteKeyword;
