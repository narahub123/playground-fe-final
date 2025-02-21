import { logout } from "@features/auth-logout/utils";

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const fetchWithAuth = async (
  url: string,
  options: RequestInit = {},
  body: any = null
) => {
  const accessToken = localStorage.getItem("accessToken");
  const activeSessionId = localStorage.getItem("activeSessionId");

  if (!accessToken || !activeSessionId) throw new Error("로그인이 필요합니다.");

  const makeRquest = async (token: string, body: any = null) => {
    let response = await fetch(`${BASE_URL}${url}`, {
      ...options,
      // body가 있으면 POST 없으면 options.method를 따르거나 없으면 GET
      method: body ? "POST" : options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "x-active-session-id": activeSessionId,
        ...(options.headers || {}),
      },
      credentials: "include",
      body: body ? JSON.stringify(body) : null,
    });

    return response.json();
  };

  let result = await makeRquest(accessToken, body);

  if (result.success && result.code === "ACCESS_TOKEN_REISSUED") {
    const newAccessToken = result.data?.accessToken;

    if (!newAccessToken) {
      throw new Error("토큰 재발급 실패");
    }

    localStorage.setItem("accessToken", newAccessToken);

    result = await makeRquest(newAccessToken, body);
  }

  if (!result.success && result.code === "LOGOUT") {
    logout();
  }

  return result;
};

export default fetchWithAuth;
