import { RootState } from "@app/store";

const getParallelModals = (state: RootState) => state.modal.parallel;
const getSignupModal = (state: RootState) => state.modal.parallel.signup;
const getLoginModal = (state: RootState) => state.modal.parallel.login;
const getPasswordModal = (state: RootState) => state.modal.parallel.password;
const getErrorModal = (state: RootState) => state.modal.standalone.error;

export {
  getParallelModals,
  getSignupModal,
  getLoginModal,
  getPasswordModal,
  getErrorModal,
};
