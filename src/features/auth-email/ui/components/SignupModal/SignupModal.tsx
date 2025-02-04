import { Modal } from "@shared/@common/ui/components";
import { useEffect, useState } from "react";
import { ScreenValidationType } from "@shared/@common/ui/components/Modal/types";
import ScreenPersonalInfo from "../ScreenPersonalInfo/ScreenPersonalInfo";
import ScreenPassword from "../ScreenPassword/ScreenPassword";
import ScreenUserId from "../ScreenUserId/ScreenUserId";
import ScreenProfileImage from "../ScreenProfileImage/ScreenProfileImage";
import ScreenNotifications from "../ScreenNotifications/ScreenNotifications";
import ScreenLanguage from "../ScreenLanguage/ScreenLanguage";
import {
  useLocationInfo,
  useDeviceInfo,
  useIpInfo,
} from "@shared/@common/models/hooks";
import {
  setLocationInSignup,
  setDeviceInSignup,
  setIpInSignup,
} from "@shared/auth/models/slices/signupSlice";
import { useSelector } from "react-redux";
import { getUserInSignup } from "@shared/auth/models/selectors";
import { useAppDispatch } from "@app/store";
import { useNavigate } from "react-router-dom";
import { getSignupModal } from "@shared/@common/models/selectors";
import { onParallelModalClose } from "@shared/@common/models/slices/modalSlice";

/**
 * SignupModal 컴포넌트
 * 사용자 인증과 관련된 모달 컴포넌트로, 여러 페이지를 관리할 수 있습니다.
 *
 * @returns {JSX.Element} SignupModal 컴포넌트 렌더링 결과.
 */
const SignupModal = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const user = useSelector(getUserInSignup);
  console.log(user);

  const isOpen = useSelector(getSignupModal);

  const onClose = () => {
    dispatch(onParallelModalClose("signup"));
    navigate("/");
  };

  const [curPage, setCurPage] = useState(0);
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
    <ScreenLanguage />,
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

  // 기기 정보 저장
  useDeviceInfo(setDeviceInSignup);

  // 사용자 ip 주소 저장
  useIpInfo(setIpInSignup);

  // 사용자 주소 저장
  useLocationInfo(setLocationInSignup);

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

export default SignupModal;
