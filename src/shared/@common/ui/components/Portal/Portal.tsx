import { ReactNode, useEffect } from "react";
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
