import { checkUserIdDuplicateInSignupAPI } from "@shared/auth/apis";

// 유저 아이디 중복 여부 확인 후 중복 시 새로운 아이디 생성
const ensureUniqueUserId = async (initialUserId: string): Promise<string> => {
  let userId = initialUserId;
  let isDuplicate = true;

  // 중복되지 않는 유저 아이디가 생성될 때까지 반복
  while (isDuplicate) {
    const { isDuplicate: duplicateStatus } =
      await checkUserIdDuplicateInSignupAPI(userId);
    isDuplicate = duplicateStatus;

    // 중복된 경우 새로운 아이디 생성
    if (isDuplicate) {
      userId += Math.floor(Math.random() * 1000); // 새로운 userId 생성
    }
  }

  return userId;
};

export default ensureUniqueUserId;
