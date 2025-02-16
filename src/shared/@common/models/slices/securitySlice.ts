import { createSlice } from "@reduxjs/toolkit";
import { TwoFactorAuthenticationMethod } from "@shared/@common/types";

interface SecurityState {
  twoFactorAuthenticationMethod: TwoFactorAuthenticationMethod;
  isLabelHidden: boolean;
  isPasswordRenewalProtected: boolean;
  connectedApplications: string[];
  activeSessions: string[];
  linkedAccounts?: string[];
  loginRecords: string[];
  isInviteable: boolean;
  delegate: {
    delegatedGroups: string[];
    delegatedMembers: string[];
  };
}

const initialState: SecurityState = {
  twoFactorAuthenticationMethod: "",
  isPasswordRenewalProtected: false,
  connectedApplications: [],
  linkedAccounts: [],
  activeSessions: [],
  loginRecords: [],
  delegate: {
    delegatedGroups: [],
    delegatedMembers: [],
  },
  isLabelHidden: false,
  isInviteable: false,
};

const securitySlice = createSlice({
  name: "security",
  initialState,
  reducers: {},
});

export default securitySlice.reducer;

export const {} = securitySlice.actions;
