import styles from "./ReplyPermissionControl.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useLayoutEffect, useRef, useState } from "react";

import { IReplyOption } from "@shared/pages/ui/PostEditor/types";
import { Icon } from "@shared/@common/ui/icons";
import { Button, Text } from "@shared/@common/ui/components";
import ReplyPermissionDropdown from "../ReplyPermissionDropdown/ReplyPermissionDropdown";
import { useSelector } from "react-redux";
import { selectReplyOption } from "@shared/@common/models/selectors";

interface ReplyPermissionControlProps {
  className?: string;
}

const ReplyPermissionControl = ({ className }: ReplyPermissionControlProps) => {
  const replyRef = useRef<HTMLButtonElement>(null);
  const [rect, setRect] = useState<{
    top?: number;
    left?: number;
  }>({
    top: undefined,
    left: undefined,
  });

  const [isOpen, setIsOpen] = useState(false);

  const replyOption = useSelector(selectReplyOption);

  // 언어 설정
  const { replyOptions } = useLanguageContent([
    "components",
    "ReplyPermissionControl",
  ]);

  const updatePosition = () => {
    const button = replyRef.current;
    if (!button) return;

    const btnRect = button.getBoundingClientRect();
    const { top, left, height } = btnRect;

    setRect({ top: top + height, left });
  };

  useLayoutEffect(() => {
    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  const classNames = joinClassNames([
    styles["reply__permission__control"],
    className,
  ]);

  const selected = (replyOptions as IReplyOption[]).find(
    (option) => option.value === replyOption
  );

  return (
    <div className={classNames}>
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        variant="plain"
        fontSize="sm"
        className={styles["reply__button"]}
        ref={replyRef}
      >
        {selected && (
          <>
            <Icon iconName={selected.icon} bgColor="transparent" />
            <Text>{selected.description}</Text>
          </>
        )}
      </Button>
      <ReplyPermissionDropdown
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        lastClickedRef={replyRef}
        top={rect.top}
        left={rect.left}
      />
    </div>
  );
};

export default ReplyPermissionControl;
