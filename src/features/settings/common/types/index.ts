import { Icons } from "@shared/@common/ui/icons";
import { ISectionText } from "@shared/@common/types";
import { ReactNode } from "react";

interface ISectionData {
  link: string;
  iconName?: keyof typeof Icons;
}

interface ISectionDataMap {
  [sectionKey: string]: {
    [itemKey: string]: ISectionData;
  };
}

interface ISectionTabData extends ISectionData, ISectionText {
  extra?: ReactNode;
}

export type { ISectionData, ISectionTabData, ISectionDataMap };
