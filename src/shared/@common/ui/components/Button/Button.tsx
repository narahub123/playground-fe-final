import styles from "./Button.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { ReactNode } from "react";
import Spinner from "../Spinner/Spinner";
import Text from "../Text/Text";
import { useLanguageContent } from "@shared/@common/models/hooks";

interface ButtonProps {
  children: ReactNode;
  onClick: (value?: any) => void;
  variant?: "solid" | "subtle" | "surface" | "outline" | "ghost" | "plain";
  colorPalette?:
    | "colorTheme"
    | "default"
    | "cornflowerblue"
    | "green"
    | "red"
    | "purple"
    | "orange"
    | "yellow";
  isValid?: boolean;
  loading?: boolean;
  loadingText?: string;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  isValid = false,
  variant = "solid",
  colorPalette = "default",
  loading = false,
  loadingText,
  className, // 추가 스타일링을 위한 className 추가
  disabled = false, // isValid와 관계 없이 강제 disabled
}: ButtonProps) => {
  // 언어 설정
  const { empty, ariaLabel } = useLanguageContent(["components", "Button"]);

  /**
   * 클래스 이름을 결합하여 하나의 문자열로 반환합니다.
   * @type {string} 결합된 클래스 이름
   */
  const classNames = joinClassNames([
    styles["button"],
    // variant + colorPalette
    !isValid || disabled
      ? styles[
          `button--${variant}--${
            colorPalette === "colorTheme" ? colorPalette : "colorPalette"
          }--invalid`
        ]
      : `${
          styles[
            `button--${variant}--${
              colorPalette === "colorTheme" ? colorPalette : "colorPalette"
            }`
          ]
        } ${styles[`button--valid`]}`,
    className,
  ]);

  return (
    <button
      type="button"
      className={classNames}
      disabled={!isValid || disabled || loading}
      onClick={onClick}
      aria-disabled={!isValid || disabled} // 비활성화 상태
      aria-label={loading ? loadingText || ariaLabel.loading : ariaLabel.button}
      data-color-palette={colorPalette} 
    >
      {loading ? (
        <div
          className={styles[`button__loading`]}
          aria-live="polite" // 상태 변화시 사용자에게 알림
        >
          <Spinner loadingText={loadingText} />
          {loadingText && <Text text={loadingText} />}
        </div>
      ) : (
        children || empty
      )}
    </button>
  );
};

export default Button;
