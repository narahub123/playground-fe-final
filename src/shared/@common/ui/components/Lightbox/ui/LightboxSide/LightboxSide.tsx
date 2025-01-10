import styles from "./LightboxSide.module.css";
import { ReactNode } from "react";
import { joinClassNames } from "@shared/@common/utils";

interface LightboxSideProps {
  children: ReactNode;
  className?: string;
}

const LightboxSide = ({ children, className }: LightboxSideProps) => {
  /**
   * `joinClassNames` 함수는 `styles["LightboxSide]"`와 `className`을 결합하여
   * 최종적인 클래스 이름을 반환합니다. 이를 통해 여러 CSS 클래스를 결합하고,
   * 최종적으로 하나의 `className` 값으로 전달됩니다.
   *
   * @param {string[]} classNames - 결합할 클래스 이름들의 배열.
   * @returns {string} - 결합된 클래스 이름.
   */
  const classNames = joinClassNames([styles["lightbox__side"], className]);

  return <div className={classNames}>{children}</div>;
};

export default LightboxSide;
