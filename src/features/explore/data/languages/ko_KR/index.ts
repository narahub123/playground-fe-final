const explore_kr = {
  SearchDropdown: {},
  SearchSettingsIcon: {},
  SearchSettingsDropdown: {
    list: {
      settings: "검색 설정",
      filter: "검색 필터",
      advanced: "고급 검색",
      save: (isExisting: boolean) =>
        isExisting ? "검색어 삭제" : "검색어 저장",
    },
  },
  SearchSuggestionList: {
    recent: "최근",
    saved: "저장된 검색",
    clear: "모두 지우기",
  },
  Search: {
    ph: "검색",
  },
  ClearKeywordsConfirm: {
    title: "모든 최근 검색을 삭제할까요?",
    expl: "이 작업은 취소할 수 없으며 모든 최근 검색이 삭제됩니다.",
    confirm: "지우기",
    deny: "취소",
  },
};

export default explore_kr;
