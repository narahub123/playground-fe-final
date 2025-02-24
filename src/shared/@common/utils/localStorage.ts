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

export { setPlayGroundData };
