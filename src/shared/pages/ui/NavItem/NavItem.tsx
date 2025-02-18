import styles from "./NavItem.module.css";
import { NavLink } from "react-router-dom";
import { Icon, Icons } from "@shared/@common/ui/icons";
import CountBadge from "../CountBadge/CountBadge";

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
        <div>
          <Icon
            iconName={isActive ? activeIconName : inactiveIconName}
            iconSize="2xl"
            bgColor="transparent"
          />
          {count && count > 0 && <CountBadge count={count} />}
        </div>
      )}
    </NavLink>
  );
};

export default NavItem;
