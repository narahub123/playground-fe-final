import { Icons } from "@shared/@common/ui/icons";
import { IVoteDuration } from "../ui/Vote";

type ReplyOptionType = "all" | "following" | "authenticated" | "mentioned";

interface IReplyOption {
  value: ReplyOptionType;
  icon: keyof typeof Icons;
  text: string;
  description: string;
}

interface IVote {
  options: string[];
  duration: IVoteDuration | null;
}

interface IPostEditorPost {
  media: string[];
  vote: {
    options: string[];
    duration: IVoteDuration | null;
  };
}

type PostEditorToolbarButtonType =
  | "media"
  | "vote"
  | "emoticon"
  | "reserve"
  | "location";

interface IPostEditorToolbar {
  media: boolean;
  vote: boolean;
  emoticon: boolean;
  reserve: boolean;
  location: boolean;
}

export type {
  IReplyOption,
  ReplyOptionType,
  IPostEditorPost,
  IPostEditorToolbar,
  PostEditorToolbarButtonType,
  IVote,
};
