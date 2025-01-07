import { RootState } from "@app/store";

const getPassword = (state: RootState) => state.user.password;
const getPasswordCheck = (state: RootState) => state.user.password_check;

export { getPassword, getPasswordCheck };
