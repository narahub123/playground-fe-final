import styles from "./InlineSegment.module.css";
import { ISegmentProps } from "@shared/pages/ui/PostEditor/ui/TextEditor";
import { Segment } from "@shared/pages/ui/PostEditor/ui/TextEditor";

const InlineSegment = ({ row, col, text }: ISegmentProps) => {
  return (
    <span className={styles["inline__segment"]}>
      <Segment row={row} col={col} text={text} />
    </span>
  );
};

export default InlineSegment;
