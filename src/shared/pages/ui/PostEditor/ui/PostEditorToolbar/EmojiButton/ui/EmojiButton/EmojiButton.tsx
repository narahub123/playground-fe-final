import styles from "./EmojiButton.module.css";
import { useEffect, useRef, useState } from "react";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { RiUserSmileLine } from "react-icons/ri";
import { ToolbarButton } from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar";
import { EmojiDropdown } from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";

interface EmojiButtonProps {}

const EmojiButton = ({}: EmojiButtonProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [rect, setRect] = useState({ top: 0, left: 0 });

  // 언어 설정
  const { title } = useLanguageContent(["components", "EmojiButton"]);

  useEffect(() => {
    if (!btnRef.current) return;
    const btn = btnRef.current;

    const { top, left } = btn.getBoundingClientRect();

    setRect({ top, left });
  }, []);

  const onClose = () => {
    setIsOpen(false);
  };

  console.log(rect);

  return (
    <ToolbarButton
      onClick={() => setIsOpen(!isOpen)}
      title={title}
      ref={btnRef}
      className={styles["emoji__button"]}
    >
      <RiUserSmileLine fontSize={"1.25rem"} />
      <EmojiDropdown
        isOpen={isOpen}
        onClose={onClose}
        lastClickedRef={btnRef}
        top={rect.top + 40}
        left={rect.left}
      />
    </ToolbarButton>
  );
};

export default EmojiButton;
