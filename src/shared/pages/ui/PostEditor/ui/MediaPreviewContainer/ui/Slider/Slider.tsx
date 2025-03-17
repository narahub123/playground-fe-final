import { useLayoutEffect, useRef, useState } from "react";
import ImagePreview from "../ImagePreview/ImagePreview";
import VideoPreview from "../VideoPreview/VideoPreview";
import styles from "./Slider.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface SliderProps {
  images: string[];
  videos: string[];
  curStart: number;
}

const Slider = ({ images, videos, curStart }: SliderProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const gap = 10;
  const [width, setWidth] = useState(0);

  //   슬라이더 wrapper의 너비를 알아내기
  useLayoutEffect(() => {
    if (!wrapperRef.current) return;
    const wrapper = wrapperRef.current;

    const calculateWidth = () => {
      const wrapperWidth = wrapper.getBoundingClientRect().width;

      const width = (wrapperWidth - gap) / 2;
      setWidth(width);
    };

    window.addEventListener("resize", calculateWidth);

    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  return (
    <div className={styles["slider__wrapper"]} ref={wrapperRef}>
      <div className={styles["slider"]} style={{ gap }}>
        {images.map((image, index) => (
          <ImagePreview
            image={image}
            key={`image_${index + 1}`}
            className={joinClassNames([
              images.length > 1 ? styles["preview--multiple"] : "",
            ])}
            style={{
              transform: `translateX(-${(width + gap) * curStart}px)`,
              transition: "transform 0.3s ease",
            }}
          />
        ))}
        {videos.map((video, index) => (
          <VideoPreview video={video} key={`video_${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
