import { RootState } from "@app/store";

const selectPost = (state: RootState) => state.post.data;
const selectPostLoading = (state: RootState) => state.post.loading;

export { selectPost, selectPostLoading };
