import styles from "./TextHeader.module.css";
import {
  setBgTheme,
  setColorTheme,
  setLanguage,
} from "@shared/@common/models/slices/displaySlice";
import { BgThemeType, colorThemeType } from "@shared/@common/types";
import { useAppDispatch } from "@app/store";

const TextHeader = () => {
  const dispatch = useAppDispatch();
  const handleChageBgTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as BgThemeType;

    console.log(value);

    dispatch(setBgTheme(value));
  };
  const handleChageColorTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as colorThemeType;

    console.log(value);

    dispatch(setColorTheme(value));
  };
  const handleChageLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    console.log(value);

    dispatch(setLanguage(value));
  };
  return (
    <header className={styles.header}>
      <select onChange={(e) => handleChageBgTheme(e)}>
        <option value="light">밝은 모드</option>
        <option value="dark">어두운 모드</option>
        <option value="darkest">더 어두운 모드</option>
      </select>
      <select onChange={(e) => handleChageColorTheme(e)}>
        <option value="cornflowerblue">기본</option>
        <option value="red">빨강</option>
        <option value="green">초록</option>
        <option value="purple">보라</option>
        <option value="orange">주홍</option>
        <option value="yellow">노랑</option>
      </select>
      <select onChange={(e) => handleChageLanguage(e)}>
        <option value="ko-KR">한국어</option>
        <option value="en-US">영어</option>
        <option value="ja-JP">일본어</option>
        <option value="zh-CN">간체(중국어)</option>
        <option value="zh-TW">번체(중국어)</option>
      </select>
    </header>
  );
};

export default TextHeader;
