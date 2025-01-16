type BirthType = {
  year: string | number;
  month: string | number;
  date: string | number;
};

type NotificationInSignupType = {
  messages: boolean;
  replies: boolean;
  newFollower: boolean;
  posts: boolean;
};

export type { BirthType, NotificationInSignupType };
