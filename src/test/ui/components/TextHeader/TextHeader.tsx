import styles from "./TextHeader.module.css";
import {
  setBgTheme,
  setColorTheme,
  setFontSize,
  setLanguage,
} from "@shared/@common/models/slices/displaySlice";
import {
  BgThemeType,
  ColorThemeType,
  FontSizeType,
} from "@shared/@common/types";
import { useAppDispatch } from "@app/store";
import { useSelector } from "react-redux";
import { getFontSize } from "@shared/@common/models/selectors";

const TextHeader = () => {
  const dispatch = useAppDispatch();
  const fontSize = useSelector(getFontSize);
  const handleChangeBgTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as BgThemeType;

    console.log(value);

    dispatch(setBgTheme(value));
  };
  const handleChangeColorTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as ColorThemeType;

    console.log(value);

    dispatch(setColorTheme(value));
  };
  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    console.log(value);

    dispatch(setLanguage(value));
  };
  const handleChangeFontSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as FontSizeType;

    console.log(value);

    dispatch(setFontSize(value));
  };
  return (
    <header className={styles.header}>
      <select onChange={(e) => handleChangeBgTheme(e)}>
        <option value="light">밝은 모드</option>
        <option value="dark">어두운 모드</option>
        <option value="darkest">더 어두운 모드</option>
      </select>
      <select onChange={(e) => handleChangeColorTheme(e)}>
        <option value="cornflowerblue">기본</option>
        <option value="red">빨강</option>
        <option value="green">초록</option>
        <option value="purple">보라</option>
        <option value="orange">주홍</option>
        <option value="yellow">노랑</option>
      </select>
      <select onChange={(e) => handleChangeLanguage(e)}>
        <option value="ko-KR">한국어</option>
        <option value="en-US">영어</option>
        <option value="ja-JP">일본어</option>
        <option value="zh-CN">간체(중국어)</option>
        <option value="zh-TW">번체(중국어)</option>
      </select>
      <select onChange={(e) => handleChangeFontSize(e)}>
        <option value="xs" selected={fontSize === "xs"}>
          아주 작게
        </option>
        <option value="x" selected={fontSize === "s"}>
          작게
        </option>
        <option value="b" selected={fontSize === "b"}>
          보통
        </option>
        <option value="l" selected={fontSize === "l"}>
          크게
        </option>
        <option value="xl" selected={fontSize === "xl"}>
          아주 크게
        </option>
      </select>
    </header>
  );
};

export default TextHeader;
