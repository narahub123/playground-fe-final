import styles from "./UnsentPostTab.module.css";
import { Link, useLocation } from "react-router-dom";
import { IUnsentPostTab } from "../../types";
import { joinClassNames } from "@shared/@common/utils";
import { Text } from "@shared/@common/ui/components";

interface UnsentPostTabProps {
  tab: IUnsentPostTab;
}

const UnsentPostTab = ({ tab }: UnsentPostTabProps) => {
  const { pathname } = useLocation();
  const selectedCond = pathname.includes(tab.path);
  const classNames = joinClassNames([styles["unsent__post__tab"]]);

  return (
    <Link to={tab.path} className={classNames}>
      <div
        className={joinClassNames([
          styles["wrapper"],
          selectedCond ? styles["selected"] : styles["unselected"],
        ])}
      >
        <Text>{tab.text}</Text>
      </div>
    </Link>
  );
};

export default UnsentPostTab;
