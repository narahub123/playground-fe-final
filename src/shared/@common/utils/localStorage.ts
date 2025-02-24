import { LOCALSTORAGE_KEY } from "../constants";
import { IPlayGroundData } from "../types";

const setPlayGroundData = (data: IPlayGroundData) => {
  try {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("PlayGround data 로컬스토리지에 저장 실패");
    return;
  }
};

// 로그인 여부 확인하기
const checkLogin = (): boolean => {
  const data = localStorage.getItem(LOCALSTORAGE_KEY);

  if (!data) {
    console.error("로컬 스토리지 빔");
    return false;
  }

  let playground: IPlayGroundData;
  try {
    playground = JSON.parse(data);
  } catch (error) {
    console.error("파싱 도중 에러 발생", error);
    return false;
  }

  const { accessToken, activeSessionId } = playground;

  return Boolean(accessToken && activeSessionId);
};

// 로컬 스토리지에서 playground 정보 삭제하기
const removePlayGroundData = () => {
  localStorage.removeItem(LOCALSTORAGE_KEY);
};

export { setPlayGroundData, checkLogin, removePlayGroundData };
