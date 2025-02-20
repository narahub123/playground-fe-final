import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ParallelModals } from "@shared/@common/types";

interface ModalState {
  parallel: {
    signup: boolean; // 회원 가입 모달 상태
    login: boolean; // 로그인 모달 상태
    flow: boolean; // 비밀번호 확인 모달 상태
    write: boolean;
    account: boolean;
  };
  standalone: {
    error: boolean; // 독립 모달 상태
  };
}

const initialState: ModalState = {
  parallel: {
    signup: false,
    login: false,
    flow: false,
    write: false,
    account: false,
  },
  standalone: {
    error: false,
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
} = modalSlice.actions;
