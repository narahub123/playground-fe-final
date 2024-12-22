import { google, kakao, naver } from "@shared/@common/assets";

const pages = {
  AuthPage: {
    title: "Hello. Welcome to PlayGround.",
    heading1: "New here?",
    signinList: [
      { text: "Sign up with Google", img: google },
      { text: "Sign up with Naver", img: naver },
      { text: "Sign up with Kakao", img: kakao },
      { text: "Sign up with Email", colorTheme: true },
    ],
    heading2: "Already have an account?",
    loginList: [
      { text: "Log in with Google", img: google },
      { text: "Log in with Naver", img: naver },
      { text: "Log in with Kakao", img: kakao },
      { text: "Log in with Email", colorTheme: true },
    ],
  },
};

export default pages;
