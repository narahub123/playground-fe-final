import styles from "./ProfileImage.module.css";
import { joinClassNames } from "@shared/@common/utils";
import Image from "../Image/Image";
import { RoundedType } from "../Image/types";
import { defaultProfileImage } from "@shared/@common/assets";
import { useLanguageContent } from "@shared/@common/models/hooks";

interface CustomProfileImageProps {
  image?: string;
  isSignup?: boolean;
  width?: string;
  rounded?: RoundedType;
  className?: string;
}

type ProfileImageProps = CustomProfileImageProps &
  React.ImgHTMLAttributes<HTMLImageElement>;

const ProfileImage = ({
  image,
  width,
  rounded,
  className,
}: ProfileImageProps) => {
  const classNames = joinClassNames([styles["profile__image"], className]);

  const { imageAlt } = useLanguageContent(["components", "ProfileImage"]);

  return (
    <Image
      className={classNames}
      src={image || defaultProfileImage}
      width={width}
      height={width}
      rounded={rounded}
      alt={imageAlt}
      fit="cover"
    />
  );
};

export default ProfileImage;
