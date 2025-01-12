import { useState } from "react";

const useLightboxDisclosure = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const onOpenLightbox = () => {
    setIsLightboxOpen(true);
  };

  const onCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  return {
    isLightboxOpen,
    onOpenLightbox,
    onCloseLightbox,
  };
};

export default useLightboxDisclosure;
