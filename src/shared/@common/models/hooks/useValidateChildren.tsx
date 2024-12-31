import { Children, ComponentType, isValidElement, ReactNode } from "react";
import useLanguageContent from "./useLanguageContent";

interface UseValidateChildrenProps {
  /**
   * 검사할 자식 요소들.
   */
  children: ReactNode;

  /**
   * 유효하지 않은 컴포넌트 타입 배열.
   */
  invalidComponents: ComponentType[];

  /**
   * 에러 메시지 표시 여부 (기본값: true).
   */
  showErrorMessage?: boolean;
}

/**
 * 자식 요소들이 유효한지 검사하고, 유효하지 않은 경우 에러 메시지를 출력합니다.
 *
 * @param {UseValidateChildrenProps} props - 유효성 검사에 필요한 속성들.
 * @param {ReactNode} props.children - 검사할 자식 요소들.
 * @param {ComponentType[]} props.invalidComponents - 유효하지 않은 컴포넌트 타입 배열.
 * @param {boolean} [props.showErrorMessage=true] - 에러 메시지 표시 여부.
 * @returns {ReactNode[]} 유효한 자식 요소 또는 에러 메시지를 포함한 배열.
 *
 * @example
 * // 사용 예시
 * useValidateChildren({
 *   children: <div><InvalidComponent /></div>,
 *   invalidComponents: [InvalidComponent],
 *   showErrorMessage: true,
 * });
 */
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
