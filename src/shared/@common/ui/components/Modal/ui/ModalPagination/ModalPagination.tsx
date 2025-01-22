import { joinClassNames } from "@shared/@common/utils";
import { useModalContext } from "../../hooks";
import styles from "./ModalPagination.module.css";
import { useCallback, useEffect, useState } from "react";

/**
 * ModalPaginationProps는 ModalPagination 컴포넌트에 전달되는 속성들을 정의합니다.
 */
interface ModalPaginationProps {
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
const ModalPagination = ({ className }: ModalPaginationProps) => {
  const { curPage, setCurPage, screenValidations } = useModalContext();

  // 이동 가능한 마지막 페이지 상태를 관리하기 위한 useState 훅
  /**
   * 현재 이동 가능한 마지막 페이지를 저장하는 상태.
   * 기본값은 0이며, 유효하지 않은 화면을 기반으로 업데이트됩니다.
   *
   * @type {[number, React.Dispatch<React.SetStateAction<number>>]}
   */
  const [lastMovablePage, setLastMovablePage] = useState(0);

  // 이동 가능한 마지막 페이지 상태를 업데이트하는 useEffect 훅
  /**
   * 화면 유효성 상태(`screenValidations`)를 기반으로 이동 가능한 마지막 페이지를 계산하여 업데이트합니다.
   * 유효하지 않은 첫 번째 화면을 기준으로 페이지 번호를 설정합니다.
   *
   * @function
   * @param {ScreenValidationType | undefined} screenValidations - 화면 유효성 상태 객체
   */
  useEffect(() => {
    // 화면 유효성 상태가 없는 경우 아무 작업도 수행하지 않음
    if (!screenValidations) return;

    // 유효하지 않은 첫 번째 화면의 인덱스를 찾음
    const page = Object.values(screenValidations).findIndex(
      (screen) => !screen // 유효하지 않은 화면을 기준으로 탐색
    );

    // 유효하지 않은 화면이 없는 경우 (page < 0) 아무 작업도 수행하지 않음
    if (page < 0) return;

    // 이동 가능한 마지막 페이지 상태를 업데이트
    setLastMovablePage(page);
  }, [screenValidations]);

  const lengthOfList = screenValidations
    ? Object.values(screenValidations).length
    : undefined;

  // lengthOfList가 없거나 0일 경우, 또는 setCurPage가 정의되지 않으면 아무 것도 렌더링하지 않음
  if (!lengthOfList || lengthOfList === 0 || !setCurPage) return;

  /**
   * 페이지를 변경하는 함수입니다.
   * 클릭 또는 키보드 이벤트에서 호출되어 새로운 페이지를 설정합니다.
   *
   * @param {number} page - 변경할 페이지의 인덱스
   */
  const handlePageChange = useCallback(
    (page: number) => {
      if (setCurPage) setCurPage(page);
    },
    [setCurPage]
  );

  return (
    <ul className={joinClassNames([styles[`modal__pagination`], className])}>
      {/* legnthOfList가 존재하고 1보다 큰 경우에만 렌더링 */}
      {lengthOfList && lengthOfList > 1
        ? Array.from({ length: lengthOfList }).map((_, page) => {
            /**
             * 이동 가능한 페이지 조건 - 페이지가 이동한 마지막 페이지보다 작거나 같아야 함
             */
            const movableCond = page <= lastMovablePage;

            return (
              <button
                key={page}
                className={joinClassNames([
                  styles[`modal__pagination__item`],
                  // 이동 가능한 페이지 표시
                  movableCond ? styles[`modal__pagination__item--movable`] : "",
                  // 현재 페이지 표시
                  curPage === page
                    ? styles[`modal__pagination__item--selected`]
                    : "",
                ])}
                onClick={movableCond ? () => handlePageChange(page) : undefined}
                aria-current={curPage === page ? "page" : undefined} // 현재 페이지 표시
                tabIndex={movableCond ? 0 : -1}
                onKeyDown={
                  movableCond
                    ? (e) => {
                        if (e.key === "Enter") {
                          setCurPage(page);
                        }
                      }
                    : undefined
                }
                // 이동 가능한 경우에만 포인터 커서가 보임
                style={movableCond ? { cursor: "pointer" } : undefined}
              />
            );
          })
        : null}
    </ul>
  );
};

export default ModalPagination;
