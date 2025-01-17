import { getAccessToken, getOauthUserInfo } from "@features/auth-social/utils";
import { SUPPORTED_OAUTH_TYPES } from "@shared/auth/constants";
import { OauthType } from "@shared/auth/types";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

/**
 * 주어진 값을 기준으로 지원되는 OAuth 타입인지 확인하는 타입 가드 함수
 *
 * @param value - 확인하려는 OAuth 타입 문자열
 * @returns - 해당 값이 지원되는 OAuth 타입이면 true, 아니면 false 반환
 */
const isSupportedOauth = (value: string): value is OauthType => {
  return SUPPORTED_OAUTH_TYPES.includes(value);
};

/**
 * OAuth 인증 콜백 처리 컴포넌트
 *
 * URL 쿼리 파라미터에서 인증 코드(code)와 상태(type)를 추출하여,
 * 이를 기반으로 엑세스 토큰을 요청하고 사용자 정보를 얻습니다.
 * 해당 정보를 콘솔에 출력하거나 오류를 처리합니다.
 */
const OauthCallback = () => {
  // URL에서 쿼리 파라미터를 가져오는 훅
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // URL 쿼리 파라미터에서 code와 state 값을 가져옴
    const code = searchParams.get("code");
    const type = searchParams.get("state");

    // 엑세스 토큰과 사용자 정보를 가져오는 비동기 함수
    const fetchData = async () => {
      // code와 type이 유효하고, 지원되는 OAuth 타입인지 확인
      if (code && type && isSupportedOauth(type)) {
        try {
          // 엑세스 토큰을 얻기 위한 요청
          const accessToken = await getAccessToken(code, type);

          // 액세스 토큰이 정상적으로 반환되었으면 사용자 정보를 요청
          if (accessToken) {
            const userData = await getOauthUserInfo(accessToken, type);

            // 사용자 정보 콘솔 출력
            console.log(userData);
          } else {
            throw new Error("엑세스 토큰을 받지 못했습니다.");
          }
        } catch (error: any) {
          // 오류 발생 시 에러 메시지 출력
          if (error instanceof Error) {
            console.error("OAuth 인증 오류:", error.message);
          } else {
            console.error("알 수 없는 오류 발생:", error);
          }

          // 네트워크 오류가 발생한 경우 처리
          if (error.message.includes("Failed to fetch")) {
            console.error(
              "네트워크 오류가 발생했습니다. 인터넷 연결을 확인하세요."
            );
          }

          // API 요청이 실패했을 때 처리
          if (error.message.includes("엑세스 토큰을 받지 못했습니다.")) {
            console.error(
              "서버에서 엑세스 토큰을 반환하지 않았습니다. API 서버를 확인하세요."
            );
          }
        }
      } else {
        // code나 state 값이 없을 경우
        console.error("OAuth 인증 코드나 상태 값이 없습니다.");
      }
    };

    // 데이터를 가져오는 함수 호출
    fetchData();
  }, [searchParams]);

  // 이 컴포넌트는 화면에 아무것도 렌더링하지 않음
  return null;
};

export default OauthCallback;
