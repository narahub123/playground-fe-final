type BirthType = {
  year: number;
  month: number;
  date: number;
};

type NotificationInSignupType = {
  messages: boolean;
  replies: boolean;
  newFollower: boolean;
  posts: boolean;
};

type GenderType = "f" | "m" | "b" | "n" | "";

export type { BirthType, NotificationInSignupType, GenderType };
