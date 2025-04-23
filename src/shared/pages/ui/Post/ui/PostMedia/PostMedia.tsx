import { Icon } from "@shared/@common/ui/icons";
import styles from "./PostMedia.module.css";
import { joinClassNames } from "@shared/@common/utils";
import {
  detectMedia,
  MediaType,
  PostImage,
  PostVideo,
  usePostContext,
} from "@shared/pages/ui/Post";
import { useLayoutEffect, useRef, useState } from "react";

interface PostMediaProps {
  className?: string;
}

const PostMedia = ({ className }: PostMediaProps) => {
  const classNames = joinClassNames([styles["post__media"], className]);
  const [width, setWidth] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [curIndex, setCurIndex] = useState(0);

  // postmedia의 너비 가져오기
  useLayoutEffect(() => {
    if (!wrapperRef.current) return;

    const wrapper = wrapperRef.current;

    const { width } = wrapper.getBoundingClientRect();

    setWidth(width);
  }, []);

  const { media: postMedia, originalPost } = usePostContext();

  const media = originalPost ? originalPost.media : postMedia;

  if (!media || media.length === 0) return null;

  const moveLeft = () => {
    setCurIndex((prev) => (prev - 1 < 0 ? media.length - 1 : prev - 1));
  };

  const moveRight = () => {
    setCurIndex((prev) => (prev + 1 > media.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={classNames} ref={wrapperRef}>
      <Icon
        iconName="arrowLeft"
        bgColor="black"
        iconColor="white"
        className={joinClassNames([
          styles["leading__icon"],
          curIndex > 0
            ? styles["leading__icon--visible"]
            : styles["leading__icon--invisible"],
        ])}
        onClick={moveLeft}
      />
      <Icon
        iconName="arrowRight"
        bgColor="black"
        iconColor="white"
        className={joinClassNames([
          styles["trailing__icon"],
          media.length > 1 && curIndex < media.length - 1
            ? styles["trailing__icon--visible"]
            : styles["trailing__icon--invisible"],
        ])}
        onClick={moveRight}
      />
      {(media as MediaType[]).map((medium, index) => {
        if (detectMedia(medium) === "image") {
          return (
            <PostImage
              key={index}
              medium={medium}
              index={index}
              distance={width * curIndex}
            />
          );
        } else if (detectMedia(medium) === "video") {
          return (
            <PostVideo
              key={index}
              medium={medium}
              distance={width * curIndex}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default PostMedia;
