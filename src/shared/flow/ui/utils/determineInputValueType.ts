import { EMAIL_FORMAT, PHONE_FORMAT_KR } from "@shared/@common/constants";

const determineInputValueType = (
  inputValue: string
): "email" | "phone" | "userId" => {
  const emailRegex = new RegExp(EMAIL_FORMAT);
  const phoneRegex = new RegExp(PHONE_FORMAT_KR);

  if (emailRegex.test(inputValue)) {
    return "email";
  } else if (phoneRegex.test(inputValue)) {
    return "phone";
  } else return "userId";
};

export default determineInputValueType;
