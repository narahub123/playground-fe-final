import { GenderType } from "@shared/auth/types";
import {
  IEmoji,
  SkintoneType,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";

type BgThemeType = "light" | "dark" | "darkest";
type ColorThemeType =
  | "cornflowerblue"
  | "red"
  | "green"
  | "purple"
  | "orange"
  | "yellow";

type FontSizeType = "xs" | "s" | "b" | "l" | "xl";

type DeviceType = "Web" | "Mobile" | "Tablet"; // PC, 모바일, 태블릿
type OSType = "Windows" | "MacOS" | "Linux" | "Android" | "iOS" | "Unknown"; // 운영 체제
type BrowserType =
  | "Chrome"
  | "Firefox"
  | "Safari"
  | "Edge"
  | "Opera"
  | "Unknown"; // 브라우저

type DeviceInfoType = {
  type: DeviceType;
  os: OSType;
  browser: BrowserType;
};

type LocationType = {
  country: string;
  state: string;
  city: string;
  county: string;
};

type ParallelModals =
  | "signup"
  | "login"
  | "flow"
  | "write"
  | "account"
  | "ownership"
  | "schedule"
  | "location"
  | "search_settings"
  | "search_advanced";

type StandAlonModals = "error" | "logout" | "explore" | "search_filter";
type VerificationModals = "ownership";

type TwoFactorAuthenticationMethod = "sms" | "app" | "key" | "";

type TagTarget = "all" | "followers";
type MuteTarget = "all" | "notFollowing";
type MuteDuration = "forever" | "24h" | "7d" | "30d";
type MessageAllowSettings = "all" | "authenticated" | "none";

interface ICountry {
  name: string;
  code: string;
  lang: string[];
}

interface IAccount {
  userId: string;
  profileImage: string;
  username: string;
  intro: string;
}

interface IBirth {
  year: number;
  month: number;
  date: number;
}

type UserRoleType = "ADMIN" | "USER";

interface ILocation {
  country: string;
  state: string;
  city: string;
  county?: string;
}

interface ILockStatus {
  isLocked: boolean;
  lockReason: "BRUTE_FORCE_DETECTED" | "TOO_MANY_LOGIN_FAILURES" | null;
  lockedAt: Date | null;
}

interface IFollowing {
  _id: string;
  userId: string;
  username: string;
  profileImage: string;
  followedAt: Date;
}

interface IFollower {
  userId: string;
  username: string;
  profileImage: string;
  followedAt: Date;
}

interface IUserPostAction {
  _id: string;
  userId: string;
  postId: string;
  type: "like" | "bookmark"; // enum이 아니라 string literal union 으로 표현
  isDeleted: boolean;
  deletedAt: string | null; // ISO string
  createdAt: string;
  updatedAt: string;
}

interface IExploreSettings {
  useDeviceLocation: boolean;
  selectedLocation: string;
  personalizeTrends: boolean;
  interests: string[];
}

interface IUser {
  _id: string;
  userId: string;
  username: string;
  phones: string[];
  emails: string[];
  birth: IBirth;
  gender: GenderType;
  userRole: UserRoleType;
  country: string;
  ip: string;
  location: ILocation;
  profileImage: string;
  profileCoverImage: string;
  intro: string;
  accountGroup: IAccount[];
  followings: IFollowing[];
  followers: IFollower[];
  isAuthorized: boolean;
  isAuthenticated: boolean;
  lockStatus: ILockStatus;
  skintoneType: SkintoneType;
  recentEmojis: IEmoji[];
  bookmarks: IUserPostAction[];
  likes: IUserPostAction[];
  createdAt: Date;
  pinnedPost?: string;
  exploreSettings: IExploreSettings;
}

interface IRepost {
  count: number;
  isReposted: boolean;
}

interface IPostActions {
  comments: number;
  reposts: number;
  likes: number;
  bookmarks: number;
  views: number;
}

interface IAuthor {
  _id: string;
  userId: string;
  username: string;
  profileImage: string;
  intro: string;
  followings: IFollowing[];
  followers: IFollower[];
}

interface IPostVoteOption {
  option: string;
  voters: string[];
}

interface IPostVote {
  options: IPostVoteOption[];
  duration: Date;
}

interface IRepostUser {
  _id: string;
  userId: string;
  username: string;
  repostId: string;
  repostedAt: string;
}

type PostType = "post" | "repost" | "quote" | "comment";

interface IPost {
  _id: string;
  type: PostType;
  author: IAuthor;
  text?: string;
  media?: string[];
  vote?: IPostVote;
  schedule?: Date;
  pin: boolean;
  actions: IPostActions;
  originalPostId: string;
  originalPost?: IPost;
  repostedAt?: string;
  quotedAt?: string;
  commentedAt?: string;
  createdAt: string;
  updatedAt: string;
  thread: IPost[];
  comments: IPost[];
  basePostId: string;
  isRepostedByCurrentUser: boolean;
}

export type {
  BgThemeType,
  ColorThemeType,
  FontSizeType,
  DeviceInfoType,
  DeviceType,
  OSType,
  BrowserType,
  LocationType,
  ParallelModals,
  TwoFactorAuthenticationMethod,
  TagTarget,
  MuteTarget,
  MuteDuration,
  MessageAllowSettings,
  StandAlonModals,
  IAccount,
  IUser,
  IBirth,
  ILocation,
  ILockStatus,
  UserRoleType,
  VerificationModals,
  IPost,
  IPostActions,
  IRepost,
  IAuthor,
  IFollower,
  IFollowing,
  IPostVote,
  IPostVoteOption,
  IRepostUser,
  IUserPostAction,
  ICountry,
  IExploreSettings,
};
