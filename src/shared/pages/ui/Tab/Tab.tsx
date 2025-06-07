import { ITabItem } from "@shared/pages/types";
import styles from "./Tab.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Text } from "@shared/@common/ui/components";
import { Link } from "react-router-dom";

interface TabProps {
  className?: string;
  tab: ITabItem;
  isActive: boolean;
}

const Tab = ({ className, tab, isActive }: TabProps) => {
  const classNames = joinClassNames([
    styles["tab"],
    isActive ? styles["tab--active"] : styles["tab--inactive"],
    className,
  ]);

  return (
    <div role="presentation" className={classNames}>
      <Link role="tab" className={styles["tab__link"]} to={tab.to}>
        <div className={styles["tab__container"]}>
          <div className={styles["tab__wrapper"]}>
            <Text>{tab.text}</Text>
            {isActive && <div className={styles["tab__indicator"]} />}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Tab;
