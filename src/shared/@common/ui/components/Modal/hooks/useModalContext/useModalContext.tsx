import { useContext } from "react";
import { ModalContext } from "../../context";
import { useLanguageContent } from "@shared/@common/models/hooks";

/**
 * ModalContext에 안전하게 접근하기 위한 커스텀 훅
 *
 * @throws {Error} useModalContext를 ModalContextProvider 내에서 사용하지 않았을 때 오류 발생
 * @returns {ModalContextType} ModalContext의 현재 값
 */
const useModalContext = () => {
  // 언어설정에서 useContext를 통해서 에러 문자열을 가져옴.
  const { error } = useLanguageContent([`hooks`, "useContext"]);

  // ModalContext에서 값을 가져옴.
  const context = useContext(ModalContext);

  // 만약 context가 없으면 (즉, ModalContextProvider로 감싸지 않았다면) 에러를 발생.
  if (!context) {
    throw new Error(error("ModalContext"));
  }

  // 3. 유효한 context가 있을 경우 반환.
  return context;
};

export default useModalContext;
