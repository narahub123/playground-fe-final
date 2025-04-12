import styles from "./MoreButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { forwardRef } from "react";
import { IoIosMore } from "react-icons/io";

interface MoreButtonProps {
  className?: string;
  onClick: () => void;
}

const MoreButton = forwardRef<HTMLButtonElement, MoreButtonProps>(
  ({ className, onClick }, ref) => {
    // 언어 설정
    const { title } = useLanguageContent(["post", "MoreButton"]);

    const classNames = joinClassNames([styles["more__button"], className]);

    return (
      <button
        className={classNames}
        ref={ref}
        data-title={title}
        type="button"
        onClick={onClick}
      >
        <IoIosMore className={styles["icon"]} aria-hidden={true} />
      </button>
    );
  }
);

export default MoreButton;
