import styles from "./LightboxWrapper.module.css";
import { ReactNode } from "react";
import { joinClassNames } from "@shared/@common/utils";
import { Portal } from "@shared/@common/ui/components";
import { LightboxContextProvider } from "@shared/@common/ui/components/Lightbox/contexts";
import { useLightboxPagination } from "@shared/@common/ui/components/Lightbox/hooks";

interface LightboxWrapperProps {
  children: ReactNode;
  images: string[];
  onClose: () => void;
  isLightboxOpen: boolean;
  isLightboxPostOpen?: boolean;
  onOpenLightboxPost?: () => void;
  onCloseLightboxPost?: () => void;
  className?: string;
}

const LightboxWrapper = ({
  className,
  images,
  onClose,
  isLightboxOpen,
  isLightboxPostOpen,
  onOpenLightboxPost,
  onCloseLightboxPost,
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
    isLightboxPostOpen,
    onOpenLightboxPost,
    onCloseLightboxPost,
  };

  if (!isLightboxOpen) return null;

  return (
    <Portal id="lightbox">
      <LightboxContextProvider value={value}>
        <div className={classNames}>{children}</div>
      </LightboxContextProvider>
    </Portal>
  );
};

export default LightboxWrapper;
