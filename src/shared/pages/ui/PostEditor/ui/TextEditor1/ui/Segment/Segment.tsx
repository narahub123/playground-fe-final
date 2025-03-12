import styles from "./Segment.module.css";

interface SegmentProps {
  row?: number;
  col?: number;
}

const Segment = ({ row = 0, col = 0 }: SegmentProps) => {
  return (
    <span className={styles["segment"]} data-offset={`${row}-${col}`}>
      <br data-text={true} />
    </span>
  );
};

export default Segment;
