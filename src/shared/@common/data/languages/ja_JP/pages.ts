import { google, kakao, naver } from "@shared/@common/assets";

const pages = {
  AuthPage: {
    title: "こんにちは。こちらはPlayGroundです。",
    heading1: "初めてですか？",
    signupList: [
      { text: "Googleでサインアップ", img: google },
      { text: "Naverでサインアップ", img: naver },
      { text: "Kakaoでサインアップ", img: kakao },
      { text: "メールでサインアップ", colorTheme: true },
    ],
    heading2: "既にアカウントをお持ちですか？",
    loginList: [
      { text: "Googleでログイン", img: google },
      { text: "Naverでログイン", img: naver },
      { text: "Kakaoでログイン", img: kakao },
      { text: "メールでログイン", colorTheme: true },
    ],
  },
};

export default pages;
