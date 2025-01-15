import { RootState } from "@app/store";
import { DeviceInfoType } from "@shared/@common/types";

/**
 * `RootState`에서 `signup` 상태를 가져오는 selector 함수입니다.
 *
 * @param {RootState} state - Redux 상태 객체
 * @returns {SignupState} `signup` 상태 객체
 */
const getUserInSignup = (state: RootState) => state.signup;

/**
 * `RootState`에서 `signup` 상태의 `username` 값을 가져오는 selector 함수입니다.
 *
 * @param {RootState} state - Redux 상태 객체
 * @returns {string} 사용자 이름
 */
const getUsernameInSignup = (state: RootState) => state.signup.username;

/**
 * `RootState`에서 `signup` 상태의 `phone` 값을 가져오는 selector 함수입니다.
 *
 * @param {RootState} state - Redux 상태 객체
 * @returns {string} 사용자 전화번호
 */
const getPhoneInSignup = (state: RootState) => state.signup.phone;

/**
 * `RootState`에서 `signup` 상태의 `email` 값을 가져오는 selector 함수입니다.
 *
 * @param {RootState} state - Redux 상태 객체
 * @returns {string} 사용자 이메일
 */
const getEmailInSignup = (state: RootState) => state.signup.email;

/**
 * `RootState`에서 `signup` 상태의 `birth` 값을 가져오는 selector 함수입니다.
 *
 * @param {RootState} state - Redux 상태 객체
 * @returns {BirthType} 사용자 생년월일 정보
 */
const getBirthInSignup = (state: RootState) => state.signup.birth;

/**
 * `RootState`에서 `signup` 상태의 `password` 값을 가져오는 selector 함수입니다.
 *
 * @param {RootState} state - Redux 상태 객체
 * @returns {string} 사용자 비밀번호
 */
const getPasswordInSignup = (state: RootState) => state.signup.password;

/**
 * `RootState`에서 `signup` 상태의 `userId` 값을 가져오는 selector 함수입니다.
 *
 * @param {RootState} state - Redux 상태 객체
 * @returns {string} 사용자 ID
 */
const getUserIdInSignup = (state: RootState) => state.signup.userId;

/**
 * `RootState`에서 `signup` 상태의 `profileImage` 값을 가져오는 selector 함수입니다.
 *
 * @param {RootState} state - Redux 상태 객체
 * @returns {string} 사용자 프로필 이미지 URL
 */
const getProfileImageInSignup = (state: RootState) => state.signup.profileImage;

/**
 * `RootState`에서 `signup` 상태의 `notifications` 값을 가져오는 selector 함수입니다.
 *
 * @param {RootState} state - Redux 상태 객체
 * @returns {boolean} 사용자 알림 수신 여부
 */
const getNotificationsInSignup = (state: RootState) =>
  state.signup.notifications;

/**
 * `RootState`에서 `signup` 상태의 `language` 값을 가져오는 selector 함수입니다.
 *
 * @param {RootState} state - Redux 상태 객체
 * @returns {string} 사용자 언어 설정
 */
const getLanguageInSignup = (state: RootState) => state.signup.language;

/**
 * `RootState`에서 `signup` 상태의 `device` 속성을 가져옵니다.
 *
 * @function
 * @param {RootState} state - Redux 상태 객체.
 * @returns {DeviceInfoType} `device` 속성 값.
 */
const getDeviceInSignup = (state: RootState) => state.signup.device;

export {
  getUserInSignup,
  getUsernameInSignup,
  getPhoneInSignup,
  getEmailInSignup,
  getBirthInSignup,
  getPasswordInSignup,
  getUserIdInSignup,
  getProfileImageInSignup,
  getNotificationsInSignup,
  getLanguageInSignup,
  getDeviceInSignup,
};
