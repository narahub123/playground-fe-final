import { useContext } from "react";
import { InputContext } from "../context";
import { useLanguageContent } from "@shared/@common/models/hooks";

const useInputContext = () => {
  const context = useContext(InputContext);

  const { error } = useLanguageContent(["hooks", "useContext"]);

  if (!context) throw new Error(error("useInputContext"));

  return context;
};

export default useInputContext;
