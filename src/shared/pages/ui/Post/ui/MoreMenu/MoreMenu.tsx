import styles from "./MoreMenu.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { MoreButton } from "@shared/pages/ui/Post";
import { useRef } from "react";

interface MoreMenuProps {
  className?: string;
}

const MoreMenu = ({ className }: MoreMenuProps) => {
  const classNames = joinClassNames([styles["more__menu"], className]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={classNames}>
      <MoreButton ref={buttonRef} />
    </div>
  );
};

export default MoreMenu;
