import {
  LuX as close,
  LuChevronUp as up,
  LuSearch as search,
  LuChevronsLeft as displayPost,
  LuChevronsRight as closePost,
  LuArrowRight as arrowRight,
  LuArrowLeft as arrowLeft,
} from "react-icons/lu";
import {
  RiEyeLine as eye,
  RiEyeOffLine as eyeoff,
  RiCheckboxBlankLine as rectCheckboxBlank,
  RiCheckboxFill as rectCheckboxFill,
  RiCheckboxBlankCircleLine as roundCheckboxBlank,
  RiCheckboxCircleFill as roundCheckboxFill,
} from "react-icons/ri";
import {
  FaCircleCheck as valid,
  FaCircleXmark as invalid,
} from "react-icons/fa6";
import { TbCameraPlus as uploadImage } from "react-icons/tb";

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
};

export default Icons;
