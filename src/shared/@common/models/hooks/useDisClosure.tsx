import { useEffect, useState } from "react";

// 모달 여닫기를 관장하는 훅
const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [curPage, setCurPage] = useState(0);

  // 스크롤 중지
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [isOpen]);

  // 창 닫기
  const onClose = () => setIsOpen(false);

  // 창 열기
  const onOpen = () => setIsOpen(true);

  return {
    isOpen,
    onOpen,
    onClose,
    curPage,
    setCurPage,
  };
};

export default useDisclosure;
