import {
  FitType,
  RoundedType,
} from "@shared/@common/ui/components/Image/types";
import styles from "./Video.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { roundedValues } from "@shared/@common/ui/components/Image/data";
import { forwardRef } from "react";

interface CustomVideoProps {
  width?: string | number;
  height?: string | number;
  border?: string;
  fit?: FitType;
  rounded?: RoundedType | string;
  className?: string;
  disabled?: boolean;
  controls?: boolean;
  onClick?: Function;
}

type VideoProps = CustomVideoProps &
  React.VideoHTMLAttributes<HTMLVideoElement>;

const Video = forwardRef<HTMLVideoElement, VideoProps>(
  (
    {
      width,
      height,
      rounded,
      border,
      fit = "contain",
      className,
      disabled = false,
      onClick,
      controls = true,
      ...videoProps
    },
    ref
  ) => {
    const classNames = joinClassNames([styles["video"], className]);

    return (
      <video
        className={classNames}
        style={{
          width: `${width}`,
          height: `${height}`,
          border: `${border}`,
          borderRadius: `${
            rounded
              ? roundedValues[rounded as RoundedType] || rounded
              : undefined
          }`,
          objectFit: `${fit}`,
          cursor: `${disabled || !onClick ? undefined : "pointer"}`,
          ...videoProps.style,
        }}
        {...videoProps}
        onClick={disabled || !onClick ? undefined : onClick}
        controls={controls}
        ref={ref}
      />
    );
  }
);

export default Video;
