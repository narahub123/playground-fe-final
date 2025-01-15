type BgThemeType = "light" | "dark" | "darkest";
type ColorThemeType =
  | "cornflowerblue"
  | "red"
  | "green"
  | "purple"
  | "orange"
  | "yellow";

type FontSizeType = "xs" | "s" | "b" | "l" | "xl";

type DeviceType = "web" | "mobile" | "tablet"; // PC, 모바일, 태블릿
type OSType = "windows" | "macOS" | "linux" | "android" | "iOS"; // 운영 체제
type BrowserType = "chrome" | "firefox" | "safari" | "edge" | "opera"; // 브라우저

type DeviceInfoType = {
  type: DeviceType;
  os: OSType;
  browser: BrowserType;
};

export type {
  BgThemeType,
  ColorThemeType,
  FontSizeType,
  DeviceInfoType,
  DeviceType,
  OSType,
  BrowserType,
};
