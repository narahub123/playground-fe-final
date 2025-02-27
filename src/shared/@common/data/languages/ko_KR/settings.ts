const settings = {
  ExploreSection: {
    title: "설정",
  },
  AccountSection: {
    title: "계정",
    description:
      "계정 정보를 확인하고, 데이터 기록을 다운로드하거나, 계정 비활성화 옵션에 대해 자세히 알아보세요.",
  },
  SecurityAndAccountAccessSection: {
    title: "보안 및 계정 접근 권한",
    description:
      "계정의 보안을 관리하고, 계정에 연결된 앱을 포함해 계정 사용을 추적합니다.",
  },
  PrivacyAndSafetySection: {
    title: "걔인 정보 및 안전",
    description: "PlayGround에서 표시되고 공유되는 정보를 관리합니다.",
    heading1: "내 PlayGround 활동",
    heading2: "데이터 공유 및 맞춤 설정",
  },
  NotificationsSection: {
    title: "알림",
    description: "활동, 관심사 및 추천에 관해 받는 알림의 종류를 선택합니다.",
  },
  AccessibiltyAndDisplayAndLanguagesSection: {
    title: "접근성, 표시, 언어",
    description: "PlayGround의 콘텐츠 표시 방식을 관리합니다.",
  },
  SettingsSearch: {
    placeholder: "설정 검색하기",
  },
  BackIcon: {
    title: "뒤로가기",
  },
  AccountInfoSection: {
    title: "계정 정보",
  },
  ChangePasswordSection: {
    title: "비밀번호 변경",
    expl: (numOfSession: number) =>
      `비밀번호를 변경하면 현재 사용 중인 세션을 제외한 모든 활성 X 세션에서 로그아웃됩니다. 내 계정에 대한 액세스 권한이 있는 ${numOfSession}개의 애플리케이션은(는) 영향을 받지 않습니다.`,
  },
};

export default settings;
