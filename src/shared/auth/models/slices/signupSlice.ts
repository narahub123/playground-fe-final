import {
  BirthType,
  GenderType,
  NotificationInSignupType,
  OauthType,
} from "@shared/auth/types";
import { validateDate } from "@shared/auth/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationType, DeviceInfoType } from "@shared/@common/types";

export interface SignupState {
  username: string; // 사용자 이름
  phone: string; // 휴대폰
  phoneOauth?: OauthType; // 휴대폰 정보를 oauth에서 가져온지 여부
  email: string; // 이메일
  emailOauth?: OauthType; // 이메일 정보를 oauth에서 가져온지 여부
  birth: BirthType; // 생년월일
  password: string; // 비밀번호
  userId: string; // 사용자 아이디
  profileImage: string; // 프로필 사진
  notifications: NotificationInSignupType; // 알림
  language: string; // 언어
  device: DeviceInfoType; // 기기 정보
  ip: string;
  location: LocationType;
  gender: GenderType;
}

const initialState: SignupState = {
  username: "",
  phone: "",
  phoneOauth: undefined,
  email: "",
  emailOauth: undefined,
  birth: {
    year: "",
    month: "",
    date: "",
  },
  password: "",
  userId: "",
  profileImage: "",
  notifications: {
    messages: false,
    replies: false,
    newFollower: false,
    posts: false,
  },
  language: "",
  device: {
    type: "Web",
    os: "Windows",
    browser: "Chrome",
  },
  ip: "",
  location: {
    country: "",
    state: "",
    city: "",
    county: "",
  },
  gender: "",
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
    setPhoneOauthInSignup: (state, action: PayloadAction<OauthType>) => {
      state.phoneOauth = action.payload;
    },
    setEmailInSignup: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setEmailOauthInSignup: (state, action: PayloadAction<OauthType>) => {
      state.emailOauth = action.payload;
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
    setBirthYearInSignup: (state, action: PayloadAction<string>) => {
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
    setBirthMonthInSignup: (state, action: PayloadAction<string>) => {
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

    setBirthDateInSignup: (state, action: PayloadAction<string>) => {
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
    setNotificationsMessagesInSignup: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.notifications.messages = action.payload;
    },
    setNotificationsRepliesInSignup: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.notifications.replies = action.payload;
    },
    setNotificationsNewFollowerInSignup: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.notifications.newFollower = action.payload;
    },
    setNotificationsPostsInSignup: (state, action: PayloadAction<boolean>) => {
      state.notifications.posts = action.payload;
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
    setIpInSignup: (state, action: PayloadAction<string>) => {
      state.ip = action.payload;
    },
    setLocationInSignup: (state, action: PayloadAction<LocationType>) => {
      state.location = action.payload;
    },
    setGenderInSignup: (state, action: PayloadAction<GenderType>) => {
      state.gender = action.payload;
    },
  },
});

export default signupSlice.reducer;
export const {
  setUsernameInSignup,
  setPhoneInSignup,
  setPhoneOauthInSignup,
  setEmailInSignup,
  setEmailOauthInSignup,
  setBirthInSignup,
  setBirthYearInSignup,
  setBirthMonthInSignup,
  setBirthDateInSignup,
  setPasswordInSignup,
  setUserIdInSignup,
  setProfileImageInSignup,
  setNotificationsInSignup,
  setLanguageInSignup,
  setNotificationsMessagesInSignup,
  setNotificationsRepliesInSignup,
  setNotificationsNewFollowerInSignup,
  setNotificationsPostsInSignup,
  setDeviceInSignup,
  setIpInSignup,
  setLocationInSignup,
  setGenderInSignup,
} = signupSlice.actions;
