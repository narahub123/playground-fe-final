import { privacy_and_safety_lang } from "./languages";

const combinePrivacyAndSafety = (
  countryCode: keyof typeof privacy_and_safety_lang
) => {
  return {
    ...privacy_and_safety_lang[countryCode],
  };
};

const privacy_and_safety = {
  us: combinePrivacyAndSafety("us"),
  jp: combinePrivacyAndSafety("jp"),
  kr: combinePrivacyAndSafety("kr"),
  cn: combinePrivacyAndSafety("cn"),
  tw: combinePrivacyAndSafety("tw"),
};

export { privacy_and_safety };
