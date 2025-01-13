type BirthType = {
  year: string | number;
  month: string | number;
  date: string | number;
};

type NotificationInSignupType = {
  message: boolean;
  comment: boolean;
  following: boolean;
  newPost: boolean;
};

export type { BirthType, NotificationInSignupType };
