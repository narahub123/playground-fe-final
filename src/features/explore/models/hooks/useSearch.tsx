import { useAppDispatch } from "@app/store";
import { setPosts } from "@shared/@common/models/slices/feedSlice";
import { fetchWithAuth } from "@shared/pages";
import { useNavigate } from "react-router-dom";

const useSearch = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSearch = async (keyword: string, page: number) => {
    try {
      const result = await fetchWithAuth(
        `/posts/search?q=${keyword}&skip=${page}`
      );

      console.log("결과", result.data.posts);

      if (result.success) {
        dispatch(setPosts(result.data.posts));
        navigate(`/search?q=${keyword}&src=typed_query`);
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
