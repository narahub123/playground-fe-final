import {
  PASSWORD_MAX,
  PASSWORD_MIN,
  PASSWORD_SPECIAL_CHARECTERS,
} from "./constants";

// 비밀번호 유효성 : 8자 이상 30자 이내 공백 문자없이 영어 대문자, 소문자, 숫자, 특수문자가 적어도 하나 이상 존재
export const PASSWORD_REGEX = `^(?=(.*[A-Z]))(?=(.*[a-z]))(?=(.*\d))(?=(${PASSWORD_SPECIAL_CHARECTERS}))[^\\s]{${PASSWORD_MIN},${PASSWORD_MAX}}$`;
// 비밀번호 : 8자 이상 30자 이내
export const PASSWORD_REGEX_LENGTH = `^[^\\s]{${PASSWORD_MIN},${PASSWORD_MAX}}$`;
// 비밀번호 : 영문 대소문자, 숫자, 특수문자만 허용
export const PASSWORD_REGEX_FORMAT = `^[A-Za-z0-9${PASSWORD_SPECIAL_CHARECTERS}]*$`;
