    import { RootState } from "@app/store";

    const getUser = (state: RootState) => state.user;
    const getUserId = (state: RootState) => state.user.userId;
    const getPassword = (state: RootState) => state.user.password;
    const getPasswordCheck = (state: RootState) => state.user.password_check;

    export { getUser, getPassword, getPasswordCheck, getUserId };
