import { useAppDispatch } from "@app/store";
import { DeviceInfoType } from "@shared/@common/types";
import { useEffect } from "react";

const useDeviceInfo = (
  reducer: (value?: any) => { type: string; payload: any }
) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();

    let device: DeviceInfoType = {
      type: "Web",
      os: "Unknown",
      browser: "Unknown",
    };

    // 기기 구분
    device.type = /mobi|android|iphone|ipod/i.test(userAgent)
      ? "Mobile"
      : /ipad|tablet/i.test(userAgent)
      ? "Tablet"
      : "Web";

    // 운영 체제 구분
    device.os = /windows/.test(userAgent)
      ? "Windows"
      : /mac os/.test(userAgent) || /macintosh/.test(userAgent)
      ? "MacOS"
      : /linux/.test(userAgent)
      ? "Linux"
      : /android/.test(userAgent)
      ? "Android"
      : /iphone|ipad|ipod/.test(userAgent)
      ? "iOS"
      : "Unknown";

    // 브라우저 구분
    device.browser =
      /chrome/.test(userAgent) &&
      !/edge/.test(userAgent) &&
      !/opr/.test(userAgent)
        ? "Chrome"
        : /firefox/.test(userAgent)
        ? "Firefox"
        : /safari/.test(userAgent) && !/chrome/.test(userAgent)
        ? "Safari"
        : /edg/.test(userAgent)
        ? "Edge"
        : /opera|opr/.test(userAgent)
        ? "Opera"
        : "Unknown";

    dispatch(reducer(device));
  }, []);
  return;
};

export default useDeviceInfo;
