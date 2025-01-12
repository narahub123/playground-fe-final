import styles from "./ImageUploader.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useRef } from "react";
import Icon from "../Icon/Icon";

interface ImageUploaderProps {
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  className?: string;
}

const ImageUploader = ({ setImages, className }: ImageUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // 언어 설정
  const { iconTitle } = useLanguageContent(["components", "ImageUploader"]);

  const classNames = joinClassNames([styles["image__uploader"], className]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;

      console.log(result);

      setImages([result]);
    };
  };

  return (
    <div className={classNames}>
      <input
        type="file"
        hidden
        ref={inputRef}
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
