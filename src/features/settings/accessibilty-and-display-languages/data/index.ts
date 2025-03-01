import { accessibilty_and_display_languages_lang } from "./languages";

const combineAccessbilityAndDisplayAndLanguages = (
  countryCode: keyof typeof accessibilty_and_display_languages_lang
) => {
  return {
    ...accessibilty_and_display_languages_lang[countryCode],
  };
};

const accessibilty_and_display_languages = {
  us: combineAccessbilityAndDisplayAndLanguages("us"),
  jp: combineAccessbilityAndDisplayAndLanguages("jp"),
  kr: combineAccessbilityAndDisplayAndLanguages("kr"),
  cn: combineAccessbilityAndDisplayAndLanguages("cn"),
  tw: combineAccessbilityAndDisplayAndLanguages("tw"),
};

export { accessibilty_and_display_languages };
