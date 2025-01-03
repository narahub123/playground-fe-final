const BASE_URL = import.meta.env.BACKEND_BASE_URL;

const checkEmailDuplicateInSignupAPI = async (email: string) => {
  try {
    const response = await fetch(`${BASE_URL}/signup/checkEmailDuplicate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("이메일 중복 확인 실패");
    }

    const result = await response.json();

    // response.isDuplicate이 존재하는지 확인
    if (result && typeof result.isDuplicate === "boolean") {
      // return result.isDuplicate;
      return { isDuplicate: result.isDuplicate, type: "duplicate" };
    } else {
      throw new Error("유효하지 않은 응답을 받았습니다.");
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
    return { isDuplicate: true, type: "disconnect" }; // 중복 체크 실패 시
  }
};

export { checkEmailDuplicateInSignupAPI };
