import { SignupState } from "@shared/auth/models/slices/signupSlice";

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const checkEmailDuplicateInSignupAPI = async (email: string) => {
  const response = await fetch(`${BASE_URL}/users/check-duplication/email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const result = await response.json();

  return result;
};

/**
 * 사용자의 아이디 중복 여부를 확인하는 API 호출 함수입니다.
 * @param {string} userId - 중복 여부를 확인할 사용자 아이디.
 * @returns {Promise<{ isDuplicate: boolean, type: string }>} - 중복 여부 및 오류 타입을 포함한 객체를 반환합니다.
 *  - isDuplicate: 중복 여부 (boolean)
 *  - type: 응답 유형 ("duplicate" 또는 "disconnect")
 *
 * @throws {Error} - 네트워크 오류 또는 응답 오류 발생 시 에러를 던집니다.
 */
const checkUserIdDuplicateInSignupAPI = async (userId: string) => {
  try {
    // API 호출
    const response = await fetch(`${BASE_URL}/users/check-duplication/userid`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });

    // 응답이 성공적이지 않으면 에러 발생
    if (!response.ok) {
      throw new Error("사용자 아이디 중복 확인 실패");
    }

    // 응답 JSON 파싱
    const result = await response.json();

    console.log(result);

    return { isDuplicate: result.data.isDuplicate };
  } catch (err: any) {
    // 네트워크 오류 및 서버 연결 오류 처리
    if (err instanceof TypeError) {
      console.error(
        "서버와 연결되지 않았습니다. 네트워크 문제를 확인해주세요."
      );
    } else if (err.message === "Failed to fetch") {
      console.error(
        "서버에 접근할 수 없습니다. 서버가 실행 중인지 확인하세요."
      );
    } else {
      // 기타 알 수 없는 오류 처리
      console.error("알 수 없는 오류 발생:", err.message);
    }

    // 중복 체크 실패 시 "disconnect" 타입 반환
    return { isDuplicate: true, type: "disconnect" };
  }
};

const registerUserAPI = async (user: SignupState) => {
  try {
    // API 호출
    const response = await fetch(`${BASE_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    });

    // 응답이 성공적이지 않으면 에러 발생
    if (!response.ok) {
      throw new Error("사용자 아이디 중복 확인 실패");
    }

    // 응답 JSON 파싱
    const result = await response.json();

    return result;
  } catch (err: any) {
    // 네트워크 오류 및 서버 연결 오류 처리
    if (err instanceof TypeError) {
      console.error(
        "서버와 연결되지 않았습니다. 네트워크 문제를 확인해주세요."
      );
    } else if (err.message === "Failed to fetch") {
      console.error(
        "서버에 접근할 수 없습니다. 서버가 실행 중인지 확인하세요."
      );
    } else {
      // 기타 알 수 없는 오류 처리
      console.error("알 수 없는 오류 발생:", err.message);
    }
  }
};

export {
  checkEmailDuplicateInSignupAPI,
  checkUserIdDuplicateInSignupAPI,
  registerUserAPI,
};
