interface ISearchContext {
  page: number;
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface IRect {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

interface IAdvancedSearch {
  keywords: {
    allKeywords: string;
    phrase: string;
    anyKeywords: string;
    excludeKeywords: string;
    hashtags: string;
  };
  accounts: {
    fromAccounts: string;
    toAccounts: string;
    mentionsToAccounts: string;
  };
  filter: {
    comments: {
      isOn: boolean;
      range: "" | "comments";
    };
    links: {
      isOn: boolean;
      range: "" | "links";
    };
  };
  engagement: {
    min_comments: number;
    min_likes: number;
    min_reposts: number;
  };
  period: {
    since: {
      year?: number;
      month?: number;
      date?: number;
    };
    until: {
      year?: number;
      month?: number;
      date?: number;
    };
  };
}

export type { ISearchContext, IRect, IAdvancedSearch };
