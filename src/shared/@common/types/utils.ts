interface IPlayGroundData {
  accessToken: string;
  activeSessionId: string;
}

interface ISectionText {
  label: string;
  description?: string;
}

interface ISectionTextMap {
  [sectionKey: string]: {
    [itemkey: string]: ISectionText;
  };
}

export type { IPlayGroundData, ISectionText, ISectionTextMap };
