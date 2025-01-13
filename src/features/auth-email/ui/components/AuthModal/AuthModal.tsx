import { Modal } from "@shared/@common/ui/components";
import { useEffect, useState } from "react";
import { ScreenValidationType } from "@shared/@common/ui/components/Modal/types";
import ScreenPersonalInfo from "../ScreenPersonalInfo/ScreenPersonalInfo";
import ScreenPassword from "../ScreenPassword/ScreenPassword";
import ScreenUserId from "../ScreenUserId/ScreenUserId";
import ScreenProfileImage from "../ScreenProfileImage/ScreenProfileImage";
import ScreenNotifications from "../ScreenNotifications/ScreenNotifications";

/**
 * AuthModalPros는 AuthModal 컴포넌트에 전달되는 속성들을 정의함
 */
interface AuthModalProps {
  /**
   * 모달이 열려 있는지 여부를 결정하는 상태입니다. `true`이면 모달이 열리고, `false`이면 모달이 닫힙니다.
   * @type {boolean}
   */
  isOpen: boolean;
  /**
   * 모달을 닫는 함수입니다. 모달이 닫힐 때 호출됩니다.
   * @type {function}
   */
  onClose?: () => void;
  /**
   * 현재 페이지를 나타내는 값입니다.
   * @type {number}
   */
}

/**
 * AuthModal 컴포넌트
 * 사용자 인증과 관련된 모달 컴포넌트로, 여러 페이지를 관리할 수 있습니다.
 *
 * @param {AuthModalProps} props - AuthModal 컴포넌트에 전달되는 속성들.
 * @returns {JSX.Element} AuthModal 컴포넌트 렌더링 결과.
 */
const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [curPage, setCurPage] = useState(4);
  // 유효성 상태를 관리하는 상태 훅 정의
  /**
   * 화면별 유효성 상태를 관리합니다.
   * `defaultValidations`는 초기 유효성 값으로 사용됩니다.
   *
   * @type {ScreenValidationType} 화면별 유효성 상태를 나타내는 객체 타입
   */
  const [screenValidations, setScreenValidations] =
    useState<ScreenValidationType>({});

  const screens = [
    <ScreenPersonalInfo />,
    <ScreenPassword />,
    <ScreenUserId />,
    <ScreenProfileImage />,
    <ScreenNotifications />,
  ];

  useEffect(() => {
    const defaultValidations = screens.reduce<Record<string, boolean>>(
      (acc, screen) => {
        // 화면 타입과 타입 이름이 있는 경우만 처리
        if (screen.type && screen.type.name) {
          acc[screen.type.name] = false; // 컴포넌트 이름을 키로 설정
        }
        return acc;
      },
      {}
    );

    setScreenValidations(defaultValidations);
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      curPage={curPage}
      setCurPage={setCurPage}
      onClose={onClose}
      screenValidations={screenValidations}
      setScreenValidations={setScreenValidations}
      domId="auth-modal"
    >
      <Modal.Overlay />
      <Modal.Container>
        <Modal.CloseButton />
        <Modal.Content>
          <Modal.Header>
            <Modal.Pagination />
          </Modal.Header>
          {screens[curPage]}
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default AuthModal;
