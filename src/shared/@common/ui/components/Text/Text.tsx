import { joinClassNames } from "@shared/@common/utils";
import styles from "./Text.module.css";
import { ReactNode } from "react";

/**
 * @interface TextCustomProps
 * 사용자 정의 속성을 정의한 인터페이스.
 * - `children`: 텍스트 내용을 포함.
 * - `type`: 텍스트의 유형(heading1~heading3, 설명 텍스트, 일반 텍스트).
 * - `status`: 텍스트의 상태(기본, 에러, 굵게).
 * - `className`: 추가적인 CSS 클래스 이름.
 */
interface TextCustomProps {
  /** 텍스트 내용 */
  children: ReactNode;
  /** 텍스트의 유형(heading1~heading3, 설명 텍스트, 일반 텍스트) */
  type?: "heading1" | "heading2" | "heading3" | "expl" | "normal";
  /** 텍스트 상태(기본, 에러, 굵게) */
  status?: "default" | "error" | "bold";
  /** 추가 CSS 클래스 이름 */
  className?: string;
}

/**
 * @type TextProps
 * React HTML 속성과 사용자 정의 속성을 병합한 타입.
 */
type TextProps = TextCustomProps & React.HTMLAttributes<HTMLElement>;

/**
 * @component Text
 * 텍스트를 렌더링하는 컴포넌트로, 다양한 상태와 유형을 지원합니다.
 *
 * @param {TextProps} props
 * - `children`: 텍스트 내용을 포함합니다.
 * - `type`: 텍스트의 유형을 지정합니다. 기본값은 `"normal"`입니다.
 * - `status`: 텍스트의 상태를 지정합니다. 기본값은 `"default"`입니다.
 * - `className`: 추가적인 CSS 클래스를 전달합니다.
 * - `...props`: 기타 HTML 속성을 전달받습니다.
 *
 * @returns {JSX.Element} 지정된 텍스트를 렌더링하는 JSX 요소.
 */
const Text = ({
  children,
  type = "normal", // 기본 텍스트 유형은 "normal"
  status = "default", // 기본 상태는 "default"
  className,
  ...props
}: TextProps): JSX.Element => {
  // `type`이 heading으로 시작하는지 확인하여 헤딩 여부를 판별
  const isHeading = type.startsWith("heading");

  // aria-level 값 계산 (heading1~heading3에 한정, 기본값은 1~3 사이로 제한)
  const ariaLevel = isHeading
    ? Math.min(Math.max(parseInt(type.replace("heading", ""), 10), 1), 3)
    : undefined;

  // 상태에 따른 클래스 이름 선택
  const statusClassName =
    status === "error"
      ? styles.error
      : status === "bold"
      ? styles.bold
      : undefined;

  // 전체 클래스 이름 병합
  const classNames = joinClassNames([
    styles[`text`], // 기본 텍스트 스타일
    styles[type === "normal" ? "" : type], // 타입에 따른 스타일
    statusClassName, // 상태에 따른 스타일
    className, // 사용자 정의 클래스 이름
  ]);

  return (
    <p
      className={classNames} // 병합된 클래스 이름 적용
      {...props} // 기타 HTML 속성 전달
      role={isHeading ? "heading" : undefined} // 헤딩인 경우 접근성을 위한 role 지정
      aria-level={ariaLevel} // 헤딩인 경우 aria-level 지정
    >
      {children} {/* 텍스트 내용 출력 */}
    </p>
  );
};

export default Text;
