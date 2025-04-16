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

  // pip 모드를 벗어난 경우 pip 모드 변경하기
  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    const onExipPip = () => {
      setControls((prev) => {
        if (prev.isPipMode) return { ...prev, isPipMode: false };
        else return prev;
      });
    };

    const onExitFullscreen = () => {
      if (controls.isFullscreen && !document.fullscreenElement) {
        setControls((prev) => ({
          ...prev,
          isFullscreen: false,
        }));
      }
    };

    video.addEventListener("leavepictureinpicture", onExipPip);
    video.addEventListener("fullscreenchange", onExitFullscreen);

    return () => {
      video.removeEventListener("leavepictureinpicture", onExipPip);
      video.removeEventListener("fullscreenchange", onExitFullscreen);
    };
  }, [controls.isFullscreen]);

  const { author, _id } = usePostContext();
  const { userId } = author;

  const handlePlay = (
    e: React.MouseEvent<HTMLDivElement | HTMLVideoElement, MouseEvent>
  ) => {
    if (!videoRef.current) return;
    console.log("----------------- handlePlay 시작 -----------------");

    e.preventDefault();

    if (controls.isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setControls((prev) => ({
      ...prev,
      isPlaying: !prev.isPlaying,
    }));

    console.log("----------------- handlePlay 종료 -----------------");
  };

  const handleMute = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!videoRef.current) return;
    console.log("----------------- handleMute 시작 -----------------");

    e.preventDefault();

    // 현재 묵음인 경우
    if (controls.isMuting) {
      videoRef.current.setAttribute("muted", "false");
    } else {
      // 현재 묵음이 아닌 경우
      videoRef.current.setAttribute("muted", "true");
    }

    setControls((prev) => ({
      ...prev,
      isMuting: !prev.isMuting,
    }));

    console.log("----------------- handleMute 종료 -----------------");
  };

  const handleSettings = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!videoRef.current) return;
    console.log("----------------- handleSettings 시작 -----------------");

    e.preventDefault();

    setControls((prev) => ({
      ...prev,
      isSettingsOpen: !prev.isSettingsOpen,
    }));

    console.log("----------------- handleSettings 종료 -----------------");
  };

  const handlePipMode = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!videoRef.current) return;
    console.log("----------------- handlePipMode 시작 -----------------");

    e.preventDefault();

    if (controls.isPipMode) {
      document.exitPictureInPicture();
    } else {
      videoRef.current.requestPictureInPicture();
    }

    setControls((prev) => ({
      ...prev,
      isPipMode: !prev.isPipMode,
    }));

    console.log("----------------- handlePipMode 종료 -----------------");
  };

  const handleFullScreen = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!videoRef.current) return;
    console.log("----------------- handleFullScreen 시작 -----------------");

    e.preventDefault();

    if (controls.isFullscreen) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }

    setControls((prev) => ({
      ...prev,
      isFullscreen: !prev.isFullscreen,
    }));

    console.log("----------------- handleFullScreen 종료 -----------------");
  };

  const handleClick = {
    play: handlePlay,
    mute: handleMute,
    settings: handleSettings,
    pip: handlePipMode,
    fullscreen: handleFullScreen,
  };

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
          onClick={handlePlay}
        />
        <PostVideoControls controls={controls} onClick={handleClick} />
      </Link>
    </div>
  );
};

export default PostVideo;
