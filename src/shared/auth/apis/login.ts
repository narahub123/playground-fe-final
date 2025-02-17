import { LoginInputValueType } from "@features/auth-login/types";

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const verifyPasswordLoginAPI = async (inputValue: LoginInputValueType) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputValue),
  });

  const result = await response.json();

  if (result.data.accessToken) {
    localStorage.setItem("accessToken", result.data.accessToken);
  }

  return result;
};

type AccountType = {
  email?: string;
  phone?: string;
  userId?: string;
};

const getContactsByAccoutAPI = async (account: AccountType) => {
  const response = await fetch(`${BASE_URL}/users/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(account),
  });

  const result = await response.json();

  return result;
};

type AuthMethodType = {
  email?: string;
  phone?: string;
};

const requestVerifacationCodeLoginAPI = async (authMethod: AuthMethodType) => {
  const response = await fetch(`${BASE_URL}/verification/request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authMethod),
  });

  const result = await response.json();

  return result;
};

const checkVerificationCodeAPI = async (value: { [key: string]: string }) => {
  const response = await fetch(`${BASE_URL}/verification/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });

  const result = await response.json();

  return result;
};

export {
  verifyPasswordLoginAPI,
  getContactsByAccoutAPI,
  requestVerifacationCodeLoginAPI,
  checkVerificationCodeAPI,
};
