import styles from "./MediaRow.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { IPost } from "@shared/@common/types";
import Medium from "../Medium/Medium";

interface MediaRowProps {
  className?: string;
  row: IPost[];
}

const MediaRow = ({ className, row }: MediaRowProps) => {
  const classNames = joinClassNames([styles["media__row"], className]);

  return (
    <ul className={classNames}>
      {row.map((post, idx) => (
        <Medium key={idx} post={post} />
      ))}
    </ul>
  );
};

export default MediaRow;
