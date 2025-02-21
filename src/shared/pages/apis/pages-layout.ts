import { removeAccessToken } from "@features/auth-logout/utils";
import { getAccessToken } from "../utils";

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

// access 토큰을 로컬스토리지에서 가져오기
const accessToken = getAccessToken();

const getCurrentUserAPI = async () => {
  if (!accessToken) throw new Error("로그인 해주세요.");

  const response = await fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const result = await response.json();

  if (result.success && result.code === "ACCESS_TOKEN_REISSUED") {
    // 기존 토큰 삭제
    removeAccessToken();

    // 새로운 토큰 저장
    if (result.data.accessToken) {
      localStorage.setItem("accessToken", result.data.accessToken);
    }

    const response = await fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${result.data.accessToken}`,
      },
      credentials: "include",
    });

    const newResult = await response.json();

    return newResult;
  }

  return result;
};

export { getCurrentUserAPI };
