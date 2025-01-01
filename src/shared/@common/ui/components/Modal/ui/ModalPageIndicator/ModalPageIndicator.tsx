import { joinClassNames } from "@shared/@common/utils";
import { useModalContext } from "../../hooks";
import styles from "./ModalPageIndicator.module.css";
import { useCallback } from "react";

const ModalPageIndicator = () => {
  const { lengthOfList, curPage, setCurPage } = useModalContext();

  if (!lengthOfList || lengthOfList === 0 || !setCurPage) return;

  // 페이지 설정 함수 최적화
  const handlePageChange = useCallback(
    (index: number) => {
      if (setCurPage) setCurPage(index);
    },
    [setCurPage]
  );

  return (
    <ul className={styles[`modal__indicator`]}>
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
