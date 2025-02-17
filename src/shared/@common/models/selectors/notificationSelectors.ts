import { RootState } from "@app/store";

const getNotification = (state: RootState) => state.notification;

export { getNotification };
