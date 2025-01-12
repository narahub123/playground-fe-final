import { useContext } from "react";
import { LightboxContext } from "../contexts";
import { useLanguageContent } from "@shared/@common/models/hooks";

const useLightboxContext = () => {
  const context = useContext(LightboxContext);
  const { error } = useLanguageContent(["hooks", "useLightboxContext"]);

  if (!context) {
    throw new Error(error);
  }

  return context;
};

export default useLightboxContext;
