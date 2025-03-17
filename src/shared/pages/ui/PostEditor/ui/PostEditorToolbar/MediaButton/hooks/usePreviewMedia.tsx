import { useAppDispatch } from "@app/store";
import { setPostEditorImages } from "@shared/pages/ui/PostEditor/models/slices/postEditorSlice";

const usePreviewMedia = () => {
  const dispatch = useAppDispatch();

  // 이미지 미리보기 함수
  const previewMedia = (files: File[]) => {
    const readers: Promise<string>[] = files.map((file) => {
      return new Promise((resolve, reject) => {
        // FileReader 객체 생성 (파일을 비동기적으로 읽기 위해 사용)
        const reader = new FileReader();

        // 파일을 Base64 (Data URL) 형식으로 읽기 시작
        reader.readAsDataURL(file);

        // 파일 읽기가 완료되면 결과를 resolve
        reader.onload = () => {
          resolve(reader.result as string);
        };

        // 파일 읽기 중 오류 발생 시 reject 처리
        reader.onerror = () => {
          console.error("파일 읽기 실패. 다시 시도해주세요.");
          reject("파일 읽기 실패");
        };
      });
    });

    Promise.all(readers)
      .then((images) => {
        dispatch(setPostEditorImages(images));
      })
      .catch((error) => {
        console.error("이미지 처리 중 에러", error);
      });
  };

  return previewMedia;
};

export default usePreviewMedia;
