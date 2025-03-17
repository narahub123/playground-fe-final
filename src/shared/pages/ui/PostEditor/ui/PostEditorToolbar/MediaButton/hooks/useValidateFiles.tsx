import {
  POST_IMAGE_SIZE_MAX,
  POST_MEDIA_MAX,
  POST_VIDEO_SIZE_MAX,
} from "@shared/@common/constants";
import { useToast } from "@shared/@common/ui/components/Toast/hooks";
import { selectPostEditorMedia } from "@shared/pages/ui/PostEditor/models/selectors";
import { useSelector } from "react-redux";

const useValidateFiles = () => {
  const toast = useToast();
  const prevMedia = useSelector(selectPostEditorMedia);

  const validateFiles = (files: FileList): File[] => {
    return Array.from(files).filter((file, index) => {
      // 파일 유형
      if (!file.type.includes("image/") && !file.type.includes("video/")) {
        toast({
          description: "이미지와 비디오만 업로드 가능합니다.",
          type: "error",
        });
        return false;
      }

      // 파일 사이즈
      if (file.type.includes("image/") && file.size > POST_IMAGE_SIZE_MAX) {
        console.log("이미지 사이즈는 5mb를 초과할 수 없습니다.");
        toast({
          description: `이미지 사이즈는 ${
            POST_IMAGE_SIZE_MAX / (1024 * 1024)
          }mb를 초과할 수 없습니다.`,
          type: "error",
        });
        return false;
      } else if (
        file.type.includes("video/") &&
        file.size > POST_VIDEO_SIZE_MAX
      ) {
        toast({
          description: `동영상 용량은 ${
            POST_VIDEO_SIZE_MAX / (1024 * 1024)
          }mb를 초과할 수 없습니다.`,
          type: "error",
        });
        return false;
      }

      // 파일 개수
      if (prevMedia.length + index + 1 > POST_MEDIA_MAX) {
        console.log("미디어 개수는 10개를 초과할 수 없습니다.");
        toast({
          description: `미디어 개수는 ${POST_MEDIA_MAX}개를 초과할 수 없습니다.`,
          type: "error",
        });
        return false;
      }

      return true;
    });
  };
  return validateFiles;
};

export default useValidateFiles;
