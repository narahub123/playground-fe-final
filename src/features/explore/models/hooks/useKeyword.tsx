import { useAppDispatch } from "@app/store";
import { setKeywordResult, setSearchLoading } from "../slices";
import { fetchWithAuth } from "@shared/pages";

const useKeyword = () => {
  const dispatch = useAppDispatch();

  const handleKeyword = async (keyword: string) => {
    if (!keyword) return;
    dispatch(setSearchLoading(true));
    try {
      const result = await fetchWithAuth(
        `/search-history/auto-complete?keyword=${keyword}`
      );
      if (result.success) {
        const { keywordSuggestions, accountSuggestions } =
          result.data.autoComplete;

        dispatch(setKeywordResult({ keywordSuggestions, accountSuggestions }));
      } else {
        console.error("검색어 조회 실패");
      }
    } catch (error) {
      console.error("검색어 조회 중 에러 발생", error);
    } finally {
      dispatch(setSearchLoading(false));
    }
  };
  return handleKeyword;
};

export default useKeyword;
