import styles from "./PostVideo.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import {
  IVideoControls,
  PostVideoControls,
  usePostContext,
} from "@shared/pages/ui/Post";
import Video from "@shared/pages/ui/Video/Video";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface PostVideoProps {
  className?: string;
  medium: string;
  index: number;
  distance: number;
}

const PostVideo = ({ className, medium, index, distance }: PostVideoProps) => {
  // 언어 설정
  const { videoTitle } = useLanguageContent(["post", "PostVideo"]);
  const classNames = joinClassNames([styles["post__video"], className]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const intialState: IVideoControls = {
    isPlaying: false,
    isMuting: false,
    isSettingsOpen: false,
    isPipMode: false,
    isFullscreen: false,
    time: {
      currentTime: 0,
      duration: 0,
    },
  };
  const [controls, setControls] = useState<IVideoControls>(intialState);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    const getTime = () => {
      setControls((prev) => ({
        ...prev,
        time: {
          currentTime: video.currentTime,
          duration: video.duration,
        },
      }));
    };

    video.addEventListener("loadedmetadata", getTime);

    return () => {
      video.removeEventListener("loadedmetadata", getTime);
    };
  }, []);

  const { author, _id } = usePostContext();
  const { userId } = author;

  return (
    <div
      className={classNames}
      style={{
        transform: `translateX(${-distance}px)`,
        transition: "transform 0.3s ease",
      }}
    >
      <Link to={`/${userId}/status/${_id}/video/${index}`}>
        <Video
          src={medium}
          fit="contain"
          rounded="25px"
          className={styles["video"]}
          title={videoTitle}
          controls={false}
          ref={videoRef}
        />
        <PostVideoControls controls={controls} />
      </Link>
    </div>
  );
};

export default PostVideo;
