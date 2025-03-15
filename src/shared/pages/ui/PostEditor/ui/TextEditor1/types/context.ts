import { ILine } from "./components";

interface ITextEditorContext {
  setLines: React.Dispatch<React.SetStateAction<ILine[]>>;
}

export type { ITextEditorContext };
