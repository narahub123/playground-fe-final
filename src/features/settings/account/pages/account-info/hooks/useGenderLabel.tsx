import { useLanguageContent } from "@shared/@common/models/hooks";
import { GenderType } from "@shared/auth/types";

const useGenderLabel = (gender: GenderType): string => {
  const { male, female, bigender, nonbinary } = useLanguageContent([
    "hooks",
    "useGenderLabel",
  ]);
  if (gender === "m") return male;
  if (gender === "f") return female;
  if (gender === "b") return bigender;
  if (gender === "n") return nonbinary;
  return "";
};

export default useGenderLabel;
