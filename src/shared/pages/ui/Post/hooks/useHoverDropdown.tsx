import { useRef, useState } from "react";
import { IRect } from "@shared/pages/ui/Post";
import { fetchWithAuth } from "@shared/pages/utils";
import { IUser } from "@shared/@common/types";

const useHoverDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rect, setRect] = useState<IRect>({});
  const [profileInfo, setProfileInfo] = useState<IUser | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const onClose = () => setIsOpen(false);

  const getUserInfo = async (userId: string) => {
    console.log("-------------- getUserInfo 시작 ---------------");

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
    }

    console.log("-------------- getUserInfo 종료 ---------------");
  };

  const handleMouseEnter = async (
    ref?: React.RefObject<HTMLElement>,
    userId?: string
  ) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (ref && userId) {
      const target = ref.current!;

      const { top, left } = target.getBoundingClientRect();

      setRect({ top: top + 30, left: left * 0.5 });

      await getUserInfo(userId);
    }

    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setRect({});
    }, 100); // 잠깐 delay 줘서 드롭다운 안으로 이동 시간 확보
  };

  return {
    isOpen,
    onClose,
    rect,
    handleMouseEnter,
    handleMouseLeave,
    profileInfo,
  };
};

export default useHoverDropdown;
