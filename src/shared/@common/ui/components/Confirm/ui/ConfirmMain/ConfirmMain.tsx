import { ReactNode } from "react";
import { Modal } from "@shared/@common/ui/components";

interface ConfirmMainProps {
  isOpen: boolean;
  onClose: () => void;
  width?: number;
  children: ReactNode;
}

const ConfirmMain = ({
  children,
  isOpen,
  onClose,
  width = 20,
}: ConfirmMainProps) => {
  return (
    <Modal
      domId="confirm"
      isOpen={isOpen}
      onClose={onClose}
      firstFocusIndex={0}
    >
      <Modal.Overlay />
      <Modal.Container width={width} widthUnit="rem">
        <Modal.Content>{children}</Modal.Content>
      </Modal.Container>
    </Modal>
  );
};

export default ConfirmMain;
