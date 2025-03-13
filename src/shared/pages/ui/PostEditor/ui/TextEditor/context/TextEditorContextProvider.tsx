import { ReactNode } from "react";
import TextEditorContext from "./TextEditorContext";
import { ITextEditorContext } from "../types";

interface TextEditorContextProviderProps {
  value: ITextEditorContext;
  children: ReactNode;
}

const TextEditorContextProvider = ({
  value,
  children,
}: TextEditorContextProviderProps) => {
  return (
    <TextEditorContext.Provider value={value}>
      {children}
    </TextEditorContext.Provider>
  );
};

export default TextEditorContextProvider;
