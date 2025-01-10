import styles from "./LightboxWrapper.module.css";
import { ReactNode, useState } from "react";
import { joinClassNames } from "@shared/@common/utils";
import { Portal } from "@shared/@common/ui/components";

interface LightboxWrapperProps {
  children: ReactNode;
  images: string[];
  className?: string;
}

const LightboxWrapper = ({
  className,
  images,
  children,
}: LightboxWrapperProps) => {
  // 이미지가 복수인 경우 사용
  const [curImage, setCurImage] = useState(0);
  const classNames = joinClassNames([styles["lightbox__wrapper"], className]);

  return (
    <Portal id="lightbox">
      <div className={classNames}>{children}</div>
    </Portal>
  );
};

export default LightboxWrapper;
