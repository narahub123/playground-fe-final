import styles from "./CommentSortDropdown.module.css";
import { joinClassNames } from "@shared/@common/utils";
import {
  useClickOutside,
  useFocusTrap,
  useLanguageContent,
} from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { IoMdCheckmark } from "react-icons/io";
import { CommentSortType } from "@features/post-page";
import { useRef, useState } from "react";

interface CommentSortDropdownProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const CommentSortDropdown = ({
  className,
  isOpen,
  onClose,
}: CommentSortDropdownProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // 언어 설정
  const { header, sorts } = useLanguageContent([
    "postpage",
    "CommentSortDropdown",
  ]);

  const [sort, setSort] = useState<CommentSortType>("relevant");

  useFocusTrap({ containerRef });
  useClickOutside({ containerRef, toggle: onClose });

  const classNames = joinClassNames([
    styles["comment__sort__dropdown"],
    className,
  ]);

  const changeSort = (sort: CommentSortType) => {
    setSort(sort);
  };

  if (!isOpen) return null;

  return (
    <div className={classNames} ref={containerRef}>
      <div className={styles["dropdown__header"]}>
        <Text>{header}</Text>
      </div>
      <div className={styles["dropdown__list"]}>
        {Object.keys(sorts).map((s) => {
          const value = sorts[s as CommentSortType];
          return (
            <button
              className={styles["dropdown__item"]}
              key={s}
              onClick={() => changeSort(s as CommentSortType)}
              tabIndex={0}
            >
              <Text>{value}</Text>
              {sort === s && <IoMdCheckmark className={styles["check"]} />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CommentSortDropdown;
