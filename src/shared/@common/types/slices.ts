import { GenderType } from "@shared/auth/types";

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

type ParallelModals = "signup" | "login" | "flow" | "write" | "account" | 'ownership';
type StandAlonModals = "error" | "logout";

type TwoFactorAuthenticationMethod = "sms" | "app" | "key" | "";

type TagTarget = "all" | "followers";
type MuteTarget = "all" | "notFollowing";
type MuteDuration = "forever" | "24h" | "7d" | "30d";
type MessageAllowSettings = "all" | "authenticated" | "none";

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

interface IUser {
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
  followings: string[];
  followers: string[];
  isAuthorized: boolean;
  isAuthenticated: boolean;
  lockStatus: ILockStatus;
  createdAt: Date;
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
};
