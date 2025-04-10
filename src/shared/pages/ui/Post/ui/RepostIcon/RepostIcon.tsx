import { AiOutlineRetweet } from "react-icons/ai";
import styles from "./RepostIcon.module.css";
import { joinClassNames } from "@shared/@common/utils";

const RepostIcon = () => {
  const classNames = joinClassNames([styles["repost__icon"]]);

  return (
    <div className={classNames}>
      <AiOutlineRetweet className={styles["icon"]} aria-hidden={true} />
    </div>
  );
};

export default RepostIcon;
