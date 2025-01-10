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
  ...imgProps
}: ImageProps) => {
  // 언어 설정

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
        ...imgProps.style,
      }}
      {...imgProps}
    />
  );
};

export default Image;
