import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAccount, LocationType } from "@shared/@common/types";
import { BirthType, GenderType } from "@shared/auth/types";
import { validateDate } from "@shared/auth/utils";

export interface UserState {
  username: string; // 사용자 이름
  phones: string[]; // 휴대폰
  emails: string[]; // 이메일
  birth: BirthType; // 생년월일
  password: string; // 비밀번호
  password_check?: string;
  userId: string; // 사용자 아이디
  profileImage: string; // 프로필 사진
  language: string; // 언어
  ip: string;
  location: LocationType;
  gender: GenderType;
  accountGroup: IAccount[];
}

const initialState: UserState = {
  username: "",
  phones: [],
  emails: [],
  birth: {
    year: 1900,
    month: 1,
    date: 1,
  },
  password: "",
  userId: "",
  profileImage: "",
  language: "",
  ip: "",
  location: {
    country: "",
    state: "",
    city: "",
    county: "",
  },
  gender: "",
  accountGroup: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPhones: (state, action: PayloadAction<string>) => {
      state.phones = [...state.phones, action.payload];
    },
    setEmails: (state, action: PayloadAction<string>) => {
      state.emails = [...state.emails, action.payload];
    },
    setBirth: (state, action: PayloadAction<BirthType>) => {
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
    setBirthYear: (state, action: PayloadAction<number>) => {
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
    setBirthMonth: (state, action: PayloadAction<number>) => {
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

    setBirthDate: (state, action: PayloadAction<number>) => {
      state.birth.date = action.payload;
    },
    setIp: (state, action: PayloadAction<string>) => {
      state.ip = action.payload;
    },
    setLocation: (state, action: PayloadAction<LocationType>) => {
      state.location = action.payload;
    },
    setGender: (state, action: PayloadAction<GenderType>) => {
      state.gender = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setPasswordCheck: (state, action: PayloadAction<string>) => {
      state.password_check = action.payload;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    setProfileImage: (state, action: PayloadAction<string>) => {
      state.profileImage = action.payload;
    },
    setAcccountGroup: (state, action: PayloadAction<IAccount>) => {
      state.accountGroup = [...state.accountGroup, action.payload];
    },
  },
});

export default userSlice.reducer;

export const {
  setUser,
  setPassword,
  setPasswordCheck,
  setUserId,
  setProfileImage,
  setBirth,
  setBirthYear,
  setBirthMonth,
  setBirthDate,
  setEmails,
  setGender,
  setIp,
  setLocation,
  setPhones,
  setUsername,
  setAcccountGroup,
} = userSlice.actions;
