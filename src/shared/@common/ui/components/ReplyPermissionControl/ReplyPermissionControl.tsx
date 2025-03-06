import styles from "./ReplyPermissionControl.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import Button from "../Button/Button";
import Text from "../Text/Text";
import { useLayoutEffect, useRef, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { LuCheck } from "react-icons/lu";
import { Icon } from "../../icons";
import {
  IReplyOption,
  ReplyOptionType,
} from "@shared/@common/types/components";

interface ReplyPermissionControlProps {
  className?: string;
  replyOption: ReplyOptionType;
  setReplyOption: React.Dispatch<ReplyOptionType>;
}

const ReplyPermissionControl = ({
  className,
  replyOption,
  setReplyOption,
}: ReplyPermissionControlProps) => {
  const replyRef = useRef<HTMLButtonElement>(null);
  const [rect, setRect] = useState<{
    top?: number;
    left?: number;
  }>({
    top: undefined,
    left: undefined,
  });

  const [isOpen, setIsOpen] = useState(false);

  // 언어 설정
  const { replyOptions, header } = useLanguageContent([
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
      <Dropdown
        className={styles["permission__dropdown"]}
        name="reply-dropdown"
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        lastClickedRef={replyRef}
        top={rect.top}
        left={rect.left}
      >
        <div className={styles["header"]}>
          <Text className={styles["header__text"]}>{header.text}</Text>
          <Text className={styles["header__description"]}>
            {header.description}
          </Text>
        </div>
        <div>
          <ul>
            {(replyOptions as IReplyOption[]).map((option) => (
              <li
                className={styles["option"]}
                key={option.value}
                onClick={() => setReplyOption(option.value)}
                tabIndex={0}
              >
                <div className={styles["option__leading__icon__container"]}>
                  <div className={styles["option__leading__icon__wrapper"]}>
                    <Icon
                      className={styles["option__leading__icon"]}
                      iconName={option.icon}
                      bgColor="transparent"
                    />
                  </div>
                </div>
                <Text className={styles["option__text"]}>{option.text}</Text>
                {option.value === replyOption && (
                  <LuCheck className={styles["option__trailing__icon"]} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </Dropdown>
    </div>
  );
};

export default ReplyPermissionControl;
