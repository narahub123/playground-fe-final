import { RootState } from "@app/store";

const getParallelModals = (state: RootState) => state.modal.parallel;
const isSignupModalOpen = (state: RootState) => state.modal.parallel.signup;
const isLoginModalOpen = (state: RootState) => state.modal.parallel.login;
const isPasswordModalOpen = (state: RootState) => state.modal.parallel.password;
const isErrorModalOpen = (state: RootState) => state.modal.standalone.error;

export {
  getParallelModals,
  isSignupModalOpen,
  isLoginModalOpen,
  isPasswordModalOpen,
  isErrorModalOpen,
};
