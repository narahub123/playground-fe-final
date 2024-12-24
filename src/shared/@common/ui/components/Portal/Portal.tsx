import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  id: string;
}

const Portal = ({ children, id }: PortalProps) => {
  const targetNode = document.getElementById(id);
  return targetNode ? createPortal(children, targetNode) : null;
};

export default Portal;
