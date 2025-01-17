import { RootState } from "src/app/store";

const getLogin = (state: RootState) => state.login.login;

export { getLogin };
