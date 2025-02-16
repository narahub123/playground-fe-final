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

type ParallelModals = "signup" | "login" | "flow";

type TwoFactorAuthenticationMethod = "sms" | "app" | "key" | "";

type TagTarget = "all" | "followers";
type MuteTarget = "all" | "notFollowing";
type MuteDuration = "forever" | "24h" | "7d" | "30d";
type MessageAllowSettings = "all" | "authenticated" | "none";

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
};
