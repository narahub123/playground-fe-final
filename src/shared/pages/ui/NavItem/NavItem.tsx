import styles from "./NavItem.module.css";
import { NavLink } from "react-router-dom";
import { Icon, Icons } from "@shared/@common/ui/icons";
import CountBadge from "../CountBadge/CountBadge";
import { Text } from "@shared/@common/ui/components";

interface NavItemProps {
  to: string;
  activeIconName: keyof typeof Icons;
  inactiveIconName: keyof typeof Icons;
  title: string;
  count?: number;
}

const NavItem = ({
  to,
  activeIconName,
  inactiveIconName,
  title,
  count,
}: NavItemProps) => {
  return (
    <NavLink to={to} className={styles[`nav__item`]} title={title}>
      {({ isActive }) => (
        <div className={styles[`nav__item__wrapper`]}>
          <Icon
            iconName={isActive ? activeIconName : inactiveIconName}
            iconSize="2xl"
            bgColor="transparent"
          />
          {count && count > 0 && (
            <CountBadge count={count} className={styles[`nav__item__badge`]} />
          )}
          <Text className={styles["nav__item__text"]}>{title}</Text>
        </div>
      )}
    </NavLink>
  );
};

export default NavItem;
