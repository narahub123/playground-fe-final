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
  LuKeyRound as keyIcon,
  LuSmartphoneNfc as notificationPreferencesIcon,
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
  RiLock2Line as securityIcon,
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
import {
  GoHome as homeLine,
  GoHomeFill as homeFill,
  GoArrowSwitch as connectedAccountsIcon,
} from "react-icons/go";
import {
  HiOutlineBookmark as bookmarks,
  HiOutlineDownload as downloadIcon,
} from "react-icons/hi";
import {
  PiMoney as monetization,
  PiPencilSimpleLine as myPostsIcon,
} from "react-icons/pi";
import {
  FiSettings as settings,
  FiMoreHorizontal as more,
} from "react-icons/fi";
import {
  LiaHeartBrokenSolid as deactivateIcon,
  LiaUsersSolid as audienceIcon,
} from "react-icons/lia";
import {
  TfiLayers as appsIcon,
  TfiLocationPin as pinIcon,
  TfiWorld as languageIcon,
} from "react-icons/tfi";
import { IoPeopleOutline as delegateIcon } from "react-icons/io5";
import {
  BsCardText as contentIcon,
  BsArrowUpRightSquare as adsPreferencesIcon,
  BsSliders2 as notificationFiltersIcon,
  BsEyeSlash as accessibilityIcon,
  BsBrush as displayIcon,
} from "react-icons/bs";
import {
  BiVolumeMute as muteIcon,
  BiBarChart as dataIcon,
} from "react-icons/bi";
import { MdOutlinePersonSearch as findPersonIcon } from "react-icons/md";
import { IoCloseCircleSharp as closeFill } from "react-icons/io5";

const Icons = {
  close, // 창닫기
  closeFill, //
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
  more, // 더보기
  keyIcon, // 비밀변경 아이콘
  downloadIcon, // 다운로드 아이콘
  deactivateIcon, // 비활성화 아이콘
  securityIcon, // 보안 아이콘
  appsIcon, // 앱과 세션 아이콘
  connectedAccountsIcon, // 연결된 계정 아이콘
  delegateIcon, // 위임 아이콘
  audienceIcon, // 오디언스 아이콘
  myPostsIcon, // 내 게시물 아이콘
  contentIcon, // 표시되는 컨텐츠 아이콘
  muteIcon, // 뮤트 아이콘
  findPersonIcon, // 계정 찾기 아이콘
  adsPreferencesIcon, // 광고 설정 아이콘
  pinIcon, // 위치 설정 아이콘
  notificationFiltersIcon, // 알림 필터 아이콘
  notificationPreferencesIcon, // 알림 환경설정 아이콘
  accessibilityIcon, // 접근성 아이콘
  displayIcon, // 표시 아이콘
  languageIcon, // 언어 아이콘
  dataIcon, // 데이터 사용량 아이콘
};

export default Icons;
