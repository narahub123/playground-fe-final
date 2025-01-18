import { OauthType } from "@shared/auth/types";

// Google OAuth 사용자 데이터 타입 정의
interface GoogleUserData {
  email: string; // 사용자의 이메일 주소
  username: string; // 사용자의 이름
  profileImage: string; // 사용자의 프로필 이미지 URL
}

// Kakao OAuth 사용자 데이터 타입 정의
interface KakaoUserData {
  email: string; // 사용자의 이메일 주소
  username: string; // 사용자의 이름
  profileImage: string; // 사용자의 프로필 이미지 URL
}

// UserData 타입을 설정 (다른 서비스에 대해서는 추가 가능)
type UserData = GoogleUserData | KakaoUserData;

/**
 * OAuth 제공자로부터 사용자 정보를 가져오는 함수
 *
 * 이 함수는 제공된 OAuth 타입에 맞는 API를 통해 사용자 정보를 요청합니다.
 * - 현재는 Google에 대해서만 처리하며, 추가적인 OAuth 서비스가 필요할 경우 다른 타입을 처리할 수 있습니다.
 *
 * @param token - OAuth 인증을 통해 받은 액세스 토큰 (API 요청에 사용)
 * @param type - OAuth 제공자의 타입 (예: 'google', 'facebook' 등)
 * @returns UserData | undefined - 사용자 정보 (이메일, 사용자명, 프로필 이미지)
 * @throws 사용자 정보 취득 실패 시 에러를 발생시킴
 */
const getOauthUserInfo = async (
  token: string,
  type: OauthType
): Promise<UserData | undefined> => {
  // 토큰이나 타입이 유효하지 않으면 함수 종료
  if (!token || !type) return;

  try {
    let requestUrl = ""; // 요청할 URL을 저장할 변수
    let userData: UserData | undefined; // 사용자 정보를 저장할 변수

    // 'google' 타입에 대해서 처리
    if (type === "google") {
      requestUrl = "https://www.googleapis.com/userinfo/v2/me"; // Google API의 사용자 정보 요청 URL
    } else if (type === "kakao") {
      requestUrl = "https://kapi.kakao.com/v2/user/me"; // kakao API의 사용자 정보 요청 URL
    } else {
      throw new Error("지원되지 않는 OAuth 타입입니다.");
    }

    // 사용자 정보 요청
    const response = await fetch(requestUrl, {
      method: "GET", // GET 방식으로 요청
      headers: {
        Authorization: `Bearer ${token}`, // Authorization 헤더에 Bearer 토큰 포함
      },
    });

    // 응답 실패 시 처리
    if (!response.ok) {
      const errorText = await response.text(); // 응답 본문을 텍스트로 확인
      console.error(`Error: ${response.status}, ${errorText}`);
      throw new Error("사용자 정보 취득 실패");
    }

    // 응답을 JSON으로 파싱
    const res = await response.json();

    // Google에서 응답을 받으면 해당 필드를 파싱하여 반환
    if (type === "google") {
      const { email, name, picture } = res;

      userData = {
        email, // 이메일
        username: name, // 사용자명
        profileImage: picture, // 프로필 이미지
      };
    } else if (type === "kakao") {
      const { kakao_account } = res;
      const { email, profile } = kakao_account;
      const { nickname, profile_image_url } = profile;

      userData = {
        email,
        username: nickname,
        profileImage: profile_image_url,
      };
    }

    return userData; // 사용자 정보 반환
  } catch (error) {
    console.log(error); // 에러 발생 시 콘솔에 에러 로그 출력
    throw new Error("사용자 정보 처리 중 에러 발생"); // 에러를 다시 던져서 호출 측에서 처리할 수 있게 함
  }
};

export default getOauthUserInfo;
