import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@app/store";
import { getFlowModal } from "@shared/@common/models/selectors";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Modal } from "@shared/@common/ui/components";
import { onParallelModalClose } from "@shared/@common/models/slices/modalSlice";
import { ScreenValidationType } from "@shared/@common/ui/components/Modal/types";
import ScreenAccount from "../ScreenAccount/ScreenAccount";

interface FlowModalProps {
  className?: string;
}

const FlowModal = ({ className }: FlowModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  console.log(pathname);

  const [curPage, setCurPage] = useState(0);

  const isOpen = useSelector(getFlowModal);

  const onClose = () => {
    dispatch(onParallelModalClose("flow"));
    // 나중에 가변적으로 변경 가능해야 함
    navigate("/");
  };

  const [screenValidations, setScreenValidations] =
    useState<ScreenValidationType>({});

  const screens = pathname.includes("i/flow/password_reset")
    ? [<ScreenAccount />]
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
      isOpen={isOpen}
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
