import { ReactNode } from "react";

/**
 * 재사용 가능한 SVG 래퍼 컴포넌트입니다.
 *
 * 이 컴포넌트는 SVG 요소를 React 컴포넌트로 감싸 쉽게 사용할 수 있도록 도와줍니다.
 * 추가적인 `svgProps`와 `children`을 전달하여 SVG를 자유롭게 커스터마이징할 수 있습니다.
 *
 * @param {ReactNode | ReactNode[]} [children] - `<svg>` 내부에 렌더링될 콘텐츠입니다.
 * @param {Omit<React.SVGProps<SVGSVGElement>, "children">} [svgProps] - `<svg>` 요소에 직접 적용될 속성입니다. 단, `children`은 제외됩니다.
 *
 * @example
 * ```jsx
 * <SVG svgProps={{ width: 100, height: 100, fill: "blue" }}>
 *   <circle cx="50" cy="50" r="40" />
 * </SVG>
 * ```
 */
interface SVGProps {
  /** `<svg>` 요소 내부에 렌더링될 콘텐츠입니다. */
  children?: ReactNode | ReactNode[];
  /** `<svg>` 요소에 직접 적용할 수 있는 속성입니다. `children` 속성은 제외됩니다. */
  svgProps?: Omit<React.SVGProps<SVGSVGElement>, "children">;
}

/**
 * SVG 요소를 렌더링하는 함수형 컴포넌트입니다.
 *
 * @param {SVGProps} props - `<svg>` 요소를 커스터마이징할 수 있는 속성입니다.
 * @returns {JSX.Element} 렌더링된 `<svg>` 요소를 반환합니다.
 */
const SVG = ({ children, svgProps }: SVGProps): JSX.Element => {
  return (
    // 전달받은 속성과 콘텐츠를 사용하여 SVG 요소를 렌더링합니다.
    <svg {...svgProps}>{children}</svg>
  );
};

export default SVG;
