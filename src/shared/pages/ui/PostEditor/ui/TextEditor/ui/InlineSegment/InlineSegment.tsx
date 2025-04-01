import PlainSegment from "../PlainSegment/PlainSegment";
import styles from "./InlineSegment.module.css";

interface InlineSegmentProps {
  text: string;
  row: number;
  col: number;
}

const InlineSegment = ({ text, row, col }: InlineSegmentProps) => {
  return (
    <span className={styles["inline__segment"]}>
      <PlainSegment text={text} row={row} col={col} />
    </span>
  );
};

export default InlineSegment;
