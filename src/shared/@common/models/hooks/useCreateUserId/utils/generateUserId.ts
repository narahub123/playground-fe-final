import convertUsernameToId from "./convertUsernameToId";
import ensureUniqueUserId from "./ensureUniqueUserId";

// 최종 유저 아이디 생성
const generateUserId = async (username: string) => {
  const initialUserId = convertUsernameToId(username);
  const uniqueUserId = await ensureUniqueUserId(initialUserId);
  return uniqueUserId;
};

export default generateUserId;
