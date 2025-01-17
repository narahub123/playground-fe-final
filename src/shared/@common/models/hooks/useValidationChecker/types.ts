import { SignupState } from "@shared/auth/models/slices/signupSlice";
import { BirthType } from "@shared/auth/types";
import { UserState } from "../../slices/userSlice";

/**
 * `SignupState`의 키에서 "birth"를 제외한 키와 `BirthType`의 키를 포함하는 타입입니다.
 *
 * `SignupState`에서 `birth`를 제외한 모든 필드를 포함하며, 추가로 `BirthType`의 키도 포함됩니다.
 * 예를 들어, `SignupState`가 "username", "email", "birth"를 포함하고,
 * `BirthType`이 "year", "month", "date"를 포함하면, 이 타입은 "username", "email", "year", "month", "date" 등을 포함합니다.
 *
 * @typedef {string} FieldType
 */
export type FieldType =
  | Exclude<keyof SignupState, "birth">
  | keyof BirthType
  | keyof UserState
  | "password_confirm";

/**
 * 버튼의 유효성 상태를 나타내는 타입입니다.
 *
 * - `boolean`: 단일 값으로, 유효성 여부를 나타냅니다.
 * - `Partial<Record<FieldType, boolean>>`: 필드별로 유효성 여부를 기록한 객체입니다. 일부 필드만 유효성 체크할 수도 있습니다.
 *
 * @typedef {boolean | Partial<Record<FieldType, boolean>>} ButtonIsValidType
 */
export type ButtonIsValidType = boolean | Partial<Record<FieldType, boolean>>;

/**
 * 각 필드에 대한 정규 표현식을 기록하는 타입입니다.
 *
 * 각 필드에 대해 정규 표현식이 정의될 수 있습니다.
 * 예를 들어, `username` 필드에 대해 "^[a-zA-Z0-9]{5,15}$"와 같은 정규 표현식을 정의할 수 있습니다.
 *
 * @typedef {Partial<Record<FieldType, string>>} ButtonRegExpType
 */
export type ButtonRegExpType = Partial<Record<FieldType, string>>;
