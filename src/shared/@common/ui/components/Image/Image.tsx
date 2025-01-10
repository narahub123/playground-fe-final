import styles from "./Image.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { FitType, RoundedType } from "./types";
import { roundedValues } from "./data";

interface CustomImageProps {
  width?: string;
  height?: string;
  border?: string;
  fit?: FitType;
  rounded?: RoundedType | string;
  className?: string;
  disabled?: boolean;
  onClick?: Function;
}

type ImageProps = CustomImageProps & React.ImgHTMLAttributes<HTMLImageElement>;

const Image = ({
  width,
  height,
  rounded,
  border,
  fit = "fill",
  className,
  disabled = false,
  onClick,
  ...imgProps
}: ImageProps) => {
  const classNames = joinClassNames([styles["image"], className]);

  return (
    <img
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
        ...imgProps.style,
      }}
      {...imgProps}
      onClick={disabled || !onClick ? undefined : onClick}
    />
  );
};

export default Image;
