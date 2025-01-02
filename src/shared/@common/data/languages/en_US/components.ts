import {
  birthDateList,
  birthMonthList,
  birthYearList,
} from "@features/auth-email/data";

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
    emailLabel: "Email",
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
  },
};

export default components;
