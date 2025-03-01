import { security_and_account_access_lang } from "./languages";

const combineSecurityAndAccountAccess = (
  countryCode: keyof typeof security_and_account_access_lang
) => {
  return {
    ...security_and_account_access_lang[countryCode],
  };
};

const security_and_account_access = {
  us: combineSecurityAndAccountAccess("us"),
  jp: combineSecurityAndAccountAccess("jp"),
  kr: combineSecurityAndAccountAccess("kr"),
  cn: combineSecurityAndAccountAccess("cn"),
  tw: combineSecurityAndAccountAccess("tw"),
};

export { security_and_account_access };
