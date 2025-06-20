import styles from "./NavMoreButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Dropdown, Text } from "@shared/@common/ui/components";
import { Icon, Icons } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import { useCallback, useEffect, useRef, useState } from "react";
import NavMoreButtonItem from "./NavMoreButtonItem/NavMoreButtonItem";
import { PRIMARY_LINK } from "@shared/@common/constants";

interface NavMoreButtonProps {
  className?: string;
}

const NavMoreButton = ({ className }: NavMoreButtonProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  // container의 위치 저장
  const [rect, setRect] = useState<{
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  }>({});

  // 유저 아이디 : 나중에 가져오기 할 것
  const userId = "test1234";

  // 언어 설정
  const { moreTitle, itemTexts } = useLanguageContent([
    "components",
    "NavMoreButton",
  ]);
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

  const navLinks = {
    lists: `/${userId}/lists`,
    bookmarks: `/i/bookmarks`,
    monetization: `/i/monetization`,
    ads: `/i/ads`,
    settings: PRIMARY_LINK.SETTINGS,
  };

  const navItems = ["lists", "bookmarks", "monetization", "ads", "settings"];

  return (
    <div
      className={styles["nav__more__button__container"]}
      onClick={() => (isOpen ? onClose() : onOpen())}
      ref={containerRef}
    >
      <button title={moreTitle} className={classNames} ref={buttonRef}>
        <Icon iconName="moreRounded" iconSize="2xl" bgColor="transparent" />
        <Text className={styles["nav__more__button__text"]}>{moreTitle}</Text>

        <Dropdown
          name="nav"
          isOpen={isOpen}
          bottom={
            rect.bottom && window.innerHeight > rect.bottom
              ? window.innerHeight - rect.bottom
              : 0
          }
          left={rect.left}
          onClose={onClose}
          lastClickedRef={buttonRef}
        >
          {navItems.map((item) => (
            <NavMoreButtonItem
              to={navLinks[item as keyof typeof navLinks]}
              text={itemTexts[item]}
              iconName={item as keyof typeof Icons}
              key={item}
            />
          ))}
        </Dropdown>
      </button>
    </div>
  );
};

export default NavMoreButton;
