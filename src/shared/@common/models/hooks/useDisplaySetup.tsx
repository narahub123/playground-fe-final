import { useSelector } from "react-redux";
import { getBgTheme, getColorTheme, getFontSize } from "../selectors";
import { useEffect } from "react";

const useDisplaySetup = () => {
  // 배경 테마
  const bgTheme = useSelector(getBgTheme);

  // 색상 테마
  const colorTheme = useSelector(getColorTheme);

  // 글꼴 크기
  const fontSize = useSelector(getFontSize);

  useEffect(() => {
    document.documentElement.dataset.bgTheme = bgTheme;
    document.documentElement.dataset.colorTheme = colorTheme;
    document.documentElement.dataset.fontSize = fontSize;
  }, [bgTheme, colorTheme, fontSize]);
};

export default useDisplaySetup;
