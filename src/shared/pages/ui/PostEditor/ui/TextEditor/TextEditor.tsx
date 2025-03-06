import { useRef } from "react";
import styles from "./TextEditor.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface TextEditorProps {
  className?: string;
  disabled?: boolean;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const TextEditor = ({ className, disabled = false }: TextEditorProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const classNames = joinClassNames([
    styles["text__editor__container"],
    className,
  ]);

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const text = e.currentTarget.innerText;
    console.log(text);
  };

  return (
    <div className={classNames}>
      <div
        className={styles["text__editor"]}
        contentEditable={true}
        ref={textRef}
        onInput={handleInput}
        data-placeholder={"무슨 일이 일어나고 있나요?"}
      />
    </div>
  );
};

export default TextEditor;
