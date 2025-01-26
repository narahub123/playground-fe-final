import styles from "./FlowPage.module.css";
import { joinClassNames } from "@shared/@common/utils";

const FlowPage = () => {
  const classNames = joinClassNames([styles["flow__page"]]);

  return <div className={classNames} />;
};

export default FlowPage;
