import { useLanguageContent } from "@shared/@common/models/hooks";
import ToolbarButton from "../ToolbarButton/ToolbarButton";
import { RiImage2Line } from "react-icons/ri";
import React, { useRef, useState } from "react";
import {
  POST_IMAGE_SIZE_MAX,
  POST_MEDIA_MAX,
  POST_VIDEO_SIZE_MAX,
} from "@shared/@common/constants";

interface ImageButtonProps {}

const MediaButton = ({}: ImageButtonProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<string[]>([]);
  // 언어 설정
  const { title } = useLanguageContent(["components", "MediaButton"]);

  const handleClick = () => {
    // input file 열기
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    console.log(files);

    // 파일이 없다면 종료
    if (!files) return;

    // 유효한 파일 추출하기
    const validFiles = Array.from(files).filter((file, index) => {
      // 파일 유형
      if (!file.type.includes("image/") && !file.type.includes("video/")) {
        console.log("이미지와 비디오만 업로드 가능합니다.");
        return false;
      }

      // 파일 사이즈
      if (file.type.includes("image/") && file.size > POST_IMAGE_SIZE_MAX) {
        console.log("이미지 사이즈는 5mb를 초과할 수 없습니다.");
        return false;
      } else if (
        file.type.includes("video/") &&
        file.size > POST_VIDEO_SIZE_MAX
      ) {
        console.log("영상 사이즈는 100mb를 초과할 수 없습니다.");
        return false;
      }

      // 파일 개수
      if (index > POST_MEDIA_MAX - 1) {
        console.log("미디어 개수는 10개를 초과할 수 없습니다.");
        return false;
      }

      return true;
    });

    console.log(validFiles);
    // 유효한 파일이 없는 경우 업로드 중지
    if (validFiles.length === 0) {
      console.log("유효한 파일이 없습니다.");
      return;
    }

    // 이미지 미리보기
    const readers: Promise<string>[] = validFiles.map((file) => {
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
        setImages(images);
      })
      .catch((error) => {
        console.error("이미지 처리 중 에러", error);
      });
  };

  console.log(images);

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
