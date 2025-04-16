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
}

export type {
  IPostContext,
  IRect,
  MoreOptionType,
  MoreMyOptionType,
  IOgtags,
  MediaType,
  IVideoControls,
};
