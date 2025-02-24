import { store } from "@app";
import { clearUserState } from "@shared/@common/models/slices/userSlice";
import { clearDisplayState } from "@shared/@common/models/slices/displaySlice";
import { clearNotificationState } from "@shared/@common/models/slices/notificationSlice";
import { clearPrivacyState } from "@shared/@common/models/slices/privacySlice";
import { clearSecurityState } from "@shared/@common/models/slices/securitySlice";
import { removePlayGroundData } from "@shared/@common/utils";

const logout = () => {
  removePlayGroundData();

  // slice 초기화
  store.dispatch(clearUserState());
  store.dispatch(clearDisplayState());
  store.dispatch(clearNotificationState());
  store.dispatch(clearPrivacyState());
  store.dispatch(clearSecurityState());

  // 페이지 이동
  window.location.href = "/";
};

export default logout;
