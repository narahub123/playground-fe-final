import { useContext } from "react";
import InputContext from "./InputContext";
import { useLanguageContent } from "@shared/@common/models/hooks";

/**
 * InputContext에 안전하게 접근하기 위한 커스텀 훅
 *
 * @throws {Error} InputContext가 제공되지 않았을 때 오류를 발생시킵니다.
 * @returns {InputContextType} InputContext의 현재 값
 */
const useInputContext = () => {
  const context = useContext(InputContext);
  const { error } = useLanguageContent(["hooks", "useInputContext"]);

  if (!context) {
    throw new Error(error);
  }
  return context;
};

export default useInputContext;
