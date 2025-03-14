import styles from "./Segment.module.css";
import { ISegmentProps } from "@shared/pages/ui/PostEditor/ui/TextEditor";

const Segment = ({ row, col, text }: ISegmentProps) => {
  return (
    <span className={styles["segment"]} data-offset={`${row}-${col}`}>
      {text ? <span data-text={true}>{text}</span> : <br data-text={true} />}
    </span>
  );
};

export default Segment;
