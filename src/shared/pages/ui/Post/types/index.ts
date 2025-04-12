import { IPost } from "@shared/@common/types";

interface IPostContext extends IPost {}

interface IRect {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export type { IPostContext, IRect };
