import { getAccessToken } from "@shared/pages/utils";

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const accessToken = getAccessToken();
// 개별 아이디 로그아웃
const logoutAPI = async () => {
  const response = await fetch(`${BASE_URL}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const result = await response.json();

  return result;
};

// 단체 계정 로그아웃
const logoutAllAPI = async () => {
  const response = await fetch(`${BASE_URL}/auth/logout/all`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const result = await response.json();

  return result;
};

export { logoutAPI, logoutAllAPI };
