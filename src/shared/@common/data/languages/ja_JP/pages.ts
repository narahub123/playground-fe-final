import { google, kakao, naver } from "@shared/@common/assets";

const pages = {
  AuthPage: {
    title: "こんにちは。こちらはPlayGroundです。",
    heading1: "初めてですか？",
    signupList: [
      { text: "Googleでサインアップ", img: google, type: "google" },
      { text: "Naverでサインアップ", img: naver, type: "naver" },
      { text: "Kakaoでサインアップ", img: kakao, type: "kakao" },
      { text: "メールでサインアップ", colorTheme: true },
    ],
    heading2: "既にアカウントをお持ちですか？",
    loginList: [
      { text: "Googleでログイン", img: google, type: "google" },
      { text: "Naverでログイン", img: naver, type: "naver" },
      { text: "Kakaoでログイン", img: kakao, type: "kakao" },
      { text: "メールでログイン", colorTheme: true },
    ],
  },
};

export default pages;
