import styles from "./Segment.module.css";
import { ISegmentProps } from "@shared/pages/ui/PostEditor/ui/TextEditor";

const Segment = ({ row = 0, col = 0, text }: ISegmentProps) => {
  return (
    <span className={styles["segment"]} data-offset={`${row}-${col}`}>
      {text && text.length > 0 ? text : <br data-text={true} />}
    </span>
  );
};

export default Segment;
