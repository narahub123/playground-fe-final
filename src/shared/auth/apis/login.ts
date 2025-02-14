const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const verifyPasswordLoginAPI = async (inputValue: {
  [key: string]: string;
}) => {
  try {
    const response = await fetch(`${BASE_URL}/login/verifyPassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValue),
    });

    if (!response.ok) {
      throw new Error("비밀번호 확인 실패");
    }

    const result = await response.json();

    return result;
  } catch (err: any) {
    // 서버와 연결되지 않거나 네트워크 오류 발생 시 처리
    if (err instanceof TypeError) {
      console.error(
        "서버와 연결되지 않았습니다. 네트워크 문제를 확인해주세요."
      );
    } else if (err.message === "Failed to fetch") {
      console.error(
        "서버에 접근할 수 없습니다. 서버가 실행 중인지 확인하세요."
      );
    } else {
      console.error("알 수 없는 오류 발생:", err.message);
    }
  }
};

type AccountType = {
  email?: string;
  phone?: string;
  userId?: string;
};

const getContactsByAccoutAPI = async (account: AccountType) => {
  try {
    const response = await fetch(`${BASE_URL}/users/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(account),
    });

    if (!response.ok) {
      throw new Error("이메일, 휴대폰 정보 확인 불가");
    }

    const result = await response.json();

    if (result.success) {
      return result.data;
    }
  } catch (err: any) {
    // 서버와 연결되지 않거나 네트워크 오류 발생 시 처리
    if (err instanceof TypeError) {
      console.error(
        "서버와 연결되지 않았습니다. 네트워크 문제를 확인해주세요."
      );
    } else if (err.message === "Failed to fetch") {
      console.error(
        "서버에 접근할 수 없습니다. 서버가 실행 중인지 확인하세요."
      );
    } else {
      console.error("알 수 없는 오류 발생:", err.message);
    }

    return { emails: [], phones: [] };
  }
};

type AuthMethodType = {
  email?: string;
  phone?: string;
};

const requestVerifacationCodeLoginAPI = async (authMethod: AuthMethodType) => {
  try {
    const response = await fetch(`${BASE_URL}/verification/request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authMethod),
    });

    if (!response.ok) {
      throw new Error("인증 코드 요청 실패");
    }

    const result = await response.json();

    return result;
  } catch (err: any) {
    // 서버와 연결되지 않거나 네트워크 오류 발생 시 처리
    if (err instanceof TypeError) {
      console.error(
        "서버와 연결되지 않았습니다. 네트워크 문제를 확인해주세요."
      );
    } else if (err.message === "Failed to fetch") {
      console.error(
        "서버에 접근할 수 없습니다. 서버가 실행 중인지 확인하세요."
      );
    } else {
      console.error("알 수 없는 오류 발생:", err.message);
    }
  }
};

const checkVerificationCodeAPI = async (value: { [key: string]: string }) => {
  try {
    const response = await fetch(`${BASE_URL}/verification/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });

    if (!response.ok) {
      if (response.status === 401) {
        return {
          success: false,
          message: "입력하신 정보가 잘못되었습니다. 다시 시도해주세요.",
        };
      } else if (response.status === 410) {
        return {
          success: false,
          message: "인증코드가 만료되었습니다. 인증 코드를 다시 요청해주세요.",
        };
      }
    }

    const result = await response.json();

    return result;
  } catch (err: any) {
    // 서버와 연결되지 않거나 네트워크 오류 발생 시 처리
    if (err instanceof TypeError) {
      console.error(
        "서버와 연결되지 않았습니다. 네트워크 문제를 확인해주세요."
      );
    } else if (err.message === "Failed to fetch") {
      console.error(
        "서버에 접근할 수 없습니다. 서버가 실행 중인지 확인하세요."
      );
    } else {
      console.error("알 수 없는 오류 발생:", err.message);
    }
  }
};

export {
  verifyPasswordLoginAPI,
  getContactsByAccoutAPI,
  requestVerifacationCodeLoginAPI,
  checkVerificationCodeAPI,
};
