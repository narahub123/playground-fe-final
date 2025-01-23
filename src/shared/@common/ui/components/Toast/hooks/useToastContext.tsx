import { useLanguageContent } from "@shared/@common/models/hooks";
import { useContext } from "react";
import { ToastContext } from "@shared/@common/ui/components/Toast/context";

const useToastContext = () => {
  // 언어 설정
  const { error } = useLanguageContent(["hooks", "useContext"]);

  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(error(`ToastContext`));
  }

  return context;
};

export default useToastContext;
