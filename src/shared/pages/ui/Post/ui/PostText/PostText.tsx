import { useEffect, useRef, useState } from "react";
import { useHoverDropdown, usePostContext } from "../../hooks";
import styles from "./PostText.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { detectInlineType } from "@shared/pages/ui/PostEditor/ui/TextEditor";
import { LinkPreview, ProfileDropdown } from "@shared/pages/ui/Post";
import { fetchWithAuth } from "@shared/pages/utils";
import { IUser } from "@shared/@common/types";


interface PostTextProps {
  className?: string;
}

const PostText = ({ className }: PostTextProps) => {
  const classNames = joinClassNames([styles["post__text"], className]);
  const textRef = useRef<HTMLDivElement>(null);
  const inlineRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [link, setLink] = useState("");

  const { text } = usePostContext();

  const {
    isLoading,
    isOpen,
    onClose,
    rect,
    handleMouseEnter,
    handleMouseLeave,
    profileInfo,
  } = useHoverDropdown();

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

      for (let i = 0; i < inlineSegments.length; i++) {
        const el = inlineSegments[i];
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
          newEl.addEventListener("mouseenter", () =>
            handleMouseEnter(
              { current: inlineRefs.current[i] },
              innerText.slice(1)
            )
          );
          newEl.addEventListener("mouseleave", () => handleMouseLeave());

          inlineRefs.current[i] = newEl;
        } else if (inlineType === "url") {
          // 저장된 링크가 없는 경우에만 추가: 즉 하나의 링크만 표시됨 의미
          if (!link) {
            setLink(innerText);
          }
        }

        el.replaceWith(newEl);
      }
    };

    processInlineSegments();
  }, []);

  return (
    <div>
      <div className={classNames} ref={textRef}>
        <ProfileDropdown
          isOpen={isOpen}
          isLoading={isLoading}
          onClose={onClose}
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
          top={rect.top}
          left={rect.left}
          bottom={rect.bottom}
          profileInfo={profileInfo}
        />
      </div>
      {link && <LinkPreview link={link} />}
    </div>
  );
};

export default PostText;
