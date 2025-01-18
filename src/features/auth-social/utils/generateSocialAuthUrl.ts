import { OauthType } from "@shared/auth/types";
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_REDIRECT_URI,
  KAKAO_REDIRECT_URI,
  KAKAO_REST_API_KEY,
} from "@shared/@common/constants";

/**
 * 제공된 OAuth 유형에 따라 소셜 인증 URL을 생성합니다.
 *
 * @param {OauthType} type - OAuth 제공자의 유형 (예: "google").
 * @returns {string} 제공된 제공자에 대한 인증 URL을 반환하며, 제공자가 지원되지 않는 경우 빈 문자열을 반환합니다.
 *
 * @example
 * const authUrl = generateSocialAuthUrl("google");
 * console.log(authUrl);
 * // 출력: "https://accounts.google.com/o/oauth2/v2/auth?client_id=...&redirect_uri=...&response_type=code&scope=email profile&state=google"
 */
const generateSocialAuthUrl = (type: OauthType): string | undefined => {
  let authorizationUrl = "";

  if (type === "google") {
    authorizationUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=email profile&state=${type}`;
  } else if (type === "kakao") {
    authorizationUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code&state=${type}`;
  }

  return authorizationUrl;
};

export default generateSocialAuthUrl;
