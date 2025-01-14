import styles from "./Icon.module.css";
import { Icons } from "@shared/@common/ui/icons";

interface IconProps {
  iconName: keyof typeof Icons; // react-icons의 아이콘 이름 (Icons 객체의 키 중 하나)
  iconTitle?: string; // 버튼으로 작동할 때 아이콘의 설명 (접근성 향상용)
  subClassName?: string; // 추가 스타일 클래스를 적용하기 위한 속성
  onClick?: () => void; // 클릭 이벤트 핸들러 (존재하면 버튼 역할을 함)
  ariaExpanded?: boolean; // 모달창이나 확장 가능한 요소 제어 시 상태를 나타냄
}

const Icon = ({
  iconName,
  iconTitle,
  subClassName,
  onClick,
  ariaExpanded,
}: IconProps) => {
  // react-icons에서 아이콘 컴포넌트를 가져옵니다.
  const Comp = Icons[iconName || "wrongName"]; // 존재하지 않는 키에 대한 fallback 처리

  // 유효하지 않은 아이콘 이름에 대한 안전 장치
  if (!Comp) {
    console.warn(`아이콘 "${iconName}"이 아이콘 목록에 존재하지 않습니다.`);
    return null; // 유효하지 않은 경우 컴포넌트를 렌더링하지 않음
  }

  return (
    <div
      // CSS 클래스 병합
      className={[styles.icon, subClassName, onClick ? styles.btn : ""]
        .filter(Boolean) // falsy 값 제거
        .join(" ")} // 공백으로 연결
      title={onClick ? iconTitle : undefined} // 버튼일 경우 title 속성 추가
      onClick={onClick} // 클릭 이벤트 핸들러
      onKeyDown={
        onClick
          ? (e) => {
              // Enter 또는 Space 키를 눌렀을 때 클릭 동작 수행
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault(); // 기본 동작(예: 스크롤) 방지
                onClick();
              }
            }
          : undefined // 클릭 핸들러가 없는 경우 동작하지 않음
      }
      role={onClick ? "button" : undefined} // 클릭 가능한 경우 role="button"으로 설정
      aria-label={onClick ? iconTitle : undefined} // 버튼 설명을 aria-label로 제공
      aria-expanded={ariaExpanded} // 확장 상태를 나타냄 (모달 등과 관련된 경우)
      tabIndex={onClick ? 0 : undefined} // 클릭 가능한 경우에만 포커스 가능
      aria-hidden={!onClick}
    >
      {/* 아이콘 컴포넌트를 렌더링 */}
      <Comp className={styles.comp} />
    </div>
  );
};

export default Icon;
