/**
 * 비밀번호의 최대 길이를 나타내는 상수입니다.
 * 이 값은 비밀번호 길이가 이보다 길어지지 않도록 제한하는 데 사용됩니다.
 *
 * @constant
 * @type {number}
 */
export const PASSWORD_MAX = 30; // 비밀번호 최대 길이

/**
 * 비밀번호의 최소 길이를 나타내는 상수입니다.
 * 이 값은 비밀번호 길이가 이보다 짧으면 안되도록 제한하는 데 사용됩니다.
 *
 * @constant
 * @type {number}
 */
export const PASSWORD_MIN = 8; // 비밀번호 최소 길이

/**
 * 비밀번호에 허용되는 특수문자들을 나열한 문자열입니다.
 * 이 문자열에 포함된 문자들은 비밀번호에 포함될 수 있는 특수문자입니다.
 *
 * @constant
 * @type {string}
 */
export const PASSWORD_SPECIAL_CHARECTERS = `!@#$%^&*()_+={\\[\\]:;"'<>,.?/\\\\|\\-`; // 비밀번호에 허용되는 특수문자

/**
 * 사용자 이름의 최소 길이를 정의하는 상수입니다.
 * 이 값은 사용자 이름이 최소한 이 길이 이상이어야 함을 나타냅니다.
 *
 * @constant
 * @type {number}
 */
export const USERNAME_MIN = 1; // 사용자 이름 최소 길이

/**
 * 사용자 이름의 최대 길이를 정의하는 상수입니다.
 * 이 값은 사용자 이름이 최대 이 길이 이하이어야 함을 나타냅니다.
 *
 * @constant
 * @type {number}
 */
export const USERNAME_MAX = 30; // 사용자 이름 최대 길이

/**
 * 이메일 로컬 부분에서 허용되는 특수문자 집합입니다.
 *
 * @constant {string} EMAIL_SPECIAL_CHARACTERS
 * @description
 * - 이 상수는 RFC 5322 표준에 따라 이메일 로컬 부분(도메인 앞부분)에서 사용할 수 있는 특수문자를 정의합니다.
 * - 이 특수문자들은 로컬 부분에 올바르게 포함될 경우 유효한 이메일 주소로 간주됩니다.
 * - 단, 점(`.`)은 이 집합에 포함되지 않으며, 별도의 규칙(연속 금지, 시작/끝 금지)에 따라 처리됩니다.
 *
 * @example
 * const specialChars = EMAIL_SPECIALCHARACTERS.split('');
 * console.log(specialChars.includes('!')); // true
 * console.log(specialChars.includes('.')); // false
 *
 * @example
 * const isValidChar = (char) => EMAIL_SPECIALCHARACTERS.includes(char);
 * console.log(isValidChar('#')); // true
 * console.log(isValidChar('.')); // false
 */
export const EMAIL_SPECIAL_CHARACTERS =
  "\\!\\#\\$\\%\\&\\'*\\+\\/\\=?\\^_\\`\\{\\|\\}\\~";

/**
 * @constant USERID_SPECIAL_CHARACTERS
 * @description 유저 아이디에서 허용되는 특수 문자를 정의합니다.
 * 현재는 밑줄(`_`)만 허용하도록 설정되어 있습니다.
 * 이 값을 변경하여 추가적인 특수 문자를 허용할 수 있습니다.
 *
 * @example
 * const regex = new RegExp(`^[A-Za-z0-9${USERID_SPECIAL_CHARACTERS}]+$`);
 * regex.test("user_name"); // true
 */
export const USERID_SPECIAL_CHARACTERS = "_";

/**
 * @constant USERID_MIN
 * @description 유저 아이디의 최소 길이를 정의합니다.
 * 최소 길이는 4글자로 설정되어 있으며, 이를 변경하여 더 작은 값 또는 큰 값으로 설정할 수 있습니다.
 *
 * @example
 * const regex = new RegExp(`^[A-Za-z\\d${USERID_SPECIAL_CHARACTERS}]{${USERID_MIN},}$`);
 * regex.test("abc"); // false (4글자 미만이면 유효하지 않음)
 * regex.test("abcd"); // true (4글자로 유효)
 */
export const USERID_MIN = 4;

/**
 * @constant USERID_MAX
 * @description 유저 아이디의 최대 길이를 정의합니다.
 * 최대 길이는 30글자로 설정되어 있으며, 이를 변경하여 길이 제한을 조정할 수 있습니다.
 *
 * @example
 * const regex = new RegExp(`^[A-Za-z\\d${USERID_SPECIAL_CHARACTERS}]{${USERID_MIN},${USERID_MAX}}$`);
 * regex.test("a".repeat(31)); // false (길이가 31이면 유효하지 않음)
 * regex.test("valid_id_123"); // true (길이가 17글자로 유효)
 */
export const USERID_MAX = 30;

export const BASE_YAER = 1900;

/**
 * @constant {string} GOOGLE_CLIENT_ID
 * Google OAuth 2.0 클라이언트 ID. Google Cloud Console에서 생성된 OAuth 2.0 자격 증명으로 설정됩니다.
 */
export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

/**
 * @constant {string} GOOGLE_CLIENT_SECRET
 * Google OAuth 2.0 클라이언트 시크릿. 인증 요청 시 클라이언트 시크릿이 필요합니다.
 */
export const GOOGLE_CLIENT_SECRET = import.meta.env.VITE_GOOGLE_CLIENT_SECRET;

/**
 * @constant {string} GOOGLE_REDIRECT_URI
 * Google OAuth 2.0 리디렉션 URI. 인증 후 Google이 사용자를 리디렉션할 URL을 지정합니다.
 */
export const GOOGLE_REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI;

/**
 * Kakao 및 Naver API 통합 환경 변수를 정의합니다.
 * 해당 환경 변수는 Vite의 `import.meta.env`를 통해 로드됩니다.
 */

/**
 * Kakao REST API 키입니다.
 * @constant {string}
 */
export const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

/**
 * Kakao 로그인 Redirect URI입니다.
 * @constant {string}
 */
export const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

/**
 * Naver 클라이언트 ID입니다.
 * @constant {string}
 */
export const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;

/**
 * Naver 클라이언트 Secret입니다.
 * @constant {string}
 */
export const NAVER_CLIENT_SECRET = import.meta.env.VITE_NAVER_CLIENT_SECRET;

/**
 * Naver 로그인 Redirect URI입니다.
 * @constant {string}
 */
export const NAVER_REDIRECT_URI = import.meta.env.VITE_NAVER_REDIRECT_URI;

/**
 * Toast 컴포넌트 간의 간격을 정의하는 상수입니다.
 * CSS 단위 `rem`을 사용하여 정의되었습니다.
 *
 * @constant {string}
 * @default "0.75rem"
 *
 * @example
 * // CSS 스타일에 바로 사용
 * const styles = { gap: TOAST_GAP };
 *
 * // 숫자로 변환하여 계산에 사용
 * getNumbersFromText(TOAST_GAP)
 */
export const TOAST_GAP = "0.75rem";

/**
 * 기본 토스트 메시지 표시 시간 (밀리세컨즈).
 * @constant {number}
 */
export const TOAST_DEFAULT_DURATION = 5000;

/**
 * 토스트 메시지가 사라지기 전에 대기 시간 (밀리세컨즈).
 * @constant {number}
 */
export const TOAST_REMOVE_DELAY = 200;

/**
 * 토스트 메시지의 기본 오프셋 값 (px).
 * @constant {string}
 */
export const TOAST_DEFAULT_OFFSET = "10px";

/**
 * 토스트 메시지의 기본 타입. 기본값은 "info".
 * @constant {string}
 */
export const TOAST_DEFAULT_TYPE = "info";

/**
 * 토스트 메시지의 기본 위치. 기본값은 "top".
 * @constant {string}
 */
export const TOAST_DEFAULT_PLACEMENT = "top";

/**
 * 토스트 메시지가 겹쳐서 표시될지 여부를 결정하는 기본값.
 * 기본값은 false.
 * @constant {boolean}
 */
export const TOAST_DEFAULT_OVERLAP = false;

/**
 * "top" 위치에서 토스트 메시지의 페이드 인 애니메이션 방향을 나타내는 값.
 * @constant {string}
 */
export const TOAST_FADE_IN_TOP = "-100%";

/**
 * "top" 위치에서 토스트 메시지의 페이드 아웃 애니메이션 방향을 나타내는 값.
 * @constant {string}
 */
export const TOAST_FADE_OUT_TOP = "100%";

/**
 * "bottom" 위치에서 토스트 메시지의 페이드 인 애니메이션 방향을 나타내는 값.
 * @constant {string}
 */
export const TOAST_FADE_IN_BOTTOM = "100%";

/**
 * "bottom" 위치에서 토스트 메시지의 페이드 아웃 애니메이션 방향을 나타내는 값.
 * @constant {string}
 */
export const TOAST_FADE_OUT_BOTTOM = "-100%";

/**
 * 토스트 메시지 애니메이션의 지속 시간 (밀리세컨즈).
 * @constant {number}
 */
export const TOAST_ANIMATION_DURATION = 300;

/**
 * 밀리초를 초로 변환하기 위한 계수입니다.
 * @constant {number}
 * @default 1000
 */
export const MILLISECONDS_TO_SECONDS = 1000;

/**
 * SELECT의 LISTBOX에서 PAGEUP, PAGEDOWN을 했을 때 이동하는 개수를 위한 상수입니다.
 * @constant {number}
 * @default 10
 */
export const SELECT_LISTBOX_SCROLL_STEP = 10;

/**
 * SELECT의 OPTION의 높이를 위한 상수
 * @constant {number}
 * @default 40
 */
export const SELECT_OPTION_HEIGHT = 40;

export const LOCALSTORAGE_KEY = "www.playground.com";

export const POST_LENGTH_MAX = 150;

export const POST_MEDIA_MAX = 10;
export const POST_IMAGE_SIZE_MAX = 5 * 1024 * 1024;
export const POST_VIDEO_SIZE_MAX = 100 * 1024 * 1024;
