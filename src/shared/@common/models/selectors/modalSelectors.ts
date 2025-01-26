import { RootState } from "@app/store";

const getParallelModals = (state: RootState) => state.modal.parallel;
const getSignupModal = (state: RootState) => state.modal.parallel.signup;
const getLoginModal = (state: RootState) => state.modal.parallel.login;
const getFlowModal = (state: RootState) => state.modal.parallel.flow;
const getErrorModal = (state: RootState) => state.modal.standalone.error;

export {
  getParallelModals,
  getSignupModal,
  getLoginModal,
  getFlowModal,
  getErrorModal,
};
