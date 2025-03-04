import ERRORS from "./errors";

const getErrorTitle = (code: keyof typeof ERRORS.ERROR_TITLE_CODE) => {
  return ERRORS.ERROR_TITLE_CODE[code];
};

const getErrorDescription = (
  code: keyof typeof ERRORS.ERROR_DESCRIPTION_CODE
) => {
  return ERRORS.ERROR_DESCRIPTION_CODE[code];
};

const auths = {
  VerifyPassword: {
    heading: "비밀번호를 확인하세요.",
    description: "비밀번호를 입력하여 계속하세요.",
    btn: "확인",
    errors: {
      title: getErrorTitle,
      description: getErrorDescription,
    },
    label: "비밀번호",
  },
  InputVerifyPassword: {
    recovery: "비밀번호를 잊으셨나요?",
  },
  VerifyPasswordWithError: {
    label: "현재 비밀번호",
    recovery: "비밀번호를 잊으셨나요?",
  },
  ScreenPassword: {
    heading: "비밀번호 확인",
    expl: "계속하려면 PlayGround 비밀번호를 다시 입력하세요.",
    input: { label: "비밀번호" },
    btn: {
      next: "다음",
      cancel: "취소",
    },
  },
  ScreenSendVerificationCode: {
    logoAlt: "로고",
    heading: "본인 인증하기",
    description: (
      email: string
    ) => `데이터를 안전하게 보호하세요. 본인 인증을 위해 ${email}로 인증 코드를
            보내드립니다.`,
    btn: "코드 전송",
  },
};

export default auths;
