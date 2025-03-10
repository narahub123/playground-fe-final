import styles from "./TextEditor.module.css";
import { useRef } from "react";
import { joinClassNames } from "@shared/@common/utils";
import {
  HASHTAGREGEX,
  MENTIONREGEX,
  URLREGEX,
} from "@shared/pages/ui/PostEditor/constants";
import { createNextLine, preserveEditorStructure } from "../../utils";

interface TextEditorProps {
  className?: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const TextEditor = ({ className }: TextEditorProps) => {
  const classNames = joinClassNames([styles["text__editor"], className]);
  const editor = useRef<HTMLDivElement>(null);
  const handleOnInput = (e: React.FormEvent<HTMLDivElement>) => {
    preserveEditorStructure();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const key = e.key;

    if (key === "Enter") {
      e.preventDefault();
      createNextLine();
    }
  };

  return (
    <div
      className={classNames}
      ref={editor}
      contentEditable={true}
      onInput={handleOnInput}
      onKeyDown={handleKeyDown}
    >
      <div className={styles["text__editor__line"]} data-offset={"0"}>
        <span className={styles["text__editor__item"]} data-offset={"0-0"}>
          <br data-text={true} />
        </span>
      </div>
    </div>
  );
};

export default TextEditor;
