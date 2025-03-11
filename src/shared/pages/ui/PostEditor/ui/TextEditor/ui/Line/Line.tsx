import styles from "./Line.module.css";
import { ReactNode } from "react";
import { Segment } from "@shared/pages/ui/PostEditor/ui/TextEditor/ui";

interface LineProps {
  row?: number;
  children?: ReactNode;
}

const Line = ({ row = 0, children }: LineProps) => {
  return (
    <div className={styles["line"]} data-offset={row}>
      {children ? children : <Segment row={row} />}
    </div>
  );
};

export default Line;
