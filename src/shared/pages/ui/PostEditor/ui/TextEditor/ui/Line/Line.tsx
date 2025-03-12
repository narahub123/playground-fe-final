import styles from "./Line.module.css";
import { ILine } from "@shared/pages/ui/PostEditor/ui/TextEditor";
import {
  InlineSegment,
  Segment,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";
import { forwardRef } from "react";
const Line = forwardRef<HTMLDivElement, ILine>(
  ({ row = 0, segments = [] }, ref) => {
    return (
      <div className={styles["line"]} data-offset={row} ref={ref}>
        {segments.length > 0 ? (
          segments.map((segment, index) => {
            if (segment.type === "plain") {
              return (
                <Segment
                  row={row}
                  col={index}
                  text={segment.text}
                  key={index}
                />
              );
            } else if (segment.type === "inline") {
              return (
                <InlineSegment
                  row={row}
                  col={index}
                  text={segment.text}
                  key={index}
                />
              );
            }
          })
        ) : (
          <Segment />
        )}
      </div>
    );
  }
);

export default Line;
