import { Icons } from "@shared/@common/ui/icons";

type ReplyOptionType = "all" | "following" | "authenticated" | "mentioned";

interface IReplyOption {
  value: ReplyOptionType;
  icon: keyof typeof Icons;
  text: string;
  description: string;
}

interface IPostEditorPost {
  media: string[];
}

type PostEditorToolbarButtonType =
  | "media"
  | "vote"
  | "emoticon"
  | "reservation"
  | "location";

interface IPostEditorToolbar {
  media: boolean;
  vote: boolean;
  emoticon: boolean;
  reservation: boolean;
  location: boolean;
}

export type {
  IReplyOption,
  ReplyOptionType,
  IPostEditorPost,
  IPostEditorToolbar,
  PostEditorToolbarButtonType,
};
