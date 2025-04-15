import { useEffect, useRef } from "react";
import { useHoverDropdown, usePostContext } from "../../hooks";
import styles from "./PostText.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { detectInlineType } from "@shared/pages/ui/PostEditor/ui/TextEditor";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import { fetchWithAuth } from "@shared/pages/utils";
import { IUser } from "@shared/@common/types";

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

    const processInlineSegments = async () => {
      if (!text) return;

      postText.innerHTML = text;
      const inlineSegments = postText.querySelectorAll('[class*="inline"]');

      const getUserInfo = async (userId: string): Promise<IUser | null> => {
        const result = await fetchWithAuth(`/users/${userId}`);

        try {
          if (result.success) {
            // 유저 정보 반환
            return result.data.user as IUser;
          } else {
            console.error("사용자 정보가 유효하지 않음");
            return null;
          }
        } catch (error) {
          console.error("사용자 정보를 가져오는 도중 에러 발생", error);
          return null;
        }
      };

      for (const el of inlineSegments) {
        const innerText = el.textContent || "";
        const inlineType = detectInlineType(innerText);

        if (inlineType === "mention") {
          const result = await getUserInfo(innerText.slice(1));
          // 반환값이 존재하지 않는 경우(멘션이 유효하지 않는 경우)
          if (!result) {
            const segment = el.firstChild!;

            // inline을 plain으로 변경
            el.replaceWith(segment);
            continue;
          }
        }

        const newEl = document.createElement("a");
        newEl.className = el.className;
        newEl.innerHTML = el.innerHTML;

        if (!inlineType) continue;

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
        }

        el.replaceWith(newEl);
      }
    };

    processInlineSegments();
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
