import styles from "./Main.module.css";
import { useClickOutside } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useRef } from "react";
import Progressbar from "../Progressbar/Progressbar";
import HashtagOption from "../HashtagOption/HashtagOption";
import MentionOption from "../MentionOption/MentionOption";
import { IAccount } from "@shared/@common/types";

interface MainProps {
  onClose: () => void;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  isLoading: boolean;
  curText: string;
  curIndex: number;
  options: (string | IAccount)[];
  onClick: (index?: number) => void;
}

const Main = ({
  onClose,
  top,
  bottom,
  left,
  right,
  isLoading,
  curText,
  curIndex,
  options,
  onClick,
}: MainProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const classNames = joinClassNames([styles["inline__dropdown"]]);

  // 외부 클릭 시 창 닫기
  useClickOutside({ containerRef, toggle: onClose });

  return (
    <div
      className={classNames}
      style={{ top, bottom, left, right }}
      ref={containerRef}
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          onClose();
        }
      }}
    >
      <Progressbar curText={curText} isLoading={isLoading} />
      <ul
        className={styles["inline__dropdown__list"]}
        style={{
          maxHeight:
            bottom && window.innerHeight > bottom
              ? window.innerHeight - bottom
              : window.innerHeight,
          overflowY: "auto",
        }}
      >
        {options.map((option, index) => {
          if (typeof option === "string") {
            return (
              <HashtagOption
                key={index}
                option={option}
                curText={curText}
                index={index}
                selected={index === curIndex}
                onClick={onClick}
              />
            );
          } else {
            return (
              <MentionOption
                key={index}
                account={option}
                index={index}
                selected={index === curIndex}
                onClick={onClick}
              />
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Main;
