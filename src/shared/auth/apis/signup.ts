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
  // API 호출
  const response = await fetch(`${BASE_URL}/users/check-duplication/userid`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId }),
  });

  // 응답 JSON 파싱
  const result = await response.json();

  return result;
};

const checkPhoneDuplicationInSignupAPI = async (phone: string) => {
  // API 호출
  const response = await fetch(`${BASE_URL}/users/check-duplication/phone`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phone }),
  });

  // 응답 JSON 파싱
  const result = await response.json();

  return result;
};

const registerUserAPI = async (user: SignupState) => {
  // API 호출
  const response = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
  });

  // 응답 JSON 파싱
  const result = await response.json();

  return result;
};

export {
  checkEmailDuplicateInSignupAPI,
  checkUserIdDuplicateInSignupAPI,
  checkPhoneDuplicationInSignupAPI,
  registerUserAPI,
};
