import { google, kakao, naver } from "@shared/@common/assets";

const pages = {
  AuthPage: {
    title: "你好。歡迎來到PlayGround。",
    heading1: "是第一次嗎？",
    signupList: [
      { text: "使用Google註冊", img: google, type: "google" },
      { text: "使用Naver註冊", img: naver, type: "naver" },
      { text: "使用Kakao註冊", img: kakao, type: "kakao" },
      { text: "使用電子郵件註冊", colorTheme: true },
    ],
    heading2: "已經有帳號了嗎？",
    loginList: [
      { text: "使用Google登入", img: google, type: "google" },
      { text: "使用Naver登入", img: naver, type: "naver" },
      { text: "使用Kakao登入", img: kakao, type: "kakao" },
      { text: "使用電子郵件登入", colorTheme: true },
    ],
  },
};

export default pages;
