import {
  LuX as close,
  LuChevronUp as up,
  LuSearch as search,
  LuChevronsLeft as displayPost,
  LuChevronsRight as closePost,
  LuArrowRight as arrowRight,
  LuArrowLeft as arrowLeft,
  LuCircleCheck as success,
  LuCircleAlert as warning,
} from "react-icons/lu";
import {
  RiEyeLine as eye,
  RiEyeOffLine as eyeoff,
  RiCheckboxBlankLine as rectCheckboxBlank,
  RiCheckboxFill as rectCheckboxFill,
  RiCheckboxBlankCircleLine as roundCheckboxBlank,
  RiCheckboxCircleFill as roundCheckboxFill,
  RiSearchFill as exploreFill,
  RiSearchLine as exploreLine,
  RiNotificationLine as notificationLine,
  RiNotificationFill as notificationFill,
  RiFileList2Line as lists,
} from "react-icons/ri";
import {
  FaEnvelope as envelopFill,
  FaRegEnvelope as envelopLine,
} from "react-icons/fa";
import {
  FaCircleCheck as valid,
  FaCircleXmark as invalid,
  FaRegUser as userLine,
  FaUser as userFill,
} from "react-icons/fa6";
import { TbCameraPlus as uploadImage } from "react-icons/tb";
import {
  CgMoreO as moreRounded,
  CgArrowTopRightR as ads,
} from "react-icons/cg";
import { GoHome as homeLine, GoHomeFill as homeFill } from "react-icons/go";
import { HiOutlineBookmark as bookmarks } from "react-icons/hi";
import { PiMoney as monetization } from "react-icons/pi";
import { FiSettings as settings } from "react-icons/fi";

const Icons = {
  close, // 창닫기
  wrongName: close, // 잘못된 아이콘 이름을 입력한 경우
  eye, // 비밀번호 보이기
  eyeoff, // 비밀번호 숨기기
  up, // 드롭다운 열기
  search, // 검색 아이콘
  valid, // 유효성 통과
  invalid, // 유효성 실패
  displayPost, // 이미지가 포함된 포스트 표기
  closePost, // 이미지가 포함된 포스트 닫기
  arrowRight, // 다음 사진
  arrowLeft, // 이전 사진
  uploadImage, // 이미지 업로드
  rectCheckboxBlank,
  rectCheckboxFill,
  roundCheckboxBlank,
  roundCheckboxFill,
  success,
  warning,
  exploreFill,
  exploreLine,
  moreRounded,
  homeLine,
  homeFill,
  notificationLine,
  notificationFill,
  envelopLine,
  envelopFill,
  userLine,
  userFill,
  lists, // 리스트 아이콘
  bookmarks, // 북마크 아이콘
  monetization, // 수익 창출 아이콘
  ads, // 광고 아이콘
  settings, // 설정 아이콘
};

export default Icons;
