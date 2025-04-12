import { RootState } from "@app/store";

const getPrivacy = (state: RootState) => state.privacy;
const selectBlockedUsers = (state: RootState) => state.privacy.blockedUsers;
const selectMutedUsers = (state: RootState) => state.privacy.mutedUsers;

export { getPrivacy, selectBlockedUsers, selectMutedUsers };
