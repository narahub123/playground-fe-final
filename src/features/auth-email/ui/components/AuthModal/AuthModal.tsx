import { Modal } from "@shared/@common/ui/components";
import PersonalInfoScreen from "../PersonalInfoScreen/PersonalInfoScreen";
import PasswordScreen from "../PasswordScreen/PasswordScreen";
import { useState } from "react";
import { ScreenValidationType } from "@shared/@common/ui/components/Modal/types";

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
  const [curPage, setCurPage] = useState(0);
  const screens = [<PersonalInfoScreen />, <PasswordScreen />];

  /**
   * 초기 화면 유효성 검사를 설정하기 위한 객체를 생성합니다.
   * 화면 배열(`screens`)의 각 화면 타입의 이름을 키로 하여,
   * 기본적으로 모든 화면의 유효성 상태를 `false`로 설정합니다.
   *
   * @template Screen
   * @param {Array<Screen>} screens - 유효성 검사를 수행해야 하는 화면 정보 배열
   * @returns {Record<string, boolean>} 컴포넌트 이름을 키로 하고 기본값으로 `false`를 가지는 객체
   */
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

  // 유효성 상태를 관리하는 상태 훅 정의
  /**
   * 화면별 유효성 상태를 관리합니다.
   * `defaultValidations`는 초기 유효성 값으로 사용됩니다.
   *
   * @type {ScreenValidationType} 화면별 유효성 상태를 나타내는 객체 타입
   */
  const [screenValidations, setScreenValidations] =
    useState<ScreenValidationType>(defaultValidations);

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
