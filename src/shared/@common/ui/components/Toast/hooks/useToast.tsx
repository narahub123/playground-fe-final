import { ToastType } from "../types.ts";

interface ToastProps {
  description: string; // 토스트 메시지의 본문 내용 (필수 값)
  title?: string; // 토스트 메시지의 제목 (선택 값)
  type?: ToastType; // 토스트의 유형 (예: "success", "error", "warning", "info", "loading") - 선택 값
  action?: {
    // 토스트 메시지에 포함될 액션 버튼 (선택 값)
    label: string; // 버튼에 표시할 텍스트
    onClick: () => void; // 버튼 클릭 시 실행될 함수
  };
  duration?: number; // 토스트가 화면에 표시되는 시간(밀리초 단위) (선택 값, 기본값은 구현체에서 정의)
  max?: number; // 화면에 표시될 수 있는 최대 토스트 개수 (선택 값)
  placement?: string; // 토스트가 화면에 표시될 위치 (예: "top-right", "bottom-left") (선택 값)
  overlap?: boolean; // 토스트가 서로 겹쳐서 표시될 수 있는지 여부 (선택 값, 기본값은 `false`)
  offset?: string; // 토스트와 화면 경계 또는 다른 토스트 간의 간격 (선택 값)
}

const useToast = () => {
  const toast = ({
    title,
    description,
    type,
    action,
    duration,
    max,
    placement,
    overlap,
    offset,
  }: ToastProps) => {
    console.log(
      title,
      description,
      type,
      action,
      duration,
      max,
      placement,
      overlap,
      offset
    );
  };
  return toast;
};

export default useToast;
