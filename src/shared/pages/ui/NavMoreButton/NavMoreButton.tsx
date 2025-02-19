import styles from "./NavMoreButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Dropdown } from "@shared/@common/ui/components";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import { useState } from "react";

interface NavMoreButtonProps {
  className?: string;
  disabled?: boolean;
}

const NavMoreButton = ({ className, disabled = false }: NavMoreButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  // 언어 설정
  const { moreTitle } = useLanguageContent(["components", "NavMoreButton"]);

  const classNames = joinClassNames([styles["nav__more__button"], className]);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => setIsOpen(false);

  return (
    <button
      className={classNames}
      title={moreTitle}
      onClick={() => (isOpen ? onClose() : onOpen())}
    >
      <Icon iconName="moreRounded" iconSize="2xl" bgColor="transparent" />
      <Dropdown name="nav" isOpen={isOpen}>
        하이
      </Dropdown>
    </button>
  );
};

export default NavMoreButton;
