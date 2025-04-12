import styles from "./MoreButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import { useLayoutEffect, useRef, useState } from "react";
import { IRect } from "@shared/pages/ui/Post";

interface MoreButtonProps {
  className?: string;
}

const MoreButton = ({ className }: MoreButtonProps) => {
  // 언어 설정
  const { title } = useLanguageContent(["post", "MoreButton"]);
  // 드롭 다운 관련 상태
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [rect, setRect] = useState<IRect>();

  // 드롭다운 위치 지정
  useLayoutEffect(() => {
    if (!wrapperRef.current) return;

    const getParentPosition = () => {
      if (!wrapperRef.current) return;

      const parent = wrapperRef.current;

      const { top, left, right } = parent.getBoundingClientRect();

      setRect({ top, left, right });
    };

    getParentPosition();

    window.addEventListener("resize", getParentPosition);
    window.addEventListener("scroll", getParentPosition);

    return () => {
      window.removeEventListener("resize", getParentPosition);
      window.removeEventListener("scroll", getParentPosition);
    };
  }, []);

  const classNames = joinClassNames([styles["more__button"], className]);

  const handleClick = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles["more__button__wrapper"]} ref={wrapperRef}>
      <Icon
        className={classNames}
        iconName="more"
        data-title={title}
        onClick={handleClick}
      />
    </div>
  );
};

export default MoreButton;
