import ModalBody from "../ModalBody/ModalBody";
import ModalCloseButton from "../ModalCloseButton/ModalCloseButton";
import ModalContainer from "../ModalContainer/ModalContainer";
import ModalContent from "../ModalContent/ModalContent";
import ModalFooter from "../ModalFooter/ModalFooter";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalPagination from "../ModalPagination/ModalPagination";
import ModalMain from "../ModalMain/ModalMain";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

/**
 * 모달 관련 컴포넌트들을 통합한 객체입니다.
 * 각 컴포넌트는 모달을 구성하는 부분을 담당하며, 필요한 위치에 따라 사용됩니다.
 *
 * - `Main`: 모달의 타겟 컴포넌트
 * - `Overlay`: 모달의 배경 오버레이
 * - `Container`: 모달을 감싸는 컨테이너
 * - `CloseButton`: 모달을 닫는 버튼
 * - `Content`: 모달의 내용
 * - `Header`: 모달의 헤더 부분
 * - `Pagination`: 모달의 페이지 지시자
 * - `Body`: 모달의 본문
 * - `Footer`: 모달의 푸터
 *
 */
const Modal = Object.assign(ModalMain, {
  Overlay: ModalOverlay, // 오버레이
  Container: ModalContainer, // 모달 컨테이너
  CloseButton: ModalCloseButton, // 모달 닫기 버튼
  Content: ModalContent, // 모달 내용
  Header: ModalHeader, // 모달 헤더 : body, footer가 들어갈 수 없음
  Pagination: ModalPagination, // 모달 페이지 지시자
  Body: ModalBody, // 모달 바디 : header, footer가 들어갈 수 없음
  Footer: ModalFooter, // 모달 푸터 : header, body가 들어갈 수 없음
});

export default Modal;
