import { RootState } from "@app/store";
import { ParallelModals } from "@shared/@common/types";

const getParallelModals = (state: RootState) => state.modal.parallel;
const getParalleModal = (type: ParallelModals) => (state: RootState) =>
  state.modal.parallel[type];
const getSignupModal = (state: RootState) => state.modal.parallel.signup;
const getLoginModal = (state: RootState) => state.modal.parallel.login;
const getFlowModal = (state: RootState) => state.modal.parallel.flow;
const getWritePostModal = (state: RootState) => state.modal.parallel.write;
const getErrorModal = (state: RootState) => state.modal.standalone.error;

export {
  getParallelModals,
  getSignupModal,
  getLoginModal,
  getFlowModal,
  getErrorModal,
  getWritePostModal,
  getParalleModal,
};
