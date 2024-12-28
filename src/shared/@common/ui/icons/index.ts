import {
  LuX as close,
  LuChevronUp as up,
  LuSearch as search,
} from "react-icons/lu";
import { RiEyeLine as eye, RiEyeOffLine as eyeoff } from "react-icons/ri";
import {
  FaCircleCheck as valid,
  FaCircleXmark as invalid,
} from "react-icons/fa6";

const Icons = {
  close, // 창닫기
  wrongName: close, // 잘못된 아이콘 이름을 입력한 경우
  eye, // 비밀번호 보이기
  eyeoff, // 비밀번호 숨기기
  up, // 드롭다운 열기
  search, // 검색 아이콘
  valid, // 유효성 통과
  invalid, // 유효성 실패
};

export default Icons;
