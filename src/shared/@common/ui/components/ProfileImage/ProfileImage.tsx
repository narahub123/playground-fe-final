import styles from "./ProfileImage.module.css";
import { joinClassNames } from "@shared/@common/utils";
import Image from "../Image/Image";
import { RoundedType } from "../Image/types";
import ImageUploader from "../ImageUploader/ImageUploader";

interface CustomProfileImageProps {
  src: string;
  width?: string;
  rounded?: RoundedType;
  className?: string;
}

type ProfileImageProps = CustomProfileImageProps &
  React.ImgHTMLAttributes<HTMLImageElement>;

const ProfileImage = ({
  src,
  width,
  rounded,
  className,
}: ProfileImageProps) => {
  const classNames = joinClassNames([styles["profile__image"], className]);

  return (
    <div className={classNames}>
      <ImageUploader />
      <Image src={src} width={width} rounded={rounded} alt="프로필 이미지" />
    </div>
  );
};

export default ProfileImage;
