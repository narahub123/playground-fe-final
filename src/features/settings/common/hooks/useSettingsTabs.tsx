import { useLanguageContent } from "@shared/@common/models/hooks";
import { ISectionTextMap } from "@shared/@common/types";
import { useToast } from "@shared/@common/ui/components/Toast/hooks";
import { sectionDataMap } from "../data";
import { ISectionData, ISectionTabData } from "../types";

const useSettingsTabs = (section: keyof ISectionTextMap): ISectionTabData[] => {
  // 언어 설정 가져오기: label, description
  const sectionTextMap = useLanguageContent([
    "sectionTextMap",
    section as string,
  ]);

  const toast = useToast();

  // 데이터 가져오기 : link, icon
  const sectionDataRecord: { [key: string]: ISectionData } =
    sectionDataMap[section];

  if (!sectionDataRecord) {
    toast({
      title: "에러",
      description: "섹션에 대한 자료를 받아오지 못했습니다. 다시 시도해주세요.",
      type: "error",
    });

    return [];
  }

  const mergedObj = Object.keys(sectionTextMap)
    .filter((key) => key in sectionDataRecord)
    .map((key) => ({
      label: sectionTextMap[key]["label"] ?? "에러 발생",
      description: sectionTextMap[key]["description"],
      link: sectionDataRecord[key]["link"],
      iconName: sectionDataRecord[key]["iconName"],
    }));

  // 배열로 변환하기
  return Object.values(mergedObj);
};

export default useSettingsTabs;
