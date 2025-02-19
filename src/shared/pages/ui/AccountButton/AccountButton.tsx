import { defaultProfileImage } from "@shared/@common/assets";
import styles from "./AccountButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useCallback, useEffect, useRef, useState } from "react";
import { Dropdown } from "@shared/@common/ui/components";

interface AccountButtonProps {
  className?: string;
  disabled?: boolean;
}

const AccountButton = ({ className, disabled = false }: AccountButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [rect, setRect] = useState<{
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    height: number;
  }>({ height: 0 });

  const updateRect = useCallback(() => {
    if (!buttonRef.current) return;

    const { top, bottom, left, right, height } =
      buttonRef.current.getBoundingClientRect();

    setRect({
      top,
      bottom,
      left,
      right,
      height,
    });
  }, []);

  // 부모 요소의 위치 정보 업데이트
  useEffect(() => {
    updateRect();

    window.addEventListener("resize", updateRect);

    // containerRef.current와 그 상위 부모 요소에서 스크롤 이벤트 리스닝
    let currentElement: HTMLElement | null = buttonRef.current;
    while (currentElement) {
      currentElement.addEventListener("scroll", updateRect);
      currentElement = currentElement.parentElement;
    }

    return () => {
      window.removeEventListener("resize", updateRect);

      // scroll 이벤트 리스너 제거 (상위 요소들을 포함하여)
      currentElement = buttonRef.current;
      while (currentElement) {
        currentElement.removeEventListener("scroll", updateRect);
        currentElement = currentElement.parentElement;
      }
    };
  }, []);

  // 언어 설정
  const { title } = useLanguageContent(["components", "AccountButton"]);

  const classNames = joinClassNames([styles["account__button"], className]);

  return (
    <button
      className={classNames}
      title={title}
      ref={buttonRef}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Dropdown
        name="account"
        isOpen={isOpen}
        onClose={() => {}}
        lastClickedRef={buttonRef}
        left={rect.left}
        bottom={
          rect.bottom && window.innerHeight - rect.bottom + rect.height + 20
        }
        className={styles["account__dropdown"]}
      >
        <p>gkdl dfadfs dfasdf</p>
        <p>gkdl dfadfs dfasdf</p>
        <p>gkdl dfadfs dfasdf</p>
      </Dropdown>
      <img
        src={defaultProfileImage}
        alt=""
        className={styles[`account__button__image`]}
      />
    </button>
  );
};

export default AccountButton;
