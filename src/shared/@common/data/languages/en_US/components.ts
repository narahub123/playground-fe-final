import {
  birthDateList,
  birthMonthList,
  birthYearList,
} from "@features/auth-email/data";
import { google, kakao, naver } from "@shared/@common/assets";
import {
  EMAIL_FORMAT,
  EMPTY,
  PASSWORD_FORBIDDEN,
  PASSWORD_INCOMPLETE,
  PASSWORD_MAX,
  PASSWORD_MIN,
  PASSWORD_SPECIAL_CHARECTERS,
  PASSWORD_UNDER_MINIMUM,
  PHONE_FORMAT_KR,
  USERID_FORBIDDEN,
  USERID_INCOMPLETE,
  USERID_MAX,
  USERID_MIN,
  USERID_SPECIAL_CHARACTERS,
  USERID_UNDER_MINIMUM,
  USERNAME_MAX,
  USERNAME_MIN,
  USERNAME_UNDER_MINIMUM,
} from "@shared/@common/constants";
import ERRORS from "./errors";

const getErrorTitle = (code: keyof typeof ERRORS.ERROR_TITLE_CODE) => {
  return ERRORS.ERROR_TITLE_CODE[code];
};

const getErrorDescription = (
  code: keyof typeof ERRORS.ERROR_DESCRIPTION_CODE
) => {
  return ERRORS.ERROR_DESCRIPTION_CODE[code];
};

const components = {
  Input: {
    iconTitle: {
      password: {
        eyeoff: "Hide Password",
        eye: "Show Password",
      },
    },
  },
  Dropdown: {
    emptyResult: "No results found for the given keyword.",
  },
  Modal: {
    ModalCloseButton: {
      iconTitle: "Close",
    },
  },
  ScreenPersonalInfo: {
    title: "Create an account.",
    usernameLabel: "Username",
    usernameError: {
      EMPTY: { regExp: EMPTY, errorMessage: "Please enter a username." },
      UNDER_MINIMUM: {
        regExp: USERNAME_UNDER_MINIMUM,
        errorMessage: `The username must be at least ${USERNAME_MIN} characters and at most ${USERNAME_MAX} characters.`,
      },
      EXCEED: {
        errorMessage: `The username can be up to ${USERNAME_MAX} characters.`,
      },
    },
    emailLabel: "Email",
    emailError: {
      EMPTY: { regExp: EMPTY, errorMessage: "Please enter an email location." },
      FORMAT: {
        regExp: EMAIL_FORMAT,
        errorMessage:
          "Please enter a valid email location format. \nExample: username@example.com",
      },
      DUPLICATE: {
        errorMessage: "This email is already registered.",
      },
      DISCONNECT: {
        errorMessage:
          "Unable to connect to the server. Please try again later.",
      },
    },
    birthHeading: "Date of Birth",
    birthExpl:
      "This information will not be publicly displayed. Verify your age regardless of your account's topic, whether it's business, pets, etc.",
    birthYearLabel: "Year",
    birthMonthLabel: "Month",
    birthDateLabel: "Day",
    birthYearList: birthYearList,
    birthMonthList: birthMonthList,
    birthDateList: birthDateList,
    birthYearUnit: "",
    birthMonthUnit: "",
    birthDateUnit: "",
    button: "Next",
  },
  InputUsernameSignup: {
    label: "Username",
    error: {
      EMPTY: { regExp: EMPTY, errorMessage: "Please enter a username." },
      UNDER_MINIMUM: {
        regExp: USERNAME_UNDER_MINIMUM,
        errorMessage: `The username must be at least ${USERNAME_MIN} characters and at most ${USERNAME_MAX} characters.`,
      },
      EXCEED: {
        errorMessage: `The username can be up to ${USERNAME_MAX} characters.`,
      },
    },
  },
  InputEmailSignup: {
    label: "Email",
    error: {
      EMPTY: { regExp: EMPTY, errorMessage: "Please enter an email location." },
      FORMAT: {
        regExp: EMAIL_FORMAT,
        errorMessage:
          "Please enter a valid email location format. \nExample: username@example.com",
      },
      DUPLICATE: {
        errorMessage: "This email is already registered.",
      },
      DISCONNECT: {
        errorMessage:
          "Unable to connect to the server. Please try again later.",
      },
    },
  },
  InputPhoneSignup: {
    label: "Phone Number",
    error: {
      EMPTY: { regExp: EMPTY, errorMessage: "Please enter a phone number." },
      FORMAT: {
        regExp: PHONE_FORMAT_KR,
        errorMessage: "Please enter the phone number in the correct format.",
      },
      DUPLICATE: {
        errorMessage: "This email is already registered.",
      },
      DISCONNECT: {
        errorMessage:
          "Unable to connect to the server. Please try again later.",
      },
    },
  },
  InputGender: {
    label: "Gender",
    list: [
      { text: "Male", value: "m" },
      { text: "Female", value: "f" },
      { text: "Bisexual", value: "b" },
      { text: "Neutral", value: "n" },
    ],
  },
  InputBirthYear: { label: "Year", unit: "" },
  InputBirthMonth: { label: "Month", unit: "" },
  InputBirthDate: { label: "Day", unit: "" },
  Button: {
    empty: "Please add text or an icon.",
    ariaLabel: {
      loading: "Loading",
      button: "Click the button",
    },
  },
  ScreenPassword: {
    title: "Password is required.",
    expl: "It must be at least 8 characters long.",
    button: "Next",
  },
  InputPasswordSignup: {
    label: "Password",
    error: {
      REQUIRED: {
        errorMessage: "Please set the password first.",
      },
      MISMATCH: {
        errorMessage: "The password does not match the one you set.",
      },
      EMPTY: {
        regExp: EMPTY,
        errorMessage: "Please enter a password.",
      },
      FORBIDDEN: {
        regExp: PASSWORD_FORBIDDEN,
        errorMessage: `The password must consist of lowercase letters, uppercase letters, numbers, and special characters (${PASSWORD_SPECIAL_CHARECTERS}).`,
      },
      UNDER_MINIMUM: {
        regExp: PASSWORD_UNDER_MINIMUM,
        errorMessage: `The password must be between ${PASSWORD_MIN} and ${PASSWORD_MAX} characters.`,
      },
      INCOMPLETE: {
        regExp: PASSWORD_INCOMPLETE,
        errorMessage: `The password must include at least one lowercase letter, one uppercase letter, one number, and one special character (${PASSWORD_SPECIAL_CHARECTERS}).`,
      },
      EXCEED: {
        errorMessage: `The password cannot exceed ${PASSWORD_MAX} characters.`,
      },
    },
  },
  ScreenUserId: {
    title: "Please set your ID.",
    expl: "@Your user ID is a unique ID just for you. You can change it anytime later.",
    recommend: "Recommended ID",
    button: "Next",
  },
  InputUserIdSignup: {
    label: "User ID",
    error: {
      EMPTY: {
        regExp: EMPTY,
        errorMessage: "Please enter your user ID.",
      },
      FORBIDDEN: {
        regExp: USERID_FORBIDDEN,
        errorMessage: `User ID must consist of lowercase letters, uppercase letters, numbers, and special characters (${USERID_SPECIAL_CHARACTERS}).`,
      },
      UNDER_MINIMUM: {
        regExp: USERID_UNDER_MINIMUM,
        errorMessage: `User ID must be between ${USERID_MIN} and ${USERID_MAX} characters.`,
      },
      INCOMPLETE: {
        regExp: USERID_INCOMPLETE,
        errorMessage: `User ID must contain at least one of each: lowercase letters, uppercase letters, numbers, and special characters (${USERID_SPECIAL_CHARACTERS}).`,
      },
      EXCEED: {
        errorMessage: `User ID cannot exceed ${USERID_MAX} characters.`,
      },
      DUPLICATE: {
        errorMessage: `This user ID already exists.`,
      },
      DISCONNECT: {
        errorMessage: `The server is currently disconnected. Please try again later.`,
      },
    },
  },
  ScreenProfileImage: {
    title: "Select Profile Picture",
    expl: "Do you have a favorite selfie? Upload it now.",
    button: {
      skip: "Skip for now",
      next: "Next",
    },
  },
  LightboxCloseButton: {
    iconTitle: "Close",
  },
  LightboxDisplayButton: {
    iconTitle: "Display",
  },
  LightboxNextButton: {
    iconTitle: "Next",
  },
  LightboxPrevButton: {
    iconTitle: "Previous",
  },
  ImageUploader: {
    iconTitle: "Add Image",
  },
  ScreenNotifications: {
    title: "Turn on Notifications",
    expl: "Stay updated with what's happening and make the most out of PlayGround.",
    button: {
      skip: "Skip for now",
      next: "Next",
    },
  },
  ScreenLanguage: {
    title: "What is your preferred language?",
    expl: "Choose your preferred language to view posts, people, and trends.",

    button: "Sign Up",
    success: {
      title: "Registration Success",
      description:
        "Registration is complete. You can enjoy PlayGround after logging in.",
    },
    errors: {
      title: getErrorTitle,
      description: getErrorDescription,
    },
  },
  InputLanguage: {
    label: "Language",
    list: [
      { text: "Korean : 한국어", value: "ko-KR" },
      { text: "English : 영어", value: "en-US" },
      { text: "Japanese : 日本語", value: "ja-JP" },
      { text: "Chinese - Simplified : 简体中文", value: "zh-CN" },
      { text: "Chinese - Traditional : 繁體中文", value: "zh-TW" },
    ],
  },
  ScreenAccount: {
    title: "Find My PlayGround Account",
    expl: "To reset your password, please enter the email, phone number, or user ID associated with your account.",
    button: "Next",
  },

  ScreenChooseAuthMethod: {
    title: "How would you like to receive the verification code?",
    expl: "You need to verify your identity before changing your password.",
    expl1: "First, select the device to receive the verification code.",
    button: "Next",
    cancel: "Cancel",
    msg: (item: string, type: string) =>
      `Send ${type === "emails" ? "email" : "text message"} to ${item}`,
    errors: {
      title: getErrorTitle,
      description: getErrorDescription,
    },
  },

  ScreenVerificationCode: {
    title: "Code Sent",
    expl: "Please check your email to see if you received the verification code. To request a new code, go back and select the verification method again.",
    button: "Next",
    back: "Go Back",
    success: {
      title: "Verification Code Confirmed",
      description:
        "The verification code has been successfully confirmed. Please change your password in the settings.",
    },
    errors: {
      title: getErrorTitle,
      description: getErrorDescription,
    },
  },

  InputVerificationCode: {
    label: "Enter the code.",
  },

  ScreenSelectLogin: {
    title: "Log in to PlayGround",
    loginList: [
      { text: "Log in with Google", img: google, type: "google" },
      { text: "Log in with Naver", img: naver, type: "naver" },
      { text: "Log in with Kakao", img: kakao, type: "kakao" },
    ],
    divider: "or",
    forgetPassword: "Forgot your password?",
    signup: "Don't have an account?",
    signupButton: "Sign Up",
    button: "Next",
  },
  InputAccountLogin: {
    label: "Email, Phone Number, User ID",
    error: [],
    errMsg: (type: string) => {
      return `The ${
        type === "email"
          ? "email"
          : type === "phone"
          ? "phone number"
          : "user ID"
      } does not exist.`;
    },
  },
  ScreenLoginPassword: {
    title: "Enter your password.",
    forgetPassword: "Find password",
    button: "Log in",
    errors: {
      title: getErrorTitle,
      description: getErrorDescription,
    },
  },

  InputAccountLoginDisabled: {
    label: (field: string) =>
      field === "email"
        ? "Email"
        : field === "phone"
        ? "Phone Number"
        : "Username",
  },

  InputPasswordLogin: {
    label: "Password",
  },

  SelectYearSignup: {
    label: "Year",
    unit: "",
  },
  SelectMonthSignup: {
    label: "Month",
    unit: "",
  },
  SelectDateSignup: {
    label: "Date",
    unit: "",
  },
  SelectGenderSignup: {
    label: "Gender",
    options: [
      { text: "Male", value: "m" },
      { text: "Female", value: "f" },
      { text: "Bisexual", value: "b" },
      { text: "Neutral", value: "n" },
    ],
  },
  SelectLanguage: {
    label: "Language",
    options: [
      { text: "Korean : 한국어", value: "ko-KR" },
      { text: "English : 영어", value: "en-US" },
      { text: "Japanese : 日本語", value: "ja-JP" },
      { text: "Chinese - Simplified : 简体中文", value: "zh-CN" },
      { text: "Chinese - Traditional : 繁體中文", value: "zh-TW" },
    ],
  },
  CountBadge: {
    ariaLabel: (count: number) => `You have ${count} unread notifications.`,
  },
  NavMoreButton: {
    moreTitle: "More",
    itemTexts: {
      lists: "Lists",
      bookmarks: "Bookmarks",
      monetization: "Monetization",
      ads: "Ads",
      settings: "Settings",
    },
  },
  WriteButton: {
    writeTitle: "Post",
  },
  AccountManageModal: {
    title: "Account",
    addBtn: "Add Existing Account",
    expl: `If you have two or more PG accounts, you can add them and easily switch between them. You can add up to 5 accounts.`,
    logoutBtn: "Log out of all accounts",
  },
  LogoutModal: {
    title: "Log out of the account?",
    all: "All",
    expl1:
      "This applies only to this account. You will remain logged in to other accounts.",
    expl2: "This applies to all your accounts across all browser tabs.",
    logout: "Log out",
    cancel: "Cancel",
  },
};

export default components;
