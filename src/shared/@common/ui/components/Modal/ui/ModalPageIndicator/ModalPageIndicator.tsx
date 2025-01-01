import { joinClassNames } from "@shared/@common/utils";
import { useModalContext } from "../../hooks";
import styles from "./ModalPageIndicator.module.css";

const ModalPageIndicator = () => {
  const { lengthOfList, curPage, setCurPage } = useModalContext();

  if (!lengthOfList || !setCurPage) return;

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
          onClick={setCurPage ? () => setCurPage(index) : undefined}
        ></li>
      ))}
    </ul>
  );
};

export default ModalPageIndicator;
