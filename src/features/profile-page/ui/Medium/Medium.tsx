import { IPost } from "@shared/@common/types";
import styles from "./Medium.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { TbBoxMultipleFilled } from "react-icons/tb";
import { detectMedia, formatVideoTime } from "@shared/pages/ui/Post";
import { useEffect, useRef, useState } from "react";
import { Text } from "@shared/@common/ui/components";

interface MediumProps {
  className?: string;
  post: IPost;
}

const Medium = ({ className, post }: MediumProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [time, setTime] = useState(0);
  const classNames = joinClassNames([styles["medium__wrapper"], className]);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    const getDuration = () => {
      if (!videoRef.current) return;

      setTime(videoRef.current.duration);
    };

    video.addEventListener("loadedmetadata", getDuration);

    return () => {
      video.removeEventListener("loadedmetadata", getDuration);
    };
  }, []);

  if (!post.media || post.media.length === 0) return null;

  const first = post.media[0];

  const isMultiple = post.media.length > 1;

  const type = detectMedia(first);

  return (
    <li className={classNames}>
      {isMultiple && <TbBoxMultipleFilled className={styles["icon"]} />}
      {type === "video" && (
        <span className={styles["time"]}>
          <Text className={styles["text"]}>{formatVideoTime(time)}</Text>
        </span>
      )}

      {type === "image" ? (
        <img
          src={first}
          alt=""
          style={{ objectFit: "cover" }}
          className={styles["medium"]}
        />
      ) : (
        <video
          ref={videoRef}
          src={first}
          style={{ objectFit: "cover" }}
          className={styles["medium"]}
        />
      )}
    </li>
  );
};

export default Medium;
