import { IPost } from "@shared/@common/types";

interface IPostContext extends IPost {}

interface IRect {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

type MoreOptionType =
  | "following"
  | "list"
  | "mute"
  | "block"
  | "view"
  | "embed"
  | "report"
  | "groupNote";

type MoreMyOptionType =
  | "delete"
  | "main"
  | "list"
  | "replyOption"
  | "view"
  | "embed"
  | "analytics"
  | "groupNote";

interface IOgtags {
  image: string;
  title: string;
  desc: string;
}

type MediaType = "image" | "video";

interface IVideoTime {
  currentTime: number;
  duration: number;
}

interface IVideoControls {
  isPlaying: boolean;
  isMuting: boolean;
  isSettingsOpen: boolean;
  isPipMode: boolean;
  isFullscreen: boolean;
  time: IVideoTime;
  speed: VideoSpeed;
  quality: VideoQuality;
  volume: number;
  isDialOpen: boolean;
}

type VideoSpeed = 0.25 | 0.5 | 0.75 | 1 | 1.25 | 1.5 | 1.75 | 2;

type VideoQuality = "auto" | "320p" | "480p" | "720p" | "1080p";

export type {
  IPostContext,
  IRect,
  MoreOptionType,
  MoreMyOptionType,
  IOgtags,
  MediaType,
  IVideoControls,
  VideoSpeed,
  VideoQuality,
  IVideoTime,
};
