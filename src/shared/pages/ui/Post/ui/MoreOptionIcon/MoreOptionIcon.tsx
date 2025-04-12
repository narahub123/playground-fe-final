import styles from "./MoreOptionIcon.module.css";
import { joinClassNames } from "@shared/@common/utils";
import {
  LuUserPlus as following,
  LuUserX as unfollowing,
  LuListPlus as list,
} from "react-icons/lu";
import { GoMute as mute, GoUnmute as unmute } from "react-icons/go";
import { CgBlock as block, CgUnblock as unblock } from "react-icons/cg";
import { BiBarChart as view } from "react-icons/bi";
import { ImEmbed2 as embed } from "react-icons/im";
import { FiFlag as report } from "react-icons/fi";
import { CiBullhorn as groupNote } from "react-icons/ci";
import { MoreOptionType } from "@shared/pages/ui/Post";
import { IconType } from "react-icons";

interface MoreOptionIconProps {
  className?: string;
  option: MoreOptionType;
  toggle?: boolean;
}

const MoreOptionIcon = ({ className, option, toggle }: MoreOptionIconProps) => {
  const classNames = joinClassNames([styles["more__option__icon"], className]);

  const icon: Record<MoreOptionType, IconType> = {
    following: toggle && toggle ? unfollowing : following,
    mute: toggle && toggle ? unmute : mute,
    block: toggle && toggle ? unblock : block,
    list,
    view,
    embed,
    report,
    groupNote,
  };

  const Comp = icon[option];

  return (
    <div className={classNames}>
      <Comp aria-hidden={true} className={styles["icon"]} />
    </div>
  );
};

export default MoreOptionIcon;
