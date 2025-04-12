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

export type { IPostContext, IRect, MoreOptionType };
