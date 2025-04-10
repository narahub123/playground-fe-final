import styles from "./LineConnector.module.css";
import { joinClassNames } from "@shared/@common/utils";

const LineConnector = () => {
  const classNames = joinClassNames([styles["line__connector"]]);

  return (
    <div className={classNames}>
      <div className={styles["line"]} />
    </div>
  );
};

export default LineConnector;
