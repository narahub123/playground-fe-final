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
  innerHtml: string;
  textLength: number;
  media: string[];
  vote: {
    options: string[];
    duration: IVoteDuration | null;
  };
  schedule?: Date;
}

type PostEditorToolbarButtonType =
  | "media"
  | "vote"
  | "emoji"
  | "schedule"
  | "location";

interface IPostEditorToolbar {
  media: boolean;
  vote: boolean;
  emoji: boolean;
  schedule: boolean;
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
