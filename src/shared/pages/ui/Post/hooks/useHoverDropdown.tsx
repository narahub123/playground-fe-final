import { useRef, useState } from "react";
import { IRect } from "@shared/pages/ui/Post";
import { fetchWithAuth } from "@shared/pages/utils";
import { IUser } from "@shared/@common/types";

const useHoverDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rect, setRect] = useState<IRect>({});
  const [profileInfo, setProfileInfo] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const onClose = () => setIsOpen(false);

  const getUserInfo = async (userId: string) => {
    console.log("-------------- getUserInfo 시작 ---------------");
    setIsLoading(true);

    const result = await fetchWithAuth(`/users/${userId}`);
    try {
      if (result.success) {
        setProfileInfo(result.data.user);
      } else {
        console.error("사용자 정보를 가져오기 실패");
        setProfileInfo(null);
      }
    } catch (error) {
      console.error("사용자 정보를 가져오는 도중 에러 발생", error);
      setProfileInfo(null);
    } finally {
      setIsLoading(false);
    }

    console.log("-------------- getUserInfo 종료 ---------------");
  };

  const handleMouseEnter = async (
    ref?: React.RefObject<HTMLElement> | HTMLElement | null,
    userId?: string
  ) => {
    console.log("-------------- handleMouseEnter 시작 ---------------");
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (ref && userId) {
      let target: HTMLElement;

      // ref가 React.RefObject인 경우
      if (ref instanceof HTMLElement) {
        target = ref; // ref가 바로 HTMLElement라면
      } else if (ref.current) {
        target = ref.current; // ref가 React.RefObject이면 .current로 접근
      } else {
        return; // ref가 null인 경우, 반환
      }

      console.log(target);

      const { top, left } = target.getBoundingClientRect();

      console.log(top, left, userId);

      setRect({
        top: top + window.scrollY + 30,
        left: left * 0.5,
      });

      await getUserInfo(userId);
    }

    setIsOpen(true);
    console.log("-------------- handleMouseEnter 종료 ---------------");
  };

  const handleMouseLeave = () => {
    console.log("-------------- handleMouseLeave 시작 ---------------");
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setRect({});
    }, 100); // 잠깐 delay 줘서 드롭다운 안으로 이동 시간 확보
    console.log("-------------- handleMouseLeave 종료 ---------------");
  };

  return {
    isLoading,
    isOpen,
    onClose,
    rect,
    handleMouseEnter,
    handleMouseLeave,
    profileInfo,
  };
};

export default useHoverDropdown;
