import { useState } from "react";

interface useLightboxPaginationProps {
  images: string[];
}

const useLightboxPagination = ({ images }: useLightboxPaginationProps) => {
  const [curImage, setCurImage] = useState(0);

  const moveNextImage = () => {
    setCurImage((prev) => {
      return prev + 1 > images.length - 1 ? 0 : prev + 1;
    });
  };

  const movePrevImage = () => {
    setCurImage((prev) => {
      return prev - 1 < 0 ? images.length - 1 : prev - 1;
    });
  };

  return {
    curImage,
    moveNextImage,
    movePrevImage,
  };
};

export default useLightboxPagination;
