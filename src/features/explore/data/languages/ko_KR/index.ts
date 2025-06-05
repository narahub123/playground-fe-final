import countryNames from "@shared/@common/data/languages/ko_KR/countryNames";

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
    countryNames,
  },
  LocationModal: {
    title: "지역",
    countryNames: Object.values(countryNames),
  },
  SearchSettingsModal: {
    title: "검색 설정",
    heading1: "민감한 내용의 콘텐츠 숨기기",
    expl1: "검색 결과에서 민감한 콘텐츠를 포함할 수 있는 게시물을 숨깁니다.",
    heading2: "차단 또는 뮤트한 계정 제외하기",
    expl2: "검색 결과에서 내가 차단 또는 뮤트한 계정을 제외하려면 사용하세요.",
  },
  SearchFilterModal: {
    title: "검색 필터",
    footer: "고급 검색",
    heading1: "사용자",
    radio1: "모든 사용자",
    radio2: "내가 팔로우하는 사람들",
    heading2: "위치",
    radio3: "어디에서나",
    radio4: "현 위치 주변",
  },
  SearchAdvancedModal: {
    title: "고급 검색",
    search__btn: "검색",
    heading1: "단어",
    heading2: "계정",
    heading3: "필터",
    heading4: "참여",
    heading5: "날짜",
    filterHeading1: "답글",
    filterHeading2: "링크",
    filterComments: [
      {
        text: "답글 및 원본 게시물 포함",
        value: "",
      },
      {
        text: "답글만",
        value: "comments",
      },
    ],
    filterLinks: [
      {
        text: "링크가 추가된 게시물 포함",
        value: "",
      },
      {
        text: "링크가 추가된 게시물만 보기",
        value: "links",
      },
    ],
  },
  InputSearchAdvanced: {
    labelsAndExpls: {
      allKeywords: {
        label: "다음 단어 모두 포함",
        expl: "예: 무슨 일 · '무슨'과 '일' 모두 포함",
      },
      phrase: {
        label: "다음 문구 그대로 포함",
        expl: "예: 깜짝 할인 · '깜짝 할인'이라는 문구를 그대로 포함",
      },
      anyKeywords: {
        label: "다음 단어 제외",
        expl: "예: 고양이 개 · '고양이'를 포함하지 않고 '개'를 포함하지 않음",
      },
      excludeKeywords: {
        label: "다음 단어 제외",
        expl: "예: 고양이 개 · '고양이'를 포함하지 않고 '개'를 포함하지 않음",
      },
      hashtags: {
        label: "다음 해시태그",
        expl: "예: #추억공유 · 해시태그 #추억공유 포함",
      },
      fromAccounts: {
        label: "다음 계정에서 작성",
        expl: "예: @X · @X에서 보냄",
      },
      toAccounts: {
        label: "다음 계정으로 보냄",
        expl: "예: @X · @X에 답글로 보냄",
      },
      mentionsToAccounts: {
        label: "다음 계정 맨션",
        expl: "예: @SFBART @Caltrain · @SFBART 님을 멘션하거나 @Caltrain 님을 멘션함",
      },
    },
  },
};

export default explore_kr;
