import { useContext } from "react";
import { AlertContext } from "../context";
import { useLanguageContent } from "@shared/@common/models/hooks";

const useAlertContext = () => {
  const context = useContext(AlertContext);

  const { error } = useLanguageContent(["hooks", "useContext"]);

  if (!context) {
    throw new Error(error("AlertContext"));
  }
  return context;
};

export default useAlertContext;
