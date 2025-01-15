import styles from "./Button.module.css";
import common from "@shared/@common/styles/common.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { ReactNode } from "react";
import Spinner from "../Spinner/Spinner";
import Text from "../Text/Text";
import { useLanguageContent } from "@shared/@common/models/hooks";
import {
  BorderStyle,
  ColorBasic,
  ColorBasicWithInherit,
  SizeBasic,
  SizeExtended,
  SizeExtendedWithFull,
  VariantType,
} from "@shared/@common/types";

interface ButtonCustomProps {
  children: ReactNode;
  onClick: (value?: any) => void;
  fontColor?: ColorBasicWithInherit;
  fontSize?: SizeExtended;
  bgColor?: ColorBasic;
  width?: string;
  height?: string;
  borderWidth?: SizeBasic;
  borderStyle?: BorderStyle;
  borderColor?: ColorBasic;
  rounded?: SizeExtendedWithFull;
  variant?: VariantType;
  isValid?: boolean;
  loading?: boolean;
  loadingText?: string;
  className?: string;
  disabled?: boolean;
}

type ButtonProps = ButtonCustomProps & React.HTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  onClick,
  borderWidth,
  borderStyle,
  borderColor,
  rounded,
  bgColor,
  fontColor,
  fontSize,
  width,
  height,
  isValid = false,
  variant = "solid",
  loading = false,
  loadingText,
  className, // 추가 스타일링을 위한 className 추가
  disabled = false, // isValid와 관계 없이 강제 disabled
  ...props
}: ButtonProps) => {
  // 언어 설정
  const { empty, ariaLabel } = useLanguageContent(["components", "Button"]);

  /**
   * 클래스 이름을 결합하여 하나의 문자열로 반환합니다.
   * @type {string} 결합된 클래스 이름
   */
  const classNames = joinClassNames([
    variant !== "plain" ? styles["button"] : styles[`text`],
    variant && common[`variant--${variant}`],
    rounded && common[`rounded--${rounded}`],
    borderWidth && common[`border--width--${borderWidth}`],
    borderStyle && common[`border--style--${borderStyle}`],
    borderColor && common[`border--color--${borderColor}`],
    bgColor && common[`background--color--${bgColor}`],
    fontColor && common[`color--${fontColor}`],
    fontSize && common[`fontsize--${fontSize}`],
    disabled || !isValid || loading ? common[`disabled`] : "",
    isValid && variant !== "plain" ? styles[`button--valid`] : "",
    className,
  ]);

  return (
    <>
      {variant !== "plain" ? (
        <button
          type="button"
          className={classNames}
          disabled={!isValid || disabled || loading}
          onClick={onClick}
          aria-disabled={!isValid || disabled} // 비활성화 상태
          aria-label={
            loading ? loadingText || ariaLabel.loading : ariaLabel.button
          }
          style={{ width: `${width}`, height: `${height}`, ...props.style }}
          {...props}
        >
          {loading ? (
            <div
              className={styles[`button__loading`]}
              aria-live="polite" // 상태 변화시 사용자에게 알림
            >
              <Spinner loadingText={loadingText} />
              {loadingText && <Text>{loadingText}</Text>}
            </div>
          ) : (
            children || empty
          )}
        </button>
      ) : (
        <p
          className={joinClassNames([
            styles[`text`],
            common[`variant--plain`],
            disabled ? common[`disabled`] : "",
          ])}
          style={{ ...props.style }}
        >
          {children || empty}
        </p>
      )}
    </>
  );
};

export default Button;
