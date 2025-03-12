import styles from "./TextEditor.module.css";
import { Line } from "@shared/pages/ui/PostEditor/ui/TextEditor";
import { joinClassNames } from "@shared/@common/utils";

interface TextEditorProps {
  className?: string;
}

const TextEditor = ({ className }: TextEditorProps) => {
  const classNames = joinClassNames([styles["text__editor"], className]);

  return (
    <div className={classNames} contentEditable={true}>
      <Line />
    </div>
  );
};

export default TextEditor;
