const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const logoutAPI = async (userId: string) => {
  const response = await fetch(`${BASE_URL}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(userId),
  });

  const result = await response.json();

  return result;
};
const logoutAllAPI = async () => {};

export { logoutAPI, logoutAllAPI };
