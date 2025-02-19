import { Link } from "react-router-dom";
import styles from "./NavMoreButtonItem.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Icon, Icons } from "@shared/@common/ui/icons";

interface NavMoreButtonItemProps {
  to: string;
  text: string;
  iconName: keyof typeof Icons;
}

const NavMoreButtonItem = ({ to, text, iconName }: NavMoreButtonItemProps) => {
  const classNames = joinClassNames([styles["nav__more__button__item"]]);

  return (
    <li className={classNames}>
      <Link to={to} className={styles["nav__more__button__item__link"]}>
        <Icon iconName={iconName} bgColor="transparent" />
        <p>{text}</p>
      </Link>
    </li>
  );
};

export default NavMoreButtonItem;
