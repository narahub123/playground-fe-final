import { useEffect, useState } from "react";
import { fetchIPAPI } from "@shared/@common/apis";

const useIpInfo = () => {
  const [ip, setIp] = useState("");

  useEffect(() => {
    fetchIPAPI()
      .then(setIp) // 성공하면 바로 상태 업데이트
      .catch((error) => console.error("IP 정보 가져오기 실패", error));
  }, []);

  return ip;
};

export default useIpInfo;
