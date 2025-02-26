import { useLanguageContent } from "@shared/@common/models/hooks";
import { sectionDataMap } from "@shared/pages/settings/data";
import { ISectionTabData } from "@shared/pages/settings/types";

const useSectionDataArray = (): { [key: string]: ISectionTabData }[] => {
  const sectionTextMap = useLanguageContent(["sectionTextMap"]);

  const sectionTab = Object.keys(sectionTextMap).map((key) => {
    const sectionText = sectionTextMap[key];
    const sectionData = sectionDataMap[key];

    return Object.keys(sectionText).reduce((arr: any, key: string) => {
      arr[key] = {
        label: sectionText[key]["label"],
        description: sectionText[key]["description"],
        link: sectionData[key]["link"],
        iconName: sectionData[key]["iconName"],
      };

      return arr;
    }, {} as ISectionTabData);
  });

  return sectionTab;
};

export default useSectionDataArray;
