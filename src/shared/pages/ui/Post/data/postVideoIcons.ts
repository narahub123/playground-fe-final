import { IoMdPause as pause } from "react-icons/io";
import { IoMdPlay as play } from "react-icons/io";
import {
  LuSettings as settings,
  LuArrowLeft as backward,
} from "react-icons/lu";
import { VscUnmute as unmute } from "react-icons/vsc";
import { PiArrowSquareOutLight as pip } from "react-icons/pi";
import { CgArrowsExpandRight as openFullscreen } from "react-icons/cg";
import { MdCloseFullscreen as closeFullscreen } from "react-icons/md";
import { GoPlay as speed } from "react-icons/go";
import { BiBarChart as quality } from "react-icons/bi";
import {
  GoCircle as unselect,
  GoCheckCircleFill as select,
} from "react-icons/go";
import {
  IoVolumeMuteOutline as mute,
  IoVolumeHighOutline as high,
  IoVolumeMediumOutline as medium,
  IoVolumeLowOutline as low,
  IoVolumeOffOutline as off,
} from "react-icons/io5";

const postVideoIcons = {
  pause,
  play,
  mute,
  high,
  medium,
  low,
  off,
  unmute,
  pip,
  openFullscreen,
  closeFullscreen,
  settings,
  speed,
  quality,
  select,
  unselect,
  backward,
};

export default postVideoIcons;
