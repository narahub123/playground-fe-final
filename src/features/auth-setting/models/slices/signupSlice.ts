import {
  BirthType,
  NotificationInSignupType,
} from "@features/auth-setting/types";
import { validateDate } from "@features/auth-setting/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DeviceInfoType } from "@shared/@common/types";

export interface SignupState {
  username: string; // 사용자 이름
  phone: string; // 휴대폰
  email: string; // 이메일
  birth: BirthType; // 생년월일
  password: string; // 비밀번호
  userId: string; // 사용자 아이디
  profileImage: string; // 프로필 사진
  notifications: NotificationInSignupType; // 알림
  language: string; // 언어
  device: DeviceInfoType; // 기기 정보
}

const initialState: SignupState = {
  username: "",
  phone: "",
  email: "",
  birth: {
    year: "",
    month: "",
    date: "",
  },
  password: "",
  userId: "",
  profileImage: "",
  notifications: {
    message: false,
    comment: false,
    following: false,
    newPost: false,
  },
  language: "",
  device: {
    type: "web",
    os: "windows",
    browser: "chrome",
  },
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setUsernameInSignup: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPhoneInSignup: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setEmailInSignup: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setBirthInSignup: (state, action: PayloadAction<BirthType>) => {
      state.birth = action.payload;
    },
    /**
     * 사용자 생년월일의 연도를 설정하는 리듀서.
     * @param state 현재 상태
     * @param action 연도를 설정할 PayloadAction
     * @returns 수정된 상태
     *
     * 이 리듀서는 `year` 값이 변경되었을 때만 상태를 업데이트합니다.
     * 또한 변경된 `year`에 맞게 `date` 값이 유효한 날짜로 자동으로 수정됩니다.
     */
    setBirthYearSignup: (state, action: PayloadAction<string>) => {
      const { year, month, date } = state.birth;

      // 이미 입력된 연도와 동일하면 업데이트를 하지 않습니다.
      if (year === action.payload) return;

      // 새로운 연도를 상태에 설정
      state.birth.year = action.payload;

      // 새로운 연도와 기존 월, 일에 맞는 유효한 날짜를 계산
      const validatedDate = validateDate(action.payload, month, date);

      // 계산된 날짜가 기존 날짜와 다르면 날짜를 업데이트
      if (date !== validatedDate) {
        state.birth.date = validatedDate;
      }
    },

    /**
     * 사용자 생년월일의 월을 설정하는 리듀서.
     * @param state 현재 상태
     * @param action 월을 설정할 PayloadAction
     * @returns 수정된 상태
     *
     * 이 리듀서는 `month` 값이 변경되었을 때만 상태를 업데이트합니다.
     * 또한 변경된 `month`에 맞게 `date` 값이 유효한 날짜로 자동으로 수정됩니다.
     */
    setBirthMonthSignup: (state, action: PayloadAction<string>) => {
      const { year, month, date } = state.birth;

      // 이미 입력된 월과 동일하면 업데이트를 하지 않습니다.
      if (month === action.payload) return;

      // 새로운 월을 상태에 설정
      state.birth.month = action.payload;

      // 새로운 월과 기존 연도, 일에 맞는 유효한 날짜를 계산
      const validatedDate = validateDate(year, action.payload, date);

      // 계산된 날짜가 기존 날짜와 다르면 날짜를 업데이트
      if (date !== validatedDate) {
        state.birth.date = validatedDate;
      }
    },

    setBirthDateSignup: (state, action: PayloadAction<string>) => {
      state.birth.date = action.payload;
    },
    setPasswordInSignup: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setUserIdInSignup: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    setProfileImageInSignup: (state, action: PayloadAction<string>) => {
      state.profileImage = action.payload;
    },
    setNotificationsInSignup: (
      state,
      action: PayloadAction<keyof NotificationInSignupType>
    ) => {
      const key = action.payload;

      if (key in state.notifications)
        state.notifications[key] = !state.notifications[key];
      else console.warn("키가 유효하지 않습니다.");
    },
    setNotificationMessageInSignup: (state, action: PayloadAction<boolean>) => {
      state.notifications.message = action.payload;
    },
    setNotificationCommentInSignup: (state, action: PayloadAction<boolean>) => {
      state.notifications.comment = action.payload;
    },
    setNotificationFollowingInSignup: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.notifications.following = action.payload;
    },
    setNotificationNewPostInSignup: (state, action: PayloadAction<boolean>) => {
      state.notifications.newPost = action.payload;
    },

    setLanguageInSignup: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    /**
     * Redux 스토어의 `signup` 상태에서 `device` 정보를 설정합니다.
     *
     * @function
     * @param {SignupState} state - `signup` 상태를 나타내는 Redux 슬라이스의 상태.
     * @param {PayloadAction<DeviceInfoType>} action - 새로운 `device` 정보를 포함한 액션 객체.
     */
    setDeviceInSignup: (state, action: PayloadAction<DeviceInfoType>) => {
      state.device = action.payload;
    },
  },
});

export default signupSlice.reducer;
export const {
  setUsernameInSignup,
  setPhoneInSignup,
  setEmailInSignup,
  setBirthInSignup,
  setBirthYearSignup,
  setBirthMonthSignup,
  setBirthDateSignup,
  setPasswordInSignup,
  setUserIdInSignup,
  setProfileImageInSignup,
  setNotificationsInSignup,
  setLanguageInSignup,
  setNotificationMessageInSignup,
  setNotificationCommentInSignup,
  setNotificationFollowingInSignup,
  setNotificationNewPostInSignup,
  setDeviceInSignup,
} = signupSlice.actions;
