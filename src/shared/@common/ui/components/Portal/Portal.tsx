import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  id: string;
}

const Portal = ({ children, id }: PortalProps) => {
  // 대상 DOM 요소 가져오기
  let targetNode = document.getElementById(id);

  // 대상 DOM 요소가 없을 경우 새로 생성
  if (!targetNode) {
    targetNode = document.createElement("div");
    targetNode.id = id; // ID 설정
    document.body.appendChild(targetNode); // body에 추가
  }

  // 컴포넌트 언마운트 시 DOM 정리 : 동적으로 생성된 DOM 노드가 필요 없을 때 자동으로 제거
  // 메모리 누수와 불필요한 DOM 요소의 축적을 방지
  useEffect(() => {
    return () => {
      if (targetNode?.parentNode) {
        targetNode.parentNode.removeChild(targetNode);
      }
    };
  }, [targetNode]);

  // React Portal 생성
  return createPortal(children, targetNode);
};

export default Portal;
