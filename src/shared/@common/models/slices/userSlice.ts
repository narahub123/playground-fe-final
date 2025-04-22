import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IAccount,
  IBirth,
  IFollower,
  IFollowing,
  ILockStatus,
  IUser,
  LocationType,
  UserRoleType,
} from "@shared/@common/types";
import { GenderType } from "@shared/auth/types";
import { validateDate } from "@shared/auth/utils";
import {
  IEmoji,
  SkintoneType,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";

export interface UserState {
  data: IUser;
  loading: boolean;
}

const initialState: UserState = {
  data: {
    _id: "",
    userId: "",
    username: "",
    phones: [],
    emails: [],
    birth: {
      year: 1900,
      month: 1,
      date: 1,
    },
    gender: "",
    userRole: "USER",
    country: "",
    ip: "",
    location: {
      country: "",
      state: "",
      city: "",
      county: "",
    },
    profileImage: "",
    profileCoverImage: "",
    intro: "",
    accountGroup: [],
    followings: [],
    followers: [],
    isAuthorized: false,
    isAuthenticated: false,
    lockStatus: {
      isLocked: false,
      lockReason: null,
      lockedAt: null,
    },
    skintoneType: "default",
    recentEmojis: [],
    bookmarks: [],
    createdAt: new Date(),
    likes: []
  },
  loading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUserState: () => initialState,

    setUser: (state, action: PayloadAction<IUser>) => {
      state.data = action.payload;
      state.loading = false;
    },

    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    // 사용자 아이디
    setUserId: (state, action: PayloadAction<string>) => {
      state.data.userId = action.payload;
    },

    // 사용자 이름
    setUsername: (state, action: PayloadAction<string>) => {
      state.data.username = action.payload;
    },

    // 휴대폰
    setPhones: (state, action: PayloadAction<string>) => {
      state.data.phones = [...state.data.phones, action.payload];
    },

    // 이메일
    setEmails: (state, action: PayloadAction<string>) => {
      state.data.emails = [...state.data.emails, action.payload];
    },

    // 생년월일
    setBirth: (state, action: PayloadAction<IBirth>) => {
      state.data.birth = action.payload;
    },

    // 생년월일 개별
    setBirthYear: (state, action: PayloadAction<number>) => {
      const { year, month, date } = state.data.birth;

      // 이미 입력된 연도와 동일하면 업데이트를 하지 않습니다.
      if (year === action.payload) return;

      // 새로운 연도를 상태에 설정
      state.data.birth.year = action.payload;

      // 새로운 연도와 기존 월, 일에 맞는 유효한 날짜를 계산
      const validatedDate = validateDate(action.payload, month, date);

      // 계산된 날짜가 기존 날짜와 다르면 날짜를 업데이트
      if (date !== validatedDate) {
        state.data.birth.date = validatedDate;
      }
    },

    setBirthMonth: (state, action: PayloadAction<number>) => {
      const { year, month, date } = state.data.birth;

      // 이미 입력된 월과 동일하면 업데이트를 하지 않습니다.
      if (month === action.payload) return;

      // 새로운 월을 상태에 설정
      state.data.birth.month = action.payload;

      // 새로운 월과 기존 연도, 일에 맞는 유효한 날짜를 계산
      const validatedDate = validateDate(year, action.payload, date);

      // 계산된 날짜가 기존 날짜와 다르면 날짜를 업데이트
      if (date !== validatedDate) {
        state.data.birth.date = validatedDate;
      }
    },

    setBirthDate: (state, action: PayloadAction<number>) => {
      state.data.birth.date = action.payload;
    },

    //  성별
    setGender: (state, action: PayloadAction<GenderType>) => {
      state.data.gender = action.payload;
    },

    // 등급
    setUserRole: (state, action: PayloadAction<UserRoleType>) => {
      state.data.userRole = action.payload;
    },

    // IP 주소
    setIp: (state, action: PayloadAction<string>) => {
      state.data.ip = action.payload;
    },

    // 주소
    setLocation: (state, action: PayloadAction<LocationType>) => {
      state.data.location = action.payload;
    },

    // 프로필 사진
    setProfileImage: (state, action: PayloadAction<string>) => {
      state.data.profileImage = action.payload;
    },

    // 프로필 배경 사진
    setProfileCoverImage: (state, action: PayloadAction<string>) => {
      state.data.profileCoverImage = action.payload;
    },

    // 소개글
    setIntro: (state, action: PayloadAction<string>) => {
      state.data.intro = action.payload;
    },

    // 연결 계정
    setAcccountGroup: (state, action: PayloadAction<IAccount>) => {
      state.data.accountGroup = [...state.data.accountGroup, action.payload];
    },

    // 팔로잉
    setFollowings: (state, action: PayloadAction<IFollowing>) => {
      state.data.followings = [...state.data.followings, action.payload];
    },
    // 팔로워
    setFollowers: (state, action: PayloadAction<IFollower>) => {
      state.data.followers = [...state.data.followers, action.payload];
    },
    // 유료 계정
    setIsAuthorized: (state, action: PayloadAction<boolean>) => {
      state.data.isAuthorized = action.payload;
    },

    // 인증 코드 인증 여부
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.data.isAuthenticated = action.payload;
    },

    // 계정 잠금 여부
    setLockStatus: (state, action: PayloadAction<ILockStatus>) => {
      state.data.lockStatus = action.payload;
    },

    setSkintoneType: (state, action: PayloadAction<SkintoneType>) => {
      state.data.skintoneType = action.payload;
    },

    setRecentEmojis: (state, action: PayloadAction<IEmoji>) => {
      let recentEmojis = state.data.recentEmojis;

      // 최근 목록에서 추가되는 이모지와 같은 이모지는 삭제
      recentEmojis = recentEmojis.filter((e) => e.name !== action.payload.name);

      const newRecentEmojis = [action.payload, ...recentEmojis];

      state.data.recentEmojis = newRecentEmojis;
    },

    setBookmark: (state, action: PayloadAction<string>) => {
      const prevBookmarks = state.data.bookmarks;

      const postId = action.payload;

      // 이미 존재하는 경우
      if (prevBookmarks.includes(postId)) {
        // 해당 포스타 삭제
        const filteredBookmarks = prevBookmarks.filter(
          (bookmark) => bookmark !== postId
        );

        state.data.bookmarks = filteredBookmarks;
      } else {
        // 존재하지 않는 경우

        // 해당 포스트 추가
        state.data.bookmarks = [...state.data.bookmarks, postId];
      }
    },
    clearRecentEmojis: (state) => {
      state.data.recentEmojis = [];
    },
  },
});

export default userSlice.reducer;

export const {
  setUser,
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
  clearUserState,
  setFollowers,
  setFollowings,
  setIntro,
  setIsAuthenticated,
  setIsAuthorized,
  setLockStatus,
  setProfileCoverImage,
  setUserLoading,
  setUserRole,
  setSkintoneType,
  setRecentEmojis,
  setBookmark,
  clearRecentEmojis,
} = userSlice.actions;
