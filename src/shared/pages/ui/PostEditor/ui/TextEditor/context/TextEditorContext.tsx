import { createContext } from "react";
import { ITextEditorContext } from "../types";

const TextEditorContext = createContext<ITextEditorContext | null>(null);

export default TextEditorContext;
