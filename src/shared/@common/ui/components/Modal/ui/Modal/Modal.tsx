import ModalBody from "../ModalBody/ModalBody";
import ModalCloseButton from "../ModalCloseButton/ModalCloseButton";
import ModalContainer from "../ModalContainer/ModalContainer";
import ModalContent from "../ModalContent/ModalContent";
import ModalFooter from "../ModalFooter/ModalFooter";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalIndicator from "../ModalIndicator/ModalIndicator";
import ModalMain from "../ModalMain/ModalMain";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

/**
 * 모달 관련 컴포넌트들을 통합한 객체입니다.
 * 각 컴포넌트는 모달을 구성하는 부분을 담당하며, 필요한 위치에 따라 사용됩니다.
 *
 * - `ModalMain`: 모달의 타겟 컴포넌트
 * - `ModalOverlay`: 모달의 배경 오버레이
 * - `ModalContainer`: 모달을 감싸는 컨테이너
 * - `ModalCloseButton`: 모달을 닫는 버튼
 * - `ModalContent`: 모달의 내용
 * - `ModalHeader`: 모달의 헤더 부분
 * - `ModalIndicator`: 모달의 페이지 지시자
 * - `ModalBody`: 모달의 본문
 * - `ModalFooter`: 모달의 푸터
 *
 */
const Modal = Object.assign(ModalMain, {
  ModalOverlay, // 오버레이
  ModalContainer, // 모달 컨테이너
  ModalCloseButton, // 모달 닫기 버튼
  ModalContent, // 모달 내용
  ModalHeader, // 모달 헤더 : body, footer가 들어갈 수 없음
  ModalIndicator, // 모달 페이지 지시자
  ModalBody, // 모달 바디 : header, footer가 들어갈 수 없음
  ModalFooter, // 모달 푸터 : header, body가 들어갈 수 없음
});

export default Modal;
