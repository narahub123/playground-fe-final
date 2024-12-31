import { Children, ComponentType, isValidElement, ReactNode } from "react";
import useLanguageContent from "./useLanguageContent";

interface UseValidateChildrenProps {
  children: ReactNode;
  invalidComponents: ComponentType[]; // 유효하지 않은 컴포넌트 배열
  showErrorMessage?: boolean; // 에러 메시지 표시 여부 기본값은 true
}

const useValidateChildren = ({
  children,
  invalidComponents,
  showErrorMessage = true,
}: UseValidateChildrenProps) => {
  const { error } = useLanguageContent(["hooks", "useValidateChildren"]);
  return Children.toArray(children).map((child, index) => {
    // 자식 요소가 유효한 React 요소인지 확인
    if (isValidElement(child)) {
      // invalidComponents 배열에 포함된 컴포넌트와 자식 요소의 type이 일치하는지 확인
      const isInvalidChild = invalidComponents.some(
        (compo) => child.type === compo
      );

      // 유효하지 않은 자식 요소가 발견되면 에러 메시지를 출력
      if (isInvalidChild) {
        const childTypeName =
          typeof child.type === "function" ? child.type.name : "Unknown";

        return showErrorMessage ? (
          <div key={index}>
            <p style={{ color: "red" }}>{error(childTypeName)}</p>
          </div>
        ) : null;
      }

      // 유효한 자식 요소는 그대로 반환
      return child;
    }

    // JSX 엘리먼트가 아닌 경우 그대로 반환
    return child;
  });
};

export default useValidateChildren;
