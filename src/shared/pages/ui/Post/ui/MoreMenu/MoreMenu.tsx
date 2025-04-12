import styles from "./MoreMenu.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface MoreMenuProps {
  className?: string;
}

const MoreMenu = ({ className }: MoreMenuProps) => {
  const classNames = joinClassNames([styles["more__menu"], className]);

  return <div className={classNames}>MoreMenu</div>;
};

export default MoreMenu;
