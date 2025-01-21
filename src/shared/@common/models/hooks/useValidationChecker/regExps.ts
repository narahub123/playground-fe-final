import {
  EMAIL_FORMAT,
  EMPTY,
  PASSWORD_INCOMPLETE,
  USERID_INCOMPLETE,
  USERNAME_INCOMPLETE,
} from "@shared/@common/constants/regExps";
import { ButtonRegExpType } from "./types";

/**
 * 버튼에 사용할 각 필드에 대한 정규 표현식을 정의한 객체입니다.
 *
 * - `username`: 사용자 이름에 대한 정규 표현식입니다. (최소/최대 길이 제한)
 * - `email`: 이메일 형식에 대한 정규 표현식입니다.
 * - `year`, `month`, `date`: 생년월일 필드에 대한 정규 표현식입니다. 빈 값(`EMPTY`)으로 설정되어 있습니다.
 *
 * 이 객체는 필드별 유효성 검사를 위한 정규 표현식을 제공하며, 각 필드는 해당 필드에 맞는 정규 표현식을 포함하고 있습니다.
 *
 * @type {ButtonRegExpType}
 */
const ButtonRegExp: ButtonRegExpType = {
  username: USERNAME_INCOMPLETE,
  email: EMAIL_FORMAT,
  gender: EMPTY,
  year: EMPTY,
  month: EMPTY,
  date: EMPTY,
  password: PASSWORD_INCOMPLETE,
  userId: USERID_INCOMPLETE,
  profileImage: EMPTY,
  notifications: EMPTY,
  language: EMPTY,
};

export default ButtonRegExp;
