import { useState } from "react";

// 모달 여닫기를 관장하는 훅
const useDisClosure = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 창 닫기
  const onClose = () => setIsOpen(false);

  // 창 열기
  const onOpen = () => setIsOpen(true);

  return {
    isOpen,
    onOpen,
    onClose,
  };
};

export default useDisClosure;
