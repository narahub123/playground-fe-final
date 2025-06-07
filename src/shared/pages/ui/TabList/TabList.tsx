import styles from "./TabList.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { ITabItem } from "@shared/pages/types";
import { Tab } from "@shared/pages";

interface TabListProps {
  className?: string;
  list: ITabItem[];
  curTab: string;
}

const TabList = ({ className, list, curTab }: TabListProps) => {
  const classNames = joinClassNames([styles["tablist"], className]);

  return (
    <div className={classNames}>
      {list.map((tab) => (
        <Tab tab={tab} key={tab.value} isActive={tab.value === curTab} />
      ))}
    </div>
  );
};

export default TabList;
