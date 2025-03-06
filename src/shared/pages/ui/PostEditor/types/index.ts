import { Icons } from "@shared/@common/ui/icons";

type ReplyOptionType = "all" | "following" | "authenticated" | "mentioned";

interface IReplyOption {
  value: ReplyOptionType;
  icon: keyof typeof Icons;
  text: string;
  description: string;
}

export type { IReplyOption, ReplyOptionType };
