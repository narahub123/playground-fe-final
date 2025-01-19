import { getUserInfoFromCookie } from "@shared/auth/utils";
import { useEffect } from "react";

const OauthCallback = () => {
  useEffect(() => {
    // 쿠키 정보 받기
    const userInfo = getUserInfoFromCookie("oauth_user");

    const { email, profileImage, username, birth, gender, phone } = userInfo;

    if (!email || !username) {
      throw new Error("사용자 데이터 전송 에러");
    }

    console.log(email, profileImage, username, birth, gender, phone);
  }, []);
  return null;
};

export default OauthCallback;
