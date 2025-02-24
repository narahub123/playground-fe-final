import styles from "./ProfileImage.module.css";
import { useState } from "react";
import { joinClassNames } from "@shared/@common/utils";
import Image from "../Image/Image";
import { RoundedType } from "../Image/types";
import ImageUploader from "../ImageUploader/ImageUploader";
import { useSelector } from "react-redux";
import { getProfileImageInSignup } from "@shared/auth/models/selectors";
import { defaultProfileImage } from "@shared/@common/assets";
import { setProfileImageInSignup } from "@shared/auth/models/slices/signupSlice";
import { selectProfileImage } from "@shared/@common/models/selectors";
import { setProfileImage } from "@shared/@common/models/slices/userSlice";

interface CustomProfileImageProps {
  isSignup?: boolean;
  width?: string;
  rounded?: RoundedType;
  className?: string;
}

type ProfileImageProps = CustomProfileImageProps &
  React.ImgHTMLAttributes<HTMLImageElement>;

const ProfileImage = ({
  isSignup = false,
  width,
  rounded,
  className,
}: ProfileImageProps) => {
  const selector = isSignup ? getProfileImageInSignup : selectProfileImage;

  const reducer = isSignup ? setProfileImageInSignup : setProfileImage;

  const image = useSelector(selector);
  const classNames = joinClassNames([styles["profile__image"], className]);

  return (
    <div className={classNames}>
      <ImageUploader setImages={reducer} />
      <Image
        src={image || defaultProfileImage}
        width={width}
        height={width}
        rounded={rounded}
        alt="프로필 이미지"
        fit="cover"
      />
    </div>
  );
};

export default ProfileImage;
