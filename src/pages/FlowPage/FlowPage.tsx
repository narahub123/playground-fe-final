import { FlowModal } from "@shared/flow/ui";
import styles from "./FlowPage.module.css";
import { joinClassNames } from "@shared/@common/utils";

const FlowPage = () => {
  const classNames = joinClassNames([styles["flow__page"]]);

  return (
    <div className={classNames}>
      <FlowModal />
    </div>
  );
};

export default FlowPage;
