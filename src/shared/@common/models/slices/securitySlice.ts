import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TwoFactorAuthenticationMethod } from "@shared/@common/types";

interface SecurityState {
  // 보안
  // 2단계 인증
  twoFactorAuthenticationMethod: TwoFactorAuthenticationMethod;

  // 인증 라벨 숨기기
  isLabelHidden: boolean;

  // 비밀번호 재설정 보호
  isPasswordRenewalProtected: boolean;

  // 앱 및 세션
  connectedApplications: string[];
  activeSessions: string[];
  loginRecords: string[];

  // 연결된 계정
  linkedAccounts: string[];

  // 위임
  isInviteable: boolean;
  delegate: {
    delegatedGroups: string[];
    delegatedMembers: string[];
  };
}

const initialState: SecurityState = {
  // 보안
  // 2단계 인증
  twoFactorAuthenticationMethod: "",
  // 인증 라벨 숨기기
  isLabelHidden: false,
  // 비밀번호 재설정 보호
  isPasswordRenewalProtected: false,

  // 앱 및 세션
  connectedApplications: [],
  activeSessions: [],
  loginRecords: [],

  // 연결된 계정
  linkedAccounts: [],

  // 위임
  isInviteable: false,
  delegate: {
    delegatedGroups: [],
    delegatedMembers: [],
  },
};

const securitySlice = createSlice({
  name: "security",
  initialState,
  reducers: {
    setSecurity: (state, action: PayloadAction<SecurityState>) => {
      return action.payload;
    },
  },
});

export default securitySlice.reducer;

export const { setSecurity } = securitySlice.actions;
