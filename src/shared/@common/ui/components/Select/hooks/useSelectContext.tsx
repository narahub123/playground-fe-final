import { useLanguageContent } from "@shared/@common/models/hooks";
import { useContext } from "react";
import { SelectContext } from "../context";

const useSelectContext = () => {
  // 언어 설정
  const { error } = useLanguageContent(["hooks", "useContext"]);

  const context = useContext(SelectContext);

  if (!context) throw new Error(error("SelectContext"));

  return context;
};

export default useSelectContext;
