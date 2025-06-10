import { TextEditor } from "@shared/pages/ui/PostEditor";

interface InputTextEditorProps {
  placeholder: string;
}

const InputTextEditor = ({ placeholder }: InputTextEditorProps) => {
  return <TextEditor placeholder={placeholder} />;
};

export default InputTextEditor;
