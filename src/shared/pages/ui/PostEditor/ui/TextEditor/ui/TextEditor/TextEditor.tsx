import styles from "./TextEditor.module.css";
import { useRef } from "react";
import { joinClassNames } from "@shared/@common/utils";
import {
  HASHTAGREGEX,
  MENTIONREGEX,
  URLREGEX,
} from "@shared/pages/ui/PostEditor/constants";
import {
  createNextLine,
  handleHashtag,
  preserveEditorStructure,
} from "../../utils";
import { Line } from "@shared/pages/ui/PostEditor/ui/TextEditor/ui";

interface TextEditorProps {
  className?: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const TextEditor = ({ className }: TextEditorProps) => {
  const classNames = joinClassNames([styles["text__editor"], className]);
  const editor = useRef<HTMLDivElement>(null);
  const handleOnInput = (e: React.FormEvent<HTMLDivElement>) => {
    preserveEditorStructure();
    handleHashtag();
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
      <Line />
    </div>
  );
};

export default TextEditor;
