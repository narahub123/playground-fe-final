import { Icons } from "@shared/@common/ui/icons";
import { IVoteDuration } from "../ui/Vote";
import { IPost } from "@shared/@common/types";

type ReplyOptionType = "all" | "followings" | "authenticated" | "mentioned";

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
  originalPost?: IPost;
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
