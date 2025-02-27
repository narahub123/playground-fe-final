const hooks = {
  useInputContext: {
    error: `InputContext is not provided.`,
  },
  useLightboxContext: {
    error: `LightboxContext was not provided.`,
  },
  useContext: {
    error: (context: string) =>
      `use${context} must be used within the ${context}Provider.`,
  },
  useValidateChildren: {
    error: (childTypeName: string) =>
      `Error: ${childTypeName} cannot be used as a child.`,
  },
  useGenderLabel: {
    male: "Male",
    female: "Female",
    bigender: "Bigender",
    nonbinary: "Non-binary",
  },
  useInternationalAge: {
    yearOld: "years old",
    monthOld: "months old",
    dateOld: "days old",
    birthDate: "Born today!!",
  },
  useAccountInfo: {
    yes: "Yes",
    no: "No",
    birth: {
      year: "Year",
      month: "Month",
      date: "Day",
    },
    profile: "Profile",
    text: "Add date of birth to",
  },
};

export default hooks;
