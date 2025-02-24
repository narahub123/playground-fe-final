import { google, kakao, naver } from "@shared/@common/assets";

const pages = {
  AuthPage: {
    title: "안녕하세요. 여기는 PlayGround 입니다.",
    heading1: "처음이신가요?",
    signupList: [
      { text: "구글로 회원 가입", img: google, type: "google" },
      { text: "네이버로 회원 가입", img: naver, type: "naver" },
      { text: "카카오로 회원 가입", img: kakao, type: "kakao" },
      { text: "이메일로 회원 가입", colorTheme: true },
    ],
    heading2: "이미 가입하셨나요?",
    loginList: [
      { text: "구글로 로그인", img: google, type: "google" },
      { text: "네이버로 로그인", img: naver, type: "naver" },
      { text: "카카오로 로그인", img: kakao, type: "kakao" },
      { text: "이메일로 로그인", colorTheme: true },
    ],
  },
  HomePage: {},
  ExplorePage: {},
  NotificationsPage: {},
  MessagesPage: {},
  ProfilePage: {},
  SettingsPage: {},
};

export default pages;
