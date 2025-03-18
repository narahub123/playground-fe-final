import React, { useRef } from "react";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { RiImage2Line } from "react-icons/ri";
import ToolbarButton from "../ToolbarButton/ToolbarButton";
import {
  useValidateFiles,
  usePreviewMedia,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/MediaButton";

const MediaButton = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  // 언어 설정
  const { title } = useLanguageContent(["components", "MediaButton"]);

  const handleClick = () => {
    // input file 열기
    inputRef.current?.click();
  };

  // 파일 유효성
  const validateFiles = useValidateFiles();
  // 미디어 미리보기
  const previewMedia = usePreviewMedia();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    // 파일이 없다면 종료
    if (!files) return;

    // 유효한 파일 추출하기
    const validFiles = validateFiles(files);

    console.log(validFiles);

    // 미디어 미리보기 생성
    previewMedia(validFiles);

    // 같은 이름의 파일을 업로드하기 위해서는 초기화해줘야 함
    e.target.value = "";
  };

  return (
    <ToolbarButton onClick={handleClick} title={title}>
      <input
        type="file"
        hidden
        ref={inputRef}
        multiple
        accept="image/*, video/*"
        onChange={handleChange}
      />
      <RiImage2Line fontSize={"1.25rem"} />
    </ToolbarButton>
  );
};

export default MediaButton;
