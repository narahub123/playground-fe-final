import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  VerificationModals,
  ParallelModals,
  StandAlonModals,
} from "@shared/@common/types";

interface ModalState {
  parallel: {
    signup: boolean; // 회원 가입 모달 상태
    login: boolean; // 로그인 모달 상태
    flow: boolean; // 비밀번호 확인 모달 상태
    write: boolean; // writepost 모달 상태
    account: boolean; // accountmanage 모달 상태
    ownership: boolean; // 계정 소유자 여부 확인 모달 상태
    schedule: boolean; // 포스트 예약 상태
    location: boolean;
  };
  standalone: {
    error: boolean; // 독립 모달 상태
    logout: boolean; // 로그아웃 모달 상태
    explore: boolean;
  };
  verification: {
    ownership: boolean;
  };
}

const initialState: ModalState = {
  parallel: {
    signup: false,
    login: false,
    flow: false,
    write: false,
    account: false,
    ownership: false,
    schedule: false,
    location: false,
  },
  standalone: {
    error: false,
    logout: false,
    explore: false,
  },
  verification: {
    ownership: false,
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    onParallelModalOpen: (state, action: PayloadAction<ParallelModals>) => {
      state.parallel[action.payload] = true;
    },
    onParallelModalClose: (state, action: PayloadAction<ParallelModals>) => {
      state.parallel[action.payload] = false;
    },
    onStandAlonOpen: (state, action: PayloadAction<StandAlonModals>) => {
      state.standalone[action.payload] = true;
    },
    onStandAlonClose: (state, action: PayloadAction<StandAlonModals>) => {
      state.standalone[action.payload] = false;
    },
    setVerified: (state, action: PayloadAction<VerificationModals>) => {
      state.verification[action.payload] = true;
    },
    onErrorOpen: (state) => {
      state.standalone.error = true;
    },
    onErrorClose: (state) => {
      state.standalone.error = false;
    },
  },
});

export default modalSlice.reducer;

export const {
  onParallelModalOpen,
  onParallelModalClose,
  onErrorOpen,
  onErrorClose,
  onStandAlonOpen,
  onStandAlonClose,
  setVerified,
} = modalSlice.actions;
