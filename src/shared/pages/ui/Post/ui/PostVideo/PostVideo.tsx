import styles from "./PostVideo.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { getDisplay } from "@shared/@common/models/selectors";
import { joinClassNames } from "@shared/@common/utils";
import {
  IVideoControls,
  PostVideoControls,
  VideoQuality,
  VideoSpeed,
} from "@shared/pages/ui/Post";
import Video from "@shared/pages/ui/Video/Video";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

interface PostVideoProps {
  className?: string;
  medium: string;
  distance: number;
}

const PostVideo = ({ className, medium, distance }: PostVideoProps) => {
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
    speed: 1,
    quality: "auto",
    volume: 1,
    isDialOpen: false,
  };
  const [controls, setControls] = useState<IVideoControls>(intialState);

  const { isAutoplayEnabled } = useSelector(getDisplay);

  const getTime = (video: HTMLVideoElement) => {
    setControls((prev) => {
      if (video.currentTime === video.duration) {
        return {
          ...prev,
          isPlaying: false,
          time: {
            currentTime: video.currentTime,
            duration: video.duration,
          },
        };
      } else
        return {
          ...prev,
          time: {
            currentTime: video.currentTime,
            duration: video.duration,
          },
        };
    });
  };

  // autoplay 설정이 되어 있는 경우 동영상이 화면안에 들어오면 재생하기
  useEffect(() => {
    const observeVideos = () => {
      if (!videoRef.current) return;
      const video = videoRef.current;

      const options: IntersectionObserverInit = {
        root: null,
        rootMargin: "",
        threshold: 1,
      };

      const callback: IntersectionObserverCallback = (entries) => {
        if (entries[0].isIntersecting) {
          if (isAutoplayEnabled) {
            video.play();
            getTime(video);
            setControls((prev) => {
              if (!prev.isPlaying) {
                return {
                  ...prev,
                  isPlaying: true,
                };
              } else return prev;
            });
          }
        } else {
          video.pause();
        }
      };

      const observer = new IntersectionObserver(callback, options);

      observer.observe(video);

      return observer;
    };

    // 즉시 실행
    let observer = observeVideos();

    // 비디오가 동적으로 렌더링될 수 있는 경우 load 이벤트도 사용
    const handleLoad = () => {
      if (observer) observer.disconnect();
      observer = observeVideos();
    };

    window.addEventListener("loadeddata", handleLoad);

    return () => {
      window.removeEventListener("loadeddata", handleLoad);
      if (observer) observer.disconnect();
    };
  }, []);

  // 시간 표시
  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    getTime(video);

    // 재생 중인 경우
    if (controls.isPlaying) {
      const interval = setInterval(() => {
        getTime(video);
      }, 1000);

      return () => clearInterval(interval);
    }

    video.addEventListener("loadedmetadata", () => getTime(video));

    return () => {
      video.removeEventListener("loadedmetadata", () => getTime(video));
    };
  }, [controls.isPlaying]);

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

  useEffect(() => {}, []);

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

  const onClose = () => {
    setControls((prev) => {
      if (prev.isSettingsOpen) {
        return {
          ...prev,
          isSettingsOpen: false,
        };
      } else return prev;
    });
  };

  const handleSpeed = (speed: VideoSpeed) => {
    if (!videoRef.current) return;
    console.log("----------------- handleSpeed 시작 -----------------");

    const video = videoRef.current;

    console.log(video.playbackRate);

    if (video.playbackRate !== speed) {
      video.playbackRate = speed;
    }

    setControls((prev) => {
      if (prev.speed !== speed) {
        return {
          ...prev,
          speed,
        };
      } else return prev;
    });
    console.log("----------------- handleSpeed 종료 -----------------");
  };

  const handleQuality = (quality: VideoQuality) => {
    if (!videoRef.current) return;
    console.log("----------------- handleQuality 시작 -----------------");
    setControls((prev) => {
      if (prev.quality !== quality) {
        return {
          ...prev,
          quality,
        };
      } else return prev;
    });
    console.log("----------------- handleQuality 종료 -----------------");
  };

  const handleTime = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!videoRef.current) return;
    console.log("----------------- handleTime 시작 -----------------");
    e.preventDefault();
    e.stopPropagation();

    const video = videoRef.current;

    const target = e.currentTarget;

    // rail의 너비
    const { width } = target.getBoundingClientRect();

    // 클릭한 위치
    const xPos = e.nativeEvent.offsetX;

    // 변경 시간 계산
    const newCurrentTime = (xPos / width) * controls.time.duration;

    // 변경된 시간 적용
    video.currentTime = newCurrentTime;

    handleCurrentTime(newCurrentTime);

    console.log("----------------- handleTime 종료 -----------------");
  };

  const handleVolume = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!videoRef.current) return;
    console.log("----------------- handleVolue 시작 -----------------");
    e.preventDefault();
    e.stopPropagation();

    const video = videoRef.current;

    const yPos = e.nativeEvent.offsetY;

    const volume = (96 - yPos) / 96;

    video.volume = volume;

    handleCurrentVolume(volume);

    console.log("----------------- handleVolue 종료 -----------------");
  };

  const handleCurrentTime = (newCurrentTime: number) => {
    console.log("----------------- handleThumb 시작 -----------------");

    setControls((prev) => ({
      ...prev,
      time: {
        ...prev.time,
        currentTime: newCurrentTime,
      },
    }));

    console.log("----------------- handleThumb 종료 -----------------");
  };

  const handleCurrentVolume = (newVolume: number) => {
    setControls((prev) => {
      if (prev.volume !== newVolume) {
        return {
          ...prev,
          volume: newVolume,
        };
      } else return prev;
    });
  };

  const onDialOpen = () => {
    setControls((prev) => {
      if (!prev.isDialOpen) {
        return {
          ...prev,
          isDialOpen: true,
        };
      } else return prev;
    });
  };
  const onDialClose = () => {
    setControls((prev) => {
      if (prev.isDialOpen) {
        return {
          ...prev,
          isDialOpen: false,
        };
      } else return prev;
    });
  };

  const handleClick = {
    play: handlePlay,
    mute: handleMute,
    settings: handleSettings,
    pip: handlePipMode,
    fullscreen: handleFullScreen,
    time: handleTime,
    volume: handleVolume,
  };

  return (
    <div
      className={classNames}
      style={{
        transform: `translateX(${-distance}px)`,
        transition: "transform 0.3s ease",
      }}
    >
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
      <PostVideoControls
        controls={controls}
        onClick={handleClick}
        onClose={onClose}
        handleSpeed={handleSpeed}
        handleQuality={handleQuality}
        handleCurrentTime={handleCurrentTime}
        handleCurrentVolume={handleCurrentVolume}
        onDialClose={onDialClose}
        onDialOpen={onDialOpen}
      />
    </div>
  );
};

export default PostVideo;
