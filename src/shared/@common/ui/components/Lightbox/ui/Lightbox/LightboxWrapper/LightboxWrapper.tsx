import styles from "./LightboxWrapper.module.css";
import { ReactNode, useState } from "react";
import { joinClassNames } from "@shared/@common/utils";
import { Portal } from "@shared/@common/ui/components";
import { LightboxContextProvider } from "../../../contexts";
import { useLightboxPagination } from "../../../hooks";

interface LightboxWrapperProps {
  children: ReactNode;
  images: string[];
  onClose: () => void;
  className?: string;
}

const LightboxWrapper = ({
  className,
  images,
  onClose,
  children,
}: LightboxWrapperProps) => {
  const { curImage, moveNextImage, movePrevImage } = useLightboxPagination({
    images,
  });

  const classNames = joinClassNames([styles["lightbox__wrapper"], className]);

  const value = {
    images,
    curImageIndex: curImage,
    moveNextImage,
    movePrevImage,
    onClose,
  };

  return (
    <Portal id="lightbox">
      <LightboxContextProvider value={value}>
        <div className={classNames}>{children}</div>
      </LightboxContextProvider>
    </Portal>
  );
};

export default LightboxWrapper;
