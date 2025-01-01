import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * PortalProps
 * - Portal 컴포넌트에 전달할 속성을 정의합니다.
 */
interface PortalProps {
  /**
   * Portal에 렌더링할 React 자식 요소입니다.
   * @type {ReactNode}
   */
  children: ReactNode;

  /**
   * Portal이 연결될 DOM 요소의 ID입니다.
   * 해당 ID의 DOM 요소가 없으면 자동으로 생성됩니다.
   * @type {string}
   */
  id: string;
}

/**
 * Portal 컴포넌트
 * - 특정 DOM 요소에 React 자식을 렌더링하거나, 해당 요소가 없으면 생성합니다.
 */
const Portal = ({ children, id }: PortalProps) => {
  const [targetNode, setTargetNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // targetNode가 없으면 새로 생성
    let targetElement = document.getElementById(id);
    if (!targetElement) {
      targetElement = document.createElement("div");
      targetElement.id = id;
      document.body.appendChild(targetElement);
      console.log("targetNode 생성", targetElement);
    }
    setTargetNode(targetElement); // targetNode 설정

    // 컴포넌트 언마운트 시 targetNode 제거
    return () => {
      if (targetElement?.parentNode) {
        targetElement.parentNode.removeChild(targetElement);
        console.log("targetNode 제거", targetElement);
      }
    };
  }, [id]); // id만 의존성 배열에 포함시키기

  // targetNode가 아직 준비되지 않았으면, 로딩 중일 때 렌더링하지 않음
  if (!targetNode) return null;

  return createPortal(children, targetNode);
};

export default Portal;
