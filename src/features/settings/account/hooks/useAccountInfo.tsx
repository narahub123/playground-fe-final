import {
  getDisplay,
  getPrivacy,
  selectUser,
} from "@shared/@common/models/selectors";
import { useSelector } from "react-redux";
import useCountryName from "./useCountryName";
import { useLanguageContent } from "@shared/@common/models/hooks";
import useInternationalAge from "./useInternationalAge";
import useGenderLabel from "./useGenderLabel";
import { Button } from "@shared/@common/ui/components";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";

const useAccountInfo = (): {
  description: string;
  extra?: ReactNode;
}[] => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const privacy = useSelector(getPrivacy);
  const display = useSelector(getDisplay);

  const { yes, no, birth, profile, text } = useLanguageContent([
    "hooks",
    "useAccountInfo",
  ]);

  const screenName = user.userId ? `@${user.userId}` : "N/A";
  const phone = user.phones[0] ?? "N/A";
  const email = user.emails[0] ?? "N/A";
  const isAuthorized = user.isAuthorized ? yes : no;
  const isPostPrivate = privacy.isPostPrivate ? yes : no;
  const countryName = useCountryName(user.country ?? "kr");
  const gender = useGenderLabel(user.gender ?? "");
  const language = display.language ?? "ko-KR";
  const createdAt = new Date(user.createdAt).toLocaleString();
  const ip = user.ip ?? "N/A";
  const birthText = user.birth
    ? `${user.birth.year}${birth.year} ${user.birth.month}${birth.month} ${user.birth.date}${birth.date}`
    : "N/A";
  const component =
    language.includes("KR") || language.includes("JP") ? (
      <>
        <Button
          variant="plain"
          fontColor="colorTheme"
          onClick={() => {
            navigate(`/${user.userId}`);
          }}
        >
          {profile}
        </Button>
        <span>{text}</span>
      </>
    ) : (
      <>
        <span>{text}</span>
        <Button
          variant="plain"
          fontColor="colorTheme"
          onClick={() => {
            navigate(`/${user.userId}`);
          }}
        >
          {profile}
        </Button>
      </>
    );

  const age = useInternationalAge(user.birth);

  const accountInfo: {
    [key: string]: {
      description: string;
      extra?: ReactNode;
    };
  } = {
    screenName: {
      description: screenName,
    },
    phone: {
      description: phone,
    },
    email: {
      description: email,
    },
    isAuthorized: {
      description: isAuthorized,
    },
    isPostPrivate: {
      description: isPostPrivate,
    },
    createdAt: {
      description: createdAt,
      extra: ip,
    },
    country: {
      description: countryName,
    },
    languages: {
      description: language,
    },
    gender: {
      description: gender,
    },
    birth: {
      description: birthText,
      extra: component,
    },
    age: {
      description: age,
    },
  };

  return Object.values(accountInfo);
};

export default useAccountInfo;
