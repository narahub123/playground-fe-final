import {
  birthDateList,
  birthMonthList,
  birthYearList,
} from "@features/auth-email/data";
import {
  EMAIL_FORMAT,
  EMPTY,
  PASSWORD_FORBIDDEN,
  PASSWORD_INCOMPLETE,
  PASSWORD_MAX,
  PASSWORD_MIN,
  PASSWORD_SPECIAL_CHARECTERS,
  PASSWORD_UNDER_MINIMUM,
  USERNAME_MAX,
  USERNAME_MIN,
  USERNAME_UNDER_MINIMUM,
} from "@shared/@common/constants";

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
  PersonalInfoScreen: {
    title: "Create an account.",
    usernameLabel: "Username",
    usernameError: {
      EMPTY: { regExp: EMPTY, errorMessage: "Please enter a username." },
      UNDER_MINIMUM: {
        regExp: USERNAME_UNDER_MINIMUM,
        errorMessage: `The username must be at least ${USERNAME_MIN} characters and at most ${USERNAME_MAX} characters.`,
      },
      EXCEED: {
        regExp: "",
        errorMessage: `The username can be up to ${USERNAME_MAX} characters.`,
      },
    },
    emailLabel: "Email",
    emailError: {
      EMPTY: { regExp: EMPTY, errorMessage: "Please enter an email address." },
      FORMAT: {
        regExp: EMAIL_FORMAT,
        errorMessage:
          "Please enter a valid email address format. \nExample: username@example.com",
      },
      DUPLICATE: {
        regExp: "",
        errorMessage: "This email is already registered.",
      },
      DISCONNECT: {
        regExp: "",
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
  Button: {
    empty: "Please add text or an icon.",
    ariaLabel: {
      loading: "Loading",
      button: "Click the button",
    },
  },
  PasswordScreen: {
    title: "Password is required.",
    expl: "It must be at least 8 characters long.",
    button: "Next",
  },
  InputPassword: {
    passwordLabel: "Password",
    passwordError: {
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
        regExp: "",
        errorMessage: `The password cannot exceed ${PASSWORD_MAX} characters.`,
      },
    },
  },
};

export default components;
