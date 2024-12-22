import { google, kakao, naver } from "@shared/@common/assets";

const pages = {
  AuthPage: {
    title: "你好。欢迎来到PlayGround。",
    heading1: "是第一次吗？",
    signinList: [
      { text: "使用Google注册", img: google },
      { text: "使用Naver注册", img: naver },
      { text: "使用Kakao注册", img: kakao },
      { text: "使用电子邮件注册", colorTheme: true },
    ],
    heading2: "已经有账号了吗？",
    loginList: [
      { text: "使用Google登录", img: google },
      { text: "使用Naver登录", img: naver },
      { text: "使用Kakao登录", img: kakao },
      { text: "使用电子邮件登录", colorTheme: true },
    ],
  },
};

export default pages;
