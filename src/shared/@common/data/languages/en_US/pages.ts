import { google, kakao, naver } from "@shared/@common/assets";

const pages = {
  AuthPage: {
    title: "Hello. Welcome to PlayGround.",
    heading1: "New here?",
    signupList: [
      { text: "Sign up with Google", img: google, type: "google" },
      { text: "Sign up with Naver", img: naver, type: "naver" },
      { text: "Sign up with Kakao", img: kakao, type: "kakao" },
      { text: "Sign up with Email", colorTheme: true },
    ],
    heading2: "Already have an account?",
    loginList: [
      { text: "Log in with Google", img: google, type: "google" },
      { text: "Log in with Naver", img: naver, type: "naver" },
      { text: "Log in with Kakao", img: kakao, type: "kakao" },
      { text: "Log in with Email", colorTheme: true },
    ],
  },
};

export default pages;
