import {
  PASSWORD_INCOMPLETE,
  PASSWORD_SPECIAL_CHARECTERS,
} from "@shared/@common/constants";

const change_password_kr = {
  ChangePasswordSection: {
    title: "비밀번호 변경",
    expl: (numOfSession: number) =>
      `비밀번호를 변경하면 현재 사용 중인 세션을 제외한 모든 활성 X 세션에서 로그아웃됩니다. 내 계정에 대한 액세스 권한이 있는 ${numOfSession}개의 애플리케이션은(는) 영향을 받지 않습니다.`,
    error: {
      INCOMPLETE: {
        regExp: PASSWORD_INCOMPLETE,
        errorMessage: `비밀번호는 영문 소문자, 영문 대문자, 숫자, 특수문자(${PASSWORD_SPECIAL_CHARECTERS})가 각각 적어도 1자 이상 필요합니다.`,
      },
    },
    unmatched: "비밀번호가 일치하지 않습니다.",
    btn: "저장",
  },
  InputNewPassword: {
    label: "새 비밀번호",
  },
  InputPasswordConfirm: {
    label: "비밀번호 확인",
  },
};

export default change_password_kr;
