import styles from "./YearButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface YearButtonProps {
  className?: string;
  year: number;
  setOpenedAccordian: React.Dispatch<React.SetStateAction<number>>;
}

const YearButton = ({
  className,
  year,
  setOpenedAccordian,
}: YearButtonProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "YearButton"]);

  const classNames = joinClassNames([styles["year__button"], className]);

  const handleFocus = () => {
    setOpenedAccordian((prev) => {
      if (prev !== year) return year;
      else return prev;
    });
  };

  return (
    <button className={classNames} onFocus={handleFocus}>
      {year}
    </button>
  );
};

export default YearButton;
