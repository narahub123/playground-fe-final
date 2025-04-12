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
import { RiDeleteBinLine as deleteIcon } from "react-icons/ri";
import { BsPin as main } from "react-icons/bs";
import { IoChatbubbleOutline as replyOption } from "react-icons/io5";

import { MoreMyOptionType, MoreOptionType } from "@shared/pages/ui/Post";

import { IconType } from "react-icons";

interface MoreOptionIconProps {
  className?: string;
  option: MoreOptionType | MoreMyOptionType;
  toggle?: boolean;
}

const MoreOptionIcon = ({ className, option, toggle }: MoreOptionIconProps) => {
  const classNames = joinClassNames([styles["more__option__icon"], className]);

  const icon: Record<MoreOptionType | MoreMyOptionType, IconType> = {
    following: toggle && toggle ? unfollowing : following,
    mute: toggle && toggle ? unmute : mute,
    block: toggle && toggle ? unblock : block,
    list,
    view,
    embed,
    report,
    groupNote,
    analytics: view,
    delete: deleteIcon,
    main,
    replyOption,
  };

  const Comp = icon[option];

  return (
    <div className={classNames}>
      <Comp aria-hidden={true} className={styles["icon"]} />
    </div>
  );
};

export default MoreOptionIcon;
