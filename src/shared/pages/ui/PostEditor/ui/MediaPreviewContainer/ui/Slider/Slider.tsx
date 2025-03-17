import { useLayoutEffect, useRef, useState } from "react";
import styles from "./Slider.module.css";
import { joinClassNames } from "@shared/@common/utils";
import MediaPreview from "../MediaPreview/MediaPreview";

interface SliderProps {
  media: string[];
  curStart: number;
}

const Slider = ({ media, curStart }: SliderProps) => {
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

    calculateWidth();

    window.addEventListener("resize", calculateWidth);

    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  return (
    <div className={styles["slider__wrapper"]} ref={wrapperRef}>
      <div className={styles["slider"]} style={{ gap }}>
        {media.map((medium, index) => (
          <MediaPreview
            key={index}
            medium={medium}
            className={joinClassNames([
              media.length > 1 ? styles["preview--multiple"] : "",
            ])}
            style={{
              transform: `translateX(${-(width + gap) * curStart}px)`,
              transition: "transform 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
