import styles from "./TextEditor.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface TextEditorProps {
  className?: string;
}

const TextEditor = ({ className }: TextEditorProps) => {
  const classNames = joinClassNames([styles["text__editor"], className]);

  return (
    <div className={classNames} contentEditable={true}>
      TextEditor
    </div>
  );
};

export default TextEditor;
