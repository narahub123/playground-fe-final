import { useAppDispatch } from "@app/store";
import { setPosts } from "@shared/@common/models/slices/feedSlice";
import { fetchWithAuth } from "@shared/pages";

const useSearch = () => {
  const dispatch = useAppDispatch();

  const handleSearch = async (
    keyword: string,
    page: number,
    filter: string | null
  ) => {
    try {
      const encodedKeyword = encodeURIComponent(keyword);

      const result = await fetchWithAuth(
        `/posts/search?q=${encodedKeyword}&skip=${page}${
          filter ? "&f=" + filter : ""
        }`
      );

      console.log("결과", result.data.posts);

      if (result.success) {
        dispatch(setPosts(result.data.posts));
      } else {
        console.error("검색 실패");
      }
    } catch (error) {
      console.error("검색 도중 에러 발생", error);
    }
  };

  return handleSearch;
};

export default useSearch;
