import { useEffect } from "react";
import { getUserInfoFromCookie } from "@shared/auth/utils";

/**
 * OauthCallback 컴포넌트
 *
 * OAuth 인증 후 콜백 페이지에서 실행되며,
 * 쿠키에서 사용자 정보를 가져와 부모 창에 데이터를 전송하고
 * 팝업 창을 닫습니다.
 *
 * @returns {null} 컴포넌트 렌더링 없이 `null`을 반환합니다.
 */
const OauthCallback = () => {
  useEffect(() => {
    // 쿠키에서 OAuth 인증 후 사용자 정보를 가져옵니다.
    const userInfo = getUserInfoFromCookie("oauth_user");

    // 사용자 정보에서 이메일과 사용자 이름을 추출합니다.
    const { email, username } = userInfo;

    // 이메일이나 사용자 이름이 없으면 에러를 발생시킵니다.
    if (!email || !username) {
      throw new Error("사용자 데이터 전송 에러");
    }

    // 부모 창이 존재하면, 사용자 정보를 부모 창으로 전송합니다.
    if (window.opener) {
      window.opener.postMessage(userInfo, "http://localhost:5173");
    }

    // 팝업 창을 닫습니다.
    window.close();
  }, []);

  return null;
};

export default OauthCallback;
