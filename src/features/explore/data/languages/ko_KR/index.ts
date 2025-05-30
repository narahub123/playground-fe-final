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
  ExploreSettingModal: {
    title: "탐색 설정",
    heading1: "위치",
    option1: "이 지역의 콘텐츠 보기",
    description1:
      "이 기능을 사용하면 지금 주변에서 무슨 일이 일어나고 있는지 알아볼 수 있습니다.",
    heading2: "맞춤 설정",
    option2: "나를 위한 트렌드",
    description2:
      "내 위치와 내가 팔로우하는 사람을 기반으로 트렌드를 맞춤 설정할 수 있습니다.",
    exploreLocataion: "위치탐색",
  },
};

export default explore_kr;
