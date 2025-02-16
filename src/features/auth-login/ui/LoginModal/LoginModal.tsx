import styles from "./LoginModal.module.css";
import { getLoginModal } from "@shared/@common/models/selectors";
import { Modal } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@app/store";
import { useNavigate } from "react-router-dom";
import { onParallelModalClose } from "@shared/@common/models/slices/modalSlice";
import { ScreenValidationType } from "@shared/@common/ui/components/Modal/types";
import ScreenSelectLogin from "../ScreenSelectLogin/ScreenSelectLogin";
import ScreenLoginPassword from "../ScreenLoginPassword/ScreenLoginPassword";
import {
  useDeviceInfo,
  useIpInfo,
  useLocationInfo,
} from "@shared/@common/models/hooks";
import { LoginInputValueType } from "@features/auth-login/types";

interface LoginModalProps {
  className?: string;
}

const LoginModal = ({ className }: LoginModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState<LoginInputValueType>({});

  console.log("입력 값", inputValue);

  // 페이지 관리
  const [curPage, setCurPage] = useState(0);

  // 로그인 모달 열기
  const isOpen = useSelector(getLoginModal);

  // 로그인 모달 닫기
  const onClose = () => {
    dispatch(onParallelModalClose("login"));
    navigate("/");
  };

  const screens = [
    <ScreenSelectLogin inputValue={inputValue} setInputValue={setInputValue} />,
    <ScreenLoginPassword
      inputValue={inputValue}
      setInputValue={setInputValue}
    />,
  ];

  const [screenValidations, setScreenValidations] =
    useState<ScreenValidationType>({});

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

  const device = useDeviceInfo();
  const ip = useIpInfo();
  const location = useLocationInfo();

  useEffect(() => {
    setInputValue({
      device,
      ip,
      location,
    });
  }, [device, ip, location]);

  console.log(inputValue);
  

  const classNames = joinClassNames([styles["login__modal"], className]);

  return (
    <Modal
      className={classNames}
      isOpen={isOpen}
      curPage={curPage}
      setCurPage={setCurPage}
      onClose={onClose}
      screenValidations={screenValidations}
      setScreenValidations={setScreenValidations}
      domId="login-modal"
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

export default LoginModal;
