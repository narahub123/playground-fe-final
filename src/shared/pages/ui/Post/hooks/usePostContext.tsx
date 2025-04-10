import { useContext } from "react";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { PostContext } from "@shared/pages/ui/Post";

const usePostContext = () => {
  // 언어 설정
  const { error } = useLanguageContent(["hooks", "useContext"]);

  const context = useContext(PostContext);

  if (!context) {
    throw new Error(error("usePostContext"));
  }

  return context;
};

export default usePostContext;
