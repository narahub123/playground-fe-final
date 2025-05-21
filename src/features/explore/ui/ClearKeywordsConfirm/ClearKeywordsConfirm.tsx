import styles from "./ClearKeywordsConfirm.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Confirm } from "@shared/@common/ui/components";
import { useAppDispatch } from "@app/store";
import { fetchWithAuth } from "@shared/pages";
import { clearRecentSearches, useSearchContext } from "@features/explore";

interface ClearKeywordsConfirmProps {}

const ClearKeywordsConfirm = ({}: ClearKeywordsConfirmProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const { title, expl, confirm, deny } = useLanguageContent([
    "explore",
    "ClearKeywordsConfirm",
  ]);

  const { isOpen, onClose } = useSearchContext();

  const handleClose = () => {
    onClose();
  };

  const handleDeleteAll = async () => {
    try {
      const result = await fetchWithAuth(`/search-history/all`, {
        method: "DELETE",
      });
      if (result.success) {
        dispatch(clearRecentSearches());
        onClose();
      } else {
        console.error("최근 검색어 전부 삭제 실패");
      }
    } catch (error) {
      console.error("최근 검색어 전부 삭제 도중 에러 발생", error);
    }
  };

  return (
    <Confirm isOpen={isOpen} onClose={onClose}>
      <Confirm.Container>
        <Confirm.Title text={title} />
        <Confirm.Description text={expl} />
        <div className={styles["btns__wrapper"]}>
          <Confirm.Button
            onClick={handleDeleteAll}
            bgColor="red"
            className={styles["btn"]}
          >
            {confirm}
          </Confirm.Button>
          <Confirm.Button
            onClick={handleClose}
            variant="outline"
            className={styles["btn"]}
          >
            {deny}
          </Confirm.Button>
        </div>
      </Confirm.Container>
    </Confirm>
  );
};

export default ClearKeywordsConfirm;
