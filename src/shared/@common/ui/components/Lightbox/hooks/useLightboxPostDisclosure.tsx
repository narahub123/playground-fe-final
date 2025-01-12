import { useState } from "react";

const useLightboxPostDisclosure = () => {
  const [isLightboxPostOpen, setIsLightboxPostOpen] = useState(false);

  const onOpenLightboxPost = () => {
    setIsLightboxPostOpen(true);
  };

  const onCloseLightboxPost = () => {
    setIsLightboxPostOpen(false);
  };

  return {
    isLightboxPostOpen,
    onOpenLightboxPost,
    onCloseLightboxPost,
  };
};

export default useLightboxPostDisclosure;
