const ERROR_TITLE_CODE = {
  EMAIL_DUPLICATE_CHECK_FAILED: "Email Duplicate Check Failed",
  PHONE_DUPLICATE_CHECK_FAILED: "Phone Number Duplicate Check Failed",
  USERID_DUPLICATE_CHECK_FAILED: "User ID Duplicate Check Failed",
  GET_CONTACTS_FAILED: "Failed to Retrieve Contacts",
  USER_REGISTRATION_FAILED: "User Registration Failed",
  LOGIN_FAILED: "Login Failed",
  VERIFICATION_CODE_VERIFICATION_FAILED: "Verification Code Validation Failed",
  VERIFICATION_CODE_SEND_FAILED: "Failed to Send Verification Code",
  VERIFY_PASSWORD_FAILED: "Password verification failed",
};

const ERROR_DESCRIPTION_CODE = {
  // validation error
  MISSING_EMAIL: "Email is required. Please provide an email.",
  MISSING_PHONE: "Phone number is required. Please provide a phone number.",
  MISSING_USERID: "User ID is required. Please provide a user ID.",
  MISSING_USER_IDENTIFIER:
    "At least one of email, phone number, or user ID is required. Please provide one.",
  MISSING_LANGUAGE_SETTING: "Language setting is required. Please provide it.",
  MISSING_PASSWORD: "Password is required. Please provide a password.",
  MISSING_USERNAME: "Username is required. Please provide a username.",
  MISSING_BIRTH: "Date of birth is required. Please provide it.",
  MISSING_NOTIFICATION_SETTINGS:
    "Notification settings are required. Please provide them.",
  MISSING_DEVICE: "Device information is required. Please provide it.",
  MISSING_LOCATION: "Address information is required. Please provide it.",
  MISSING_IP: "IP address is required. Please provide it.",
  MISSING_DEVICE_IP_LOCATION: "Device, IP, and location are required.",
  MISSING_VERIFICATION_CODE:
    "Verification code is required. Please provide a verification code.",

  // verification failed
  VERIFICATION_CODE_MISMATCH: "Verification code does not match.",

  // authentication failed
  PASSWORD_UNMATCHED: "Password does not match.",
  VERIFICATION_CODE_EXPIRED:
    "Verification code has expired. Please request a new code and try again.",

  // session error
  SESSION_CREATION_FAILED: "Failed to create an active session.",

  // save failed
  LOGIN_FAILURE_UNSAVED: "Failed to save login failure record.",
  LOGIN_RECORD_SAVE_FAILED: "Failed to save login record.",
  FAILED_TO_CREATE_VERIFICATION_CODE: "Failed to create verification code.",

  // update failed
  LOCK_PROCESS_FAILED: "An error occurred during account lock processing.",

  // delete failed
  PARTIAL_DELETION_FAILED: "Some login failure records were not deleted.",
  FAILED_TO_DELETE_VERIFICATION_CODE: "Failed to delete verification code.",

  // account lock
  TOO_MANY_LOGIN_FAILURES: "Exceeded maximum login failure attempts.",
  BRUTE_FORCE_DETECTED:
    "Brute-force attack detected. Your account has been locked. Please contact the administrator to unlock it.",

  // not found
  USER_NOT_FOUND: "No matching user found.",
  EMAIL_INFO_NOT_FOUND: "Email not found",
  PHONE_INFO_NOT_FOUND: "Phone number not found.",
  CONTACT_INFO_NOT_FOUND: "Contact information not found.",

  // unknown error
  UNKNOWN_ERROR: "An unknown error occurred",
};

const ERRORS = { ERROR_DESCRIPTION_CODE, ERROR_TITLE_CODE };

export default ERRORS;
