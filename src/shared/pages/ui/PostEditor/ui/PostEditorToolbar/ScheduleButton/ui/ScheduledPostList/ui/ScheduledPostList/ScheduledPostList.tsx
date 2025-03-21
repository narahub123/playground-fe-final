import styles from "./ScheduledPostList.module.css";
import { joinClassNames } from "@shared/@common/utils";
import EmptyUnsentPost from "../../../UnsentPost/ui/EmptyUnsentPost/EmptyUnsentPost";

const ScheduledPostList = () => {
  const scheduledPosts = [];

  const classNames = joinClassNames([styles["scheduled__list"]]);

  return (
    <div className={classNames}>
      {scheduledPosts.length === 0 ? <EmptyUnsentPost /> : <></>}
    </div>
  );
};

export default ScheduledPostList;
