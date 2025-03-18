import {
  FitType,
  RoundedType,
} from "@shared/@common/ui/components/Image/types";
import styles from "./Video.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { roundedValues } from "@shared/@common/ui/components/Image/data";

interface CustomVideoProps {
  width?: string | number;
  height?: string | number;
  border?: string;
  fit?: FitType;
  rounded?: RoundedType | string;
  className?: string;
  disabled?: boolean;
  onClick?: Function;
}

type VideoProps = CustomVideoProps &
  React.VideoHTMLAttributes<HTMLVideoElement>;

const Video = ({
  width,
  height,
  rounded,
  border,
  fit = "contain",
  className,
  disabled = false,
  onClick,
  ...videoProps
}: VideoProps) => {
  const classNames = joinClassNames([styles["video"], className]);

  return (
    <video
      className={classNames}
      style={{
        width: `${width}`,
        height: `${height}`,
        border: `${border}`,
        borderRadius: `${
          rounded ? roundedValues[rounded as RoundedType] || rounded : undefined
        }`,
        objectFit: `${fit}`,
        cursor: `${disabled || !onClick ? undefined : "pointer"}`,
        ...videoProps.style,
      }}
      {...videoProps}
      onClick={disabled || !onClick ? undefined : onClick}
      controls
    />
  );
};

export default Video;
