import styles from "./ImageUploader.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useRef } from "react";
import Icon from "../Icon/Icon";

interface ImageUploaderProps {
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  multiple?: boolean;
  className?: string;
}

const ImageUploader = ({
  setImages,
  className,
  multiple,
}: ImageUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // 언어 설정
  const { iconTitle } = useLanguageContent(["components", "ImageUploader"]);

  const classNames = joinClassNames([styles["image__uploader"], className]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files) return;

    const validFiles = Array.from(files).filter((file) => {
      if (!file.type.startsWith("image/")) {
        console.log("이미지 파일만 업로드 가능합니다.");
        return false;
      }
      if (file.size > 10 * 1024 * 1024) {
        console.log("파일 크기는 10MB를 초과할 수 없습니다.");
        return false;
      }
      return true;
    });

    if (validFiles.length === 0) {
      console.log("유효한 파일이 없습니다.");
      return;
    }

    const readers: Promise<string>[] = validFiles.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () =>
          reject(new Error("이미지를 읽는 도중 에러가 발생했습니다."));

        reader.readAsDataURL(file);
      });
    });

    Promise.all(readers)
      .then((images) => {
        setImages(images); // 다중 이미지 배열로 상태 업데이트
      })
      .catch((error) => {
        console.error("이미지 처리 중 에러:", error);
      });
  };

  return (
    <div className={classNames}>
      <input
        type="file"
        hidden
        accept="image/*"
        ref={inputRef}
        multiple={multiple}
        onChange={(e) => handleImageChange(e)}
      />
      <Icon
        iconName="uploadImage"
        iconTitle={iconTitle}
        onClick={() => inputRef.current?.click()}
        subClassName={styles[`image__uploader__icon`]}
      />
    </div>
  );
};

export default ImageUploader;
