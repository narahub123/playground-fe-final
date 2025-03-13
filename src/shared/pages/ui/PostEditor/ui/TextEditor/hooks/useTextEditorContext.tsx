import { useLanguageContent } from "@shared/@common/models/hooks";
import { useContext } from "react";
import { TextEditorContext } from "../context";

const useTextEditorContext = () => {
  // 언어 설정
  const { error } = useLanguageContent(["hooks", "useContext"]);

  const context = useContext(TextEditorContext);

  if (!context) {
    throw new Error(error("useTextEditorContext"));
  }

  return context;
};

export default useTextEditorContext;
