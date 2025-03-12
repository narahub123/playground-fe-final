import styles from "./Line.module.css";
import { ILine } from "@shared/pages/ui/PostEditor/ui/TextEditor";
import {
  InlineSegment,
  Segment,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";
const Line = ({ row = 0, segments = [] }: ILine) => {
  return (
    <div className={styles["line"]} data-offset={row}>
      {segments.length > 0 ? (
        segments.map((segment, index) => {
          if (segment.text === "plain") {
            return <Segment row={row} col={index} text={segment.text} />;
          } else if (segment.type === "inline") {
            return <InlineSegment row={row} col={index} text={segment.text} />;
          }
        })
      ) : (
        <Segment />
      )}
    </div>
  );
};

export default Line;
