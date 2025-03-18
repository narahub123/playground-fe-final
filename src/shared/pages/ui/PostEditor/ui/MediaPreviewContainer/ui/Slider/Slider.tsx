import { useLayoutEffect, useRef, useState } from "react";
import styles from "./Slider.module.css";
import { joinClassNames } from "@shared/@common/utils";
import MediaPreview from "../MediaPreview/MediaPreview";
import { useAppDispatch } from "@app/store";
import { removePostEditorMedia } from "@shared/pages/ui/PostEditor/models/slices/postEditorSlice";

interface SliderProps {
  media: string[];
  curStart: number;
  moveLeft: () => void;
}

const Slider = ({ media, curStart, moveLeft }: SliderProps) => {
  const dispatch = useAppDispatch();
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

  const handleDelete = (index: number) => {
    dispatch(removePostEditorMedia(index));

    // 현재 시작 slider가 미디어 개수보다 2작고 media 총개수가 2보다 큰 경우
    // 왼쪽으로 이동
    if (curStart === media.length - 2 && media.length > 2) {
      moveLeft();
    }
  };

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
            handleDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
