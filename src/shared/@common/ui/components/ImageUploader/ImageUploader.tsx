import styles from "./ImageUploader.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useRef } from "react";
import Icon from "../Icon/Icon";

interface ImageUploaderProps {
  className?: string;
}

const ImageUploader = ({ className }: ImageUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // 언어 설정
  const { iconTitle } = useLanguageContent(["components", "ImageUploader"]);

  const classNames = joinClassNames([styles["image__uploader"], className]);

  return (
    <div className={classNames}>
      <input type="file" hidden ref={inputRef} />
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
