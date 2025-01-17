import { getAccessToken } from "@features/auth-social/utils";
import { SUPPORTED_OAUTH_TYPES } from "@shared/auth/constants";
import { OauthType } from "@shared/auth/types";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const isSupportedOauth = (value: string): value is OauthType => {
  return SUPPORTED_OAUTH_TYPES.includes(value);
};

const OauthCallback = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    const fetchData = async () => {
      if (code && state && isSupportedOauth(state)) {
        try {
          // 엑세스 토큰을 얻기 위한 요청
          const result = await getAccessToken(code, state);

          if (result && result.accessToken) {
          } else {
            throw new Error("엑세스 토큰을 받지 못했습니다.");
          }
        } catch (error) {}
      } else {
        console.error("OAuth 인증 코드나 상태 값이 없습니다.");
      }
    };

    fetchData();
  }, [searchParams]);

  return null;
};

export default OauthCallback;
