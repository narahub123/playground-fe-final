import styles from "./Icon.module.css";
import common from "@shared/@common/styles/common.module.css";
import { Icons } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import {
  ColorBasic,
  ColorBasicWithInherit,
  SizeBasic,
  SizeBasicWithFull,
  SizeExtended,
  BorderStyle,
} from "@shared/@common/types";

interface IconCustomProps {
  iconName: keyof typeof Icons;
  onClick?: (value?: any) => void;
  iconSize?: SizeExtended;
  iconColor?: ColorBasicWithInherit;
  bgSize?: SizeExtended;
  bgColor?: ColorBasic;
  borderWidth?: SizeBasic;
  borderStyle?: BorderStyle;
  borderColor?: ColorBasic;
  rounded?: SizeBasicWithFull;
  className?: string;
  disabled?: boolean;
}

type IconProps = IconCustomProps & React.HTMLAttributes<HTMLElement>;

const Icon = ({
  iconName,
  onClick,
  className,
  iconSize = "md",
  iconColor = "inherit",
  bgSize = "md",
  bgColor = "white",
  borderWidth,
  borderStyle,
  borderColor,
  rounded = "full",
  disabled = false,
  ...props
}: IconProps) => {
  const classNames = joinClassNames([
    onClick ? styles["button"] : styles["icon"],
    iconSize && common[`fontsize--${iconSize}`],
    iconColor && common[`color--${iconColor}`],
    bgSize && common[`background--size--${bgSize}`],
    bgColor
      ? onClick
        ? common[`background--color--${bgColor}`]
        : styles[`icon--background--color--${bgColor}`]
      : "",
    borderWidth && common[`border--width--${borderWidth}`],
    borderStyle && common[`border--style--${borderStyle}`],
    borderColor && common[`border--color--${borderColor}`],
    rounded && common[`rounded--${rounded}`],
    className,
  ]);

  const Comp = Icons[iconName];

  return onClick ? (
    <button
      className={classNames}
      {...props}
      style={{
        ...props.style,
      }}
      onClick={onClick}
    >
      <Comp />
    </button>
  ) : (
    <span
      className={classNames}
      {...props}
      style={{
        ...props.style,
      }}
      aria-hidden="true" // 아이콘이 장식용으로 쓰이는 경우 스크린 리더가 완전히 무시함
    >
      <Comp />
    </span>
  );
};

export default Icon;
