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

  console.log(result);

  return result;
};

export { getCurrentUserAPI };
