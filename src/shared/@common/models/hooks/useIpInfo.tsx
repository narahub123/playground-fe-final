import { useEffect } from "react";
import { useAppDispatch } from "@app/store";
import { fetchIPAPI } from "@shared/@common/apis";

const useIpInfo = (
  reducer: (value?: any) => { type: string; payload: any }
) => {
  const dispatch = useAppDispatch();

  // 비동기 함수 내부에서 호출
  const getIpInfo = async () => {
    try {
      const ip = await fetchIPAPI();
      console.log(ip);
      dispatch(reducer(ip)); // IP 정보 dispatch
    } catch (error) {
      console.error("IP 정보 가져오기 실패", error);
    }
  };

  // 모달 열리거나 특정 시점에 호출할 때 getIpInfo() 호출
  useEffect(() => {
    getIpInfo();
  }, [dispatch]); // `dispatch`는 React의 상태나 액션에 의존하므로 의존성 배열에 추가
};

export default useIpInfo;
