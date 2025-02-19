import styles from "./NavMoreButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Dropdown } from "@shared/@common/ui/components";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import { useCallback, useEffect, useRef, useState } from "react";

interface NavMoreButtonProps {
  className?: string;
  disabled?: boolean;
}

const NavMoreButton = ({ className, disabled = false }: NavMoreButtonProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  // container의 위치 저장
  const [rect, setRect] = useState<{
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  }>({});

  // 언어 설정
  const { moreTitle } = useLanguageContent(["components", "NavMoreButton"]);
  const classNames = joinClassNames([styles["nav__more__button"], className]);

  // 드롭다운 열기
  const onOpen = () => {
    setIsOpen(true);
  };
  // 드롭다운 닫기
  const onClose = () => setIsOpen(false);

  // 부모 요소의 위치 정보 저장
  const updateRect = useCallback(() => {
    if (!containerRef.current) return;

    const { top, bottom, left, right } =
      containerRef.current.getBoundingClientRect();

    setRect({ top, bottom, right, left });
  }, []);

  // 부모 요소의 위치 정보 업데이트
  useEffect(() => {
    updateRect();

    window.addEventListener("resize", updateRect);

    // containerRef.current와 그 상위 부모 요소에서 스크롤 이벤트 리스닝
    let currentElement: HTMLElement | null = containerRef.current;
    while (currentElement) {
      currentElement.addEventListener("scroll", updateRect);
      currentElement = currentElement.parentElement;
    }

    return () => {
      window.removeEventListener("resize", updateRect);

      // scroll 이벤트 리스너 제거 (상위 요소들을 포함하여)
      currentElement = containerRef.current;
      while (currentElement) {
        currentElement.removeEventListener("scroll", updateRect);
        currentElement = currentElement.parentElement;
      }
    };
  }, []);

  return (
    <div
      className={styles["nav__more__button__container"]}
      onClick={() => (isOpen ? onClose() : onOpen())}
      ref={containerRef}
    >
      <button title={moreTitle} className={classNames}>
        <Icon iconName="moreRounded" iconSize="2xl" bgColor="transparent" />
        <Dropdown
          name="nav"
          isOpen={isOpen}
          bottom={
            rect.bottom && window.innerHeight > rect.bottom
              ? window.innerHeight - rect.bottom
              : 0
          }
          left={rect.left}
        >
          <li>하이1</li>
          <li>하이2</li>
          <li>하이3</li>
          <li>하이4</li>
          <li>하이5</li>
          <li>하이6</li>
          <li>하이7</li>
          <li>하이8</li>
          <li>하이9</li>
          <li>하이10</li>
          <li>하이11</li>
          <li>하이12</li>
        </Dropdown>
      </button>
    </div>
  );
};

export default NavMoreButton;
