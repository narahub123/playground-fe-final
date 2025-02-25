import { Icons } from "@shared/@common/ui/icons";
import { ISectionText } from "@shared/@common/types";

interface ISectionData {
  link: string;
  iconName?: keyof typeof Icons;
}

interface ISectionDataMap {
  [sectionKey: string]: {
    [itemKey: string]: ISectionData;
  };
}

interface ITabData extends ISectionData, ISectionText {}

export type { ISectionData, ITabData, ISectionDataMap };
