import { useEffect, useRef } from "react";
import { useHoverDropdown, usePostContext } from "../../hooks";
import styles from "./PostText.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { detectInlineType } from "@shared/pages/ui/PostEditor/ui/TextEditor";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";

interface PostTextProps {
  className?: string;
}

const PostText = ({ className }: PostTextProps) => {
  const classNames = joinClassNames([styles["post__text"], className]);
  const textRef = useRef<HTMLDivElement>(null);

  const { text } = usePostContext();

  const { isOpen, onClose, rect, handleMouseEnter, handleMouseLeave } =
    useHoverDropdown();

  useEffect(() => {
    if (!textRef.current) return;

    const postText = textRef.current;

    if (text) {
      postText.innerHTML = text;

      const inlineSegments = postText.querySelectorAll('[class*="inline"]');

      inlineSegments.forEach((el) => {
        const newEl = document.createElement("a");
        newEl.className = el.className;
        newEl.innerHTML = el.innerHTML;
        const innerText = el.textContent || "";

        const inlineType = detectInlineType(innerText);

        if (!inlineType) return;
        const url =
          inlineType === "hashtag"
            ? `/hashtag/${innerText}?src=hashtag_click`
            : inlineType === "mention"
            ? `/${innerText.slice(1)}`
            : `https://${innerText}`;

        newEl.setAttribute("href", url);

        if (inlineType === "mention") {
          newEl.addEventListener("mouseenter", () => handleMouseEnter(textRef));
          newEl.addEventListener("mouseleave", handleMouseLeave);
        } else if (inlineType === "url") {
        }
        el.replaceWith(newEl);
      });
    }
  }, []);

  return (
    <div className={classNames} ref={textRef}>
      <ProfileDropdown
        isOpen={isOpen}
        onClose={onClose}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        top={rect.top}
        left={rect.left}
      />
    </div>
  );
};

export default PostText;
