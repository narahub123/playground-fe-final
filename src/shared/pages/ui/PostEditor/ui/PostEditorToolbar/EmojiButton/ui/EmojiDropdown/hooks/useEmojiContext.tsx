import { useLanguageContent } from "@shared/@common/models/hooks";
import { useContext } from "react";
import { EmojiContext } from "../context";

const useEmojiContext = () => {
  // 언어 설정
  const { error } = useLanguageContent(["hooks", "useContext"]);

  const context = useContext(EmojiContext);

  if (!context) {
    throw new Error(error("useEmojiContext"));
  }

  return context;
};

export default useEmojiContext;
