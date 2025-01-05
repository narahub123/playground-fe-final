import styles from "./Button.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { ReactNode } from "react";
import Spinner from "../Spinner/Spinner";
import Text from "../Text/Text";

interface ButtonProps {
  children: ReactNode;
  onClick: (value?: any) => void;
  variant?: "solid" | "subtle" | "surface" | "outline" | "ghost" | "plain";
  colorPalette?: "default" | "colorTheme";
  isValid?: boolean;
  loading?: boolean;
  loadingText?: string;
}

const Button = ({
  children,
  onClick,
  isValid = true,
  variant = "solid",
  colorPalette = "default",
  loading = false,
  loadingText,
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
      {loading ? (
        <div className={styles[`button__loading`]}>
          <Spinner loadingText={loadingText} />
          {loadingText && <Text text={loadingText} />}
        </div>
      ) : (
        children || "문자열 혹은 아이콘을 넣어주세요."
      )}
    </button>
  );
};

export default Button;
