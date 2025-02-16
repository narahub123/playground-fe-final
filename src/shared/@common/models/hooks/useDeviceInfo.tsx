import { DeviceInfoType } from "@shared/@common/types";
import { useEffect, useState } from "react";

const useDeviceInfo = () => {
  const [device, setDevice] = useState<DeviceInfoType>({
    type: "Web",
    os: "Unknown",
    browser: "Unknown",
  });

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR 환경 방어 코드
    const userAgent = window.navigator.userAgent.toLowerCase();

    setDevice({
      type: /mobi|android|iphone|ipod/i.test(userAgent)
        ? "Mobile"
        : /ipad|tablet/i.test(userAgent)
        ? "Tablet"
        : "Web",
      os: /windows/.test(userAgent)
        ? "Windows"
        : /mac os|macintosh/.test(userAgent)
        ? "MacOS"
        : /linux/.test(userAgent)
        ? "Linux"
        : /android/.test(userAgent)
        ? "Android"
        : /iphone|ipad|ipod/.test(userAgent)
        ? "iOS"
        : "Unknown",
      browser: /edg/.test(userAgent)
        ? "Edge"
        : /chrome/.test(userAgent) && !/opr|opera/.test(userAgent)
        ? "Chrome"
        : /firefox/.test(userAgent)
        ? "Firefox"
        : /safari/.test(userAgent) && !/chrome/.test(userAgent)
        ? "Safari"
        : /opr|opera/.test(userAgent)
        ? "Opera"
        : "Unknown",
    });
  }, []);

  return device;
};

export default useDeviceInfo;
