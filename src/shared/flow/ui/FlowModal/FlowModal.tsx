import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@app/store";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Modal } from "@shared/@common/ui/components";
import { onParallelModalClose } from "@shared/@common/models/slices/modalSlice";
import { ScreenValidationType } from "@shared/@common/ui/components/Modal/types";
import ScreenAccount from "../ScreenAccount/ScreenAccount";
import ScreenChooseAuthMethod from "../ScreenChooseAuthMethod/ScreenChooseAuthMethod";
import ScreenVerificationCode from "../ScreenVerificationCode/ScreenVerificationCode";

interface FlowModalProps {
  className?: string;
}

const FlowModal = ({ className }: FlowModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [curPage, setCurPage] = useState(0);

  const onClose = () => {
    dispatch(onParallelModalClose("flow"));
    // 나중에 가변적으로 변경 가능해야 함
    navigate("/");
  };

  const [screenValidations, setScreenValidations] =
    useState<ScreenValidationType>({});

  const [inputValue, setInputValue] = useState<{ [key: string]: string }>({});

  const screens = pathname.includes("i/flow/password_reset")
    ? [
        <ScreenAccount inputValue={inputValue} setInputValue={setInputValue} />,
        <ScreenChooseAuthMethod inputValue={inputValue} />,
        <ScreenVerificationCode inputValue={inputValue} />,
      ]
    : [<></>];

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

  // 언어 설정
  const {} = useLanguageContent(["components", "FlowModal"]);

  if (screens.length < 1) return null;

  return (
    <Modal
      className={className}
      curPage={curPage}
      setCurPage={setCurPage}
      isOpen={true}
      onClose={onClose}
      screenValidations={screenValidations}
      setScreenValidations={setScreenValidations}
      domId="flow-modal"
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

export default FlowModal;
