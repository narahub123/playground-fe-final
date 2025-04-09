const ERROR_TITLE_CODE = {
  EMAIL_DUPLICATE_CHECK_FAILED: "이메일 중복 체크 실패",
  PHONE_DUPLICATE_CHECK_FAILED: "휴대 전화 번호 중복 체크 실패",
  USERID_DUPLICATE_CHECK_FAILED: "사용자 아이디 중복 체크 실패",
  GET_CONTACTS_FAILED: "연락처 조회 실패",
  USER_REGISTRATION_FAILED: "회원 가입 실패",
  LOGIN_FAILED: "로그인 실패",
  VERIFICATION_CODE_VERIFICATION_FAILED: "인증 코드 인증 실패",
  VERIFICATION_CODE_SEND_FAILED: "인증 코드 전송 실패",
  ADD_ACCOUNT_FAILED: "계정 추가 실패",
  VERIFY_PASSWORD_FAILED: "비밀 번호 인증 실패",
  PASSWORD_CHANGE_FAILED: "비밀 번호 변경 실패",
  CLEAR_RECENT_EMOJIS_FAILED: "최근 이모지 비우기에 실패했습니다.",
} as const;

const ERROR_DESCRIPTION_CODE = {
  // validataion error
  MISSING_EMAIL: "이메일은 필수입니다. 이메일을 제공해주세요.",
  MISSING_PHONE: "휴대 전화 번호는 필수입니다. 휴대 전화 번호를 제공해주세요.",
  MISSING_USERID: "사용자 아이디는 필수입니다. 사용자 아이디를 제공해주세요.",
  MISSING_USER_IDENTIFIER:
    "이메일, 휴대전화번호, 사용자 아이디 중 적어도 하나는 필수입니다. 이메일, 휴대전화번호, 사용자 아이디를 제공해주세요.",
  MISSING_LANGUAGE_SETTING: "언어 설정은 필수입니다. 언어 설정을 제공해주세요.",
  MISSING_PASSWORD: "비밀번호는 필수입니다. 비밀번호를 제공해주세요.",
  MISSING_NEW_PASSWORD:
    "새로운 비밀번호는 필수입니다. 새로운 비밀번호를 제공해주세요.",
  MISSING_USERNAME: "사용자 이름은 필수입니다. 사용자 이름을 제공해주세요.",
  MISSING_BIRTH: "생년월일은 필수입니다. 생년월일을 제공해주세요.",
  MISSING_NOTIFICATION_SETTINGS:
    "알림 설정은 필수입니다. 알림 설정을 제공해주세요.",
  MISSING_DEVICE: "기기 정보는 필수입니다. 기기 정보를 제공해주세요.",
  MISSING_LOCATION: "주소 정보는 필수입니다. 주소 정보를 제공해주세요.",
  MISSING_IP: "IP 주소는 필수입니다. IP 정보를 제공해주세요.",
  MISSING_DEVICE_IP_LOCATION: "기기, IP, 장소 필수",
  MISSING_VERIFICATION_CODE:
    "인증 코드는 필수입니다. 인증 코드를 제공해주세요.",

  // verification failed
  VERIFICATION_CODE_MISMATCH: "인증 코드 불일치",

  // authentication failed
  PASSWORD_UNMATCHED: "비밀번호 불일치",
  VERIFICATION_CODE_EXPIRED:
    "인증 코드가 만료되었습니다. 인증 코드를 재발급한 후에 다시 시도해주세요.",
  PASSWORD_UNCHANGED: "비밀번호 변경 없음",

  // session error
  SESSION_CREATION_FAILED: "활성 세션 생성 실패",

  // save failed
  LOGIN_FAILURE_UNSAVED: "로그인 실패 기록 저장에 실패했습니다.",
  LOGIN_RECORD_SAVE_FAILED: "로그인 기록 저장에 실패했습니다.",
  FAILED_TO_CREATE_VERIFICATION_CODE: "인증 코드 생성에 실패했습니다.",

  // update failed
  LOCK_PROCESS_FAILED: "계정 잠금 처리 중 에러가 발생했습니다.",
  UPDATE_SKINTONE_FAILED: "스킨톤 업데이트에 실패했습니다.",
  UPDATE_RECENT_EMOJIS_FAILED: "최근 이모지 업데이트에 실패했습니다.",

  // delete failed
  PARTIAL_DELETION_FAILED: "일부 로그인 실패 기록이 삭제되지 않았습니다.",
  FAILED_TO_DELETE_VERIFICATION_CODE: "인증 코드 삭제에 실패했습니다.",

  // acount lock
  TOO_MANY_LOGIN_FAILURES: "로그인 실패 횟수 초과",
  BRUTE_FORCE_DETECTED:
    "브루트 포스 공격 감지되어 계정이 잠깁니다. 계정 잠금 해지를 위해서 관리자에게 문의주세요.",

  // not found
  USER_NOT_FOUND: "조건에 맞는 사용자를 찾을 수 없습니다.",
  EMAIL_INFO_NOT_FOUND: "이메일을 찾을 수 없습니다.",
  PHONE_INFO_NOT_FOUND: "휴대 전화 번호를 찾을 수 없습니다.",
  CONTACT_INFO_NOT_FOUND: "연락처를 찾을 수 없습니다.",

  // duplicate
  ACCOUNT_ALREADY_EXISTS: "이미 존재하는 계정입니다.",

  // unknown error
  UNKNOWN_ERROR: "알 수 없는 에러 발생",
} as const;

const ERROR_DB_CODE = {
  DUPLICATE_KEY: "DUPLICATE_KEY", // 중복된 키 존재
  MONGODB_VALIDATION_ERROR: "MONGODB_VALIDATION_ERROR", // MongoDB 유효성 검사 오류
  MONGODB_CAST_ERROR: "MONGODB_CAST_ERROR", // MongoDB 데이터 타입 변환 오류
  MONGODB_NETWORK_ERROR: "MONGODB_NETWORK_ERROR", // MongoDB 네트워크 연결 오류
  MONGODB_TIMEOUT_ERROR: "MONGODB_TIMEOUT_ERROR", // MongoDB 타임아웃 오류
};

const ERRORS = {
  ERROR_TITLE_CODE,
  ERROR_DESCRIPTION_CODE,
  ERROR_DB_CODE,
};

export default ERRORS;
