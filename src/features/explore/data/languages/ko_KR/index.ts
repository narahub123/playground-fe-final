const explore_kr = {
  SearchDropdown: {
    recent: "최근",
    saved: "저장된 검색",
    clear: "모두 지우기",
  },
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
};

export default explore_kr;
