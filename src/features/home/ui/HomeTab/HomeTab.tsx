import styles from "./HomeTab.module.css";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { Link } from "react-router-dom";

interface HomeTabProps {
  className?: string;
  text: string;
  field: string;
  tabSelection: string;
  onClick: () => void;
}

const HomeTab = ({
  className,
  text,
  field,
  tabSelection,
  onClick,
}: HomeTabProps) => {
  const classNames = joinClassNames([styles["home__tab"], className]);

  const isSelected = field === tabSelection;

  return (
    <Link to="" role="tab" className={classNames} onClick={onClick}>
      <div className={styles["home__tab__text__container"]}>
        <div className={styles["home__tab__text__wrapper"]}>
          <Text className={styles["home__tab__text"]}>{text}</Text>
        </div>
        <div
          className={joinClassNames([
            styles["home__tab__text__border"],
            isSelected
              ? styles["home__tab__text__border--selected"]
              : styles["home__tab__text__border--unselected"],
          ])}
        />
      </div>
    </Link>
  );
};

export default HomeTab;
