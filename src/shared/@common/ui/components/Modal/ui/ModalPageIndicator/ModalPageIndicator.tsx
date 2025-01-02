import { joinClassNames } from "@shared/@common/utils";
import { useModalContext } from "../../hooks";
import styles from "./ModalPageIndicator.module.css";
import { useCallback } from "react";

/**
 * ModalPageIndicatorProps는 ModalPageIndicator 컴포넌트에 전달되는 속성들을 정의합니다.
 */
interface ModalPageIndicatorProps {
  /**
   * 추가적인 클래스명을 지정할 수 있는 프로퍼티. 기존 className에 덧붙여짐
   * @type {string}
   */
  className?: string;
}

/**
 * 모달 페이지 인디케이터 컴포넌트입니다.
 * 페이지 인디케이터는 페이지 이동을 위한 버튼 역할을 하며, 현재 페이지를 표시합니다.
 * 사용자가 클릭하거나 키보드로 해당 페이지를 선택할 수 있습니다.
 *
 * @returns {JSX.Element | null} 페이지 인디케이터를 렌더링하는 JSX 요소. `lengthOfList` 또는 `setCurPage`가 없으면 렌더링되지 않습니다.
 */
const ModalPageIndicator = ({ className }: ModalPageIndicatorProps) => {
  const { lengthOfList, curPage, setCurPage } = useModalContext();

  // lengthOfList가 없거나 0일 경우, 또는 setCurPage가 정의되지 않으면 아무 것도 렌더링하지 않음
  if (!lengthOfList || lengthOfList === 0 || !setCurPage) return;

  /**
   * 페이지를 변경하는 함수입니다.
   * 클릭 또는 키보드 이벤트에서 호출되어 새로운 페이지를 설정합니다.
   *
   * @param {number} index - 변경할 페이지의 인덱스
   */
  const handlePageChange = useCallback(
    (index: number) => {
      if (setCurPage) setCurPage(index);
    },
    [setCurPage]
  );

  return (
    <ul className={joinClassNames([styles[`modal__indicator`], className])}>
      {Array.from({ length: lengthOfList }).map((_, index) => (
        <li
          key={index}
          className={joinClassNames([
            styles[`modal__indicator__item`],
            curPage !== undefined && curPage >= index
              ? styles[`modal__indicator__item--selected`]
              : "",
          ])}
          onClick={() => handlePageChange(index)}
          role="button"
          aria-current={curPage === index ? "page" : undefined} // 현재 페이지 표시
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setCurPage(index);
            }
          }}
        ></li>
      ))}
    </ul>
  );
};

export default ModalPageIndicator;
