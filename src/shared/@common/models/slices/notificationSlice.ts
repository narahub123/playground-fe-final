    import { createSlice } from "@reduxjs/toolkit";

    interface NotificationState {}

    const initialState: NotificationState = {};

    const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {},
    });

    export default notificationSlice.reducer;

    export const {} = notificationSlice.actions;
