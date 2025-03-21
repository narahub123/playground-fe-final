import EmptyUnsentPost from "../../../UnsentPost/ui/EmptyUnsentPost/EmptyUnsentPost";
import styles from "./ScheduleDraftList.module.css";
import { joinClassNames } from "@shared/@common/utils";

const ScheduleDraftList = () => {
  const classNames = joinClassNames([styles["schedule__draft__list"]]);

  const drafts = [];

  return (
    <div className={classNames}>
      {drafts.length === 0 ? <EmptyUnsentPost /> : <></>}
    </div>
  );
};

export default ScheduleDraftList;
