import styles from "./ReplyPermissionDropdown.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Dropdown, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { IReplyOption, ReplyOptionType } from "../../types";
import { Icon } from "@shared/@common/ui/icons";
import { LuCheck } from "react-icons/lu";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@app/store";
import { selectReplyOption } from "@shared/@common/models/selectors";
import { setReplyOption } from "@shared/@common/models/slices/privacySlice";

interface ReplyPermissionDropdownProps {
  className?: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  lastClickedRef?: React.RefObject<HTMLButtonElement>;
  top?: number;
  left?: number;
  right?: number;
}

const ReplyPermissionDropdown = ({
  className,
  isOpen,
  setIsOpen,
  lastClickedRef,
  top,
  left,
  right,
}: ReplyPermissionDropdownProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const { replyOptions, header } = useLanguageContent([
    "components",
    "ReplyPermissionControl",
  ]);

  const replyOption = useSelector(selectReplyOption);

  const classNames = joinClassNames([
    styles["reply__permission__dropdown"],
    className,
  ]);

  const handleClick = (option: ReplyOptionType) => {
    dispatch(setReplyOption(option));
  };

  return (
    <Dropdown
      className={classNames}
      name="reply-dropdown"
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      lastClickedRef={lastClickedRef}
      top={top}
      left={left}
      right={right}
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
              onClick={() => handleClick(option.value)}
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
  );
};

export default ReplyPermissionDropdown;
