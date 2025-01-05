import styles from "./Spinner.module.css";
import { SVG } from "@shared/@common/ui/components";

interface SpinnerProps {
  /**
   * 스피너의 크기를 설정합니다. 기본값은 1rem입니다.
   * @default 1
   */
  size?: number;

  /**
   * 스피너의 두께를 설정합니다. 기본값은 0.25rem입니다.
   * @default 0.25
   */
  spinnerWidth?: number;

  /**
   * 스피너 크기의 단위를 설정합니다. "px" 또는 "rem"을 사용할 수 있습니다.
   * 기본값은 "rem"입니다.
   * @default "rem"
   */
  unit?: "px" | "rem";

  /**
   * 스피너의 색상을 설정합니다. 기본값은 "inherit"입니다.
   * @default "inherit"
   */
  color?: string;

  /**
   * 스피너에 대한 로딩 텍스트를 설정합니다. 접근성을 위한 aria-label에 사용됩니다.
   * @default "로딩 중"
   */
  loadingText?: string;
}

/**
 * 단위 변환 헬퍼 함수
 * rem 단위 값을 px로 변환합니다.
 * @param value 단위로 변환할 값
 * @param unit 단위 (rem 또는 px)
 * @returns 변환된 크기 (px 단위)
 */
const convertToPx = (value: number, unit: string): number => {
  return unit === "rem" ? value * 16 : value; // rem일 경우 px로 변환
};

const Spinner = ({
  size = 1, // 기본 크기: 1rem
  spinnerWidth = size / 6, // 기본 두께: 0.25rem
  unit = "rem", // 기본 단위: rem
  color = "red", // 기본 색상: 상속
  loadingText = "로딩 중", // 기본 로딩 텍스트
}: SpinnerProps) => {
  // 크기 및 두께 변환
  const convertedSize = convertToPx(size, unit); // px로 변환된 크기
  const convertedWidth = convertToPx(spinnerWidth, unit); // px로 변환된 두께

  const dashLength = ((convertedSize * Math.PI) / 6) * 4;
  const gapLength = ((convertedSize * Math.PI) / 6) * 2;

  return (
    <SVG
      svgProps={{
        width: `${size}${unit}`, // 크기 설정 (단위 포함)
        height: `${size}${unit}`, // 크기 설정 (단위 포함)
        viewBox: `0 0 ${convertedSize} ${convertedSize}`, // viewBox 설정 (단위 변환 적용)
        role: "img", // 접근성을 위한 역할 설정
        "aria-label": `${loadingText}`, // 로딩 중 텍스트 (aria-label로 사용)
      }}
    >
      <circle
        className={styles["spinner"]} // 스타일 클래스 적용
        cx={convertedSize / 2} // 원의 중심 X 좌표
        cy={convertedSize / 2} // 원의 중심 Y 좌표
        r={(convertedSize - convertedWidth) / 2} // 원의 반지름 (크기 - 두께)
        fill="none" // 원 안 채우지 않음
        stroke={color} // 원의 색상
        strokeWidth={convertedWidth} // 선의 두께
        style={{ strokeDasharray: `${dashLength}, ${gapLength}` }}
      />
    </SVG>
  );
};

export default Spinner;
