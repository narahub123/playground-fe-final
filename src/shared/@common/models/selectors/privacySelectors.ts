import { RootState } from "@app/store";

const getPrivacy = (state: RootState) => state.privacy;
const selectBlockedUsers = (state: RootState) => state.privacy.blockedUsers;
const selectMutedUsers = (state: RootState) => state.privacy.mutedUsers;
const selectReplyOption = (state: RootState) => state.privacy.replyOption;

export { getPrivacy, selectBlockedUsers, selectMutedUsers, selectReplyOption };
