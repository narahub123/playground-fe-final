import { ISectionTextMap } from "@shared/@common/types";

const sectionTextMap: ISectionTextMap = {
  ExploreSection: {
    account: {
      label: "계정",
    },
    securityAndAccountAccess: {
      label: "보안 및 계정 접근 권한",
    },
    privacyAndSafety: {
      label: "개인정보 및 안전",
    },
    notifications: {
      label: "알림",
    },
    accessibilityAndDisplayAndLanguage: {
      label: "접근성, 표시, 언어",
    },
  },
  AccountSection: {
    accountInfo: {
      label: "계정 정보",
      description: "휴대폰 번호와 이메일 주소와 같은 계정 정보를 조회하세요.",
    },
    password: {
      label: "비밀번호 변경",
      description: "언제든지 비밀번호를 변경하세요.",
    },
    downloadData: {
      label: "내 데이터 기록 파일을 다운로드하세요.",
      description: "계정에 저장된 정보의 유형에 대한 인사으트를 얻으세요.",
    },
    deactivate: {
      label: "계정 비활성화",
      description: "계정을 비활성화하는 법을 알아보세요.",
    },
  },
  SecurityAndAccountAccessSection: {
    security: {
      label: "보안",
      description: "계정의 보안을 관리합니다.",
    },
    appsAndSessions: {
      label: "앱 및 세션",
      description:
        "계정과 계정에 연결한 앱에 로그인한 시점에 관한 정보를 봅니다.",
    },
    connectedAccounts: {
      label: "연결된 계정",
      description:
        "PlayGround에 로그인하기 위해 연결된 Google, 네이버, 또는 카카오 계정을 관리합니다.",
    },
    delegate: {
      label: "위임",
      description: "공유 계정을 관리합니다.",
    },
  },
  PrivacyAndSafetySection: {
    audienceAndTagging: {
      label: "오디언스, 미디어 및 태그하기",
      description: "PlayGround에서 다른 사람들에게 공개하는 정보를 관리합니다.",
    },
    myPosts: {
      label: "내 게시물",
      description: "게시물과 관련된 정보를 관리합니다.",
    },
    contentISee: {
      label: "표시되는 콘텐츠",
      description:
        "토픽과 관심사 등 사용자의 선호도를 바탕으로 PlayGround에 표시되는 정보를 결정합니다.",
    },
    muteAndBlock: {
      label: "뮤트 및 차단",
      description: "내가 뮤트했거나 차단한 계정, 단어 및 알림을 관리합니다.",
    },
    directMessages: {
      label: "메시지",
      description: "나에게 직접 메시지를 보낼 수 있는 대상을 관리합니다.",
    },
    contacts: {
      label: "계정찾기 및 연락처",
      description: "계정찾기 설정을 제어하고 가져온 연락처를 관리합니다.",
    },
    adsPreferences: {
      label: "광고 환경설정",
      description: "PlayGround에서 광고 설정을 관리합니다.",
    },
    locationInfo: {
      label: "위치 정보",
      description:
        "PlayGround에서 사용자 환경을 맞춤 설정할 때 사용하는 위치 정보를 관리합니다.",
    },
  },
  NotificationsSection: {
    notification_filters: {
      label: "필터",
      description:
        "확인하고자 하는 알림과 확인하고 싶지 않은 알림을 선택하세요.",
    },
    notification_preferences: {
      label: "환경설정",
      description: "알림 유형별로 환경설정을 선택하세요.",
    },
  },
  AccessibiltyAndDisplayAndLanguageSection: {
    accessibility: {
      label: "접근성",
      description: "색 대비와 동작 제한 등 PlayGround에서의 환경을 관리합니다.",
    },
    display: {
      label: "표시",
      description:
        "글꼴 크기, 색상 및 배경을 관리합니다. 이러한 설정은 이 브라우저의 모든 PlayGround 계정에 적용됩니다.",
    },
    language: {
      label: "언어",
      description: "사용자 환경을 맞춤 설정할 때 사용되는 언어를 관리합니다.",
    },
    data: {
      label: "데이터 사용량",
      description:
        "PlayGround는 이 디바이스에서 사용자의 일부 네트워크 데이터를 사용하는 방식을 제한합니다.",
    },
  },
};

export default sectionTextMap;
