import { useEffect, useState } from "react";
import { generateUserId } from "./utils";

const useCreateUserId = (username: string) => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const generate = async () => {
      const newUserId = await generateUserId(username);
      setUserId(newUserId);
    };

    generate();
  }, [username]); // username이 변경될 때마다 유저 아이디를 새로 생성

  return userId;
};

export default useCreateUserId;
