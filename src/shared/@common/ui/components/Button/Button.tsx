import styles from "./Button.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: (value?: any) => void;
  variant?: "solid" | "subtle" | "surface" | "outline" | "ghost" | "plain";
  colorPalette?: "default" | "colorTheme";
  isValid?: boolean;
}

const Button = ({
  children,
  onClick,
  isValid = true,
  variant = "solid",
  colorPalette = "default",
}: ButtonProps) => {
  /**
   * 클래스 이름을 결합하여 하나의 문자열로 반환합니다.
   * @type {string} 결합된 클래스 이름
   */
  const classNames = joinClassNames([
    styles["button"],
    // variant + colorPalette
    styles[`button--${variant}--${colorPalette}`],
  ]);

  return (
    <button className={classNames} disabled={!isValid} onClick={onClick}>
      {children || "문자열 혹은 아이콘을 넣어주세요."}
    </button>
  );
};

export default Button;
