import styles from "./ProfileImageUploader.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { RoundedType } from "../Image/types";
import { getProfileImageInSignup } from "@shared/auth/models/selectors";
import { selectProfileImage } from "@shared/@common/models/selectors";
import { setProfileImageInSignup } from "@shared/auth/models/slices/signupSlice";
import { setProfileImage } from "@shared/@common/models/slices/userSlice";
import { useSelector } from "react-redux";
import ImageUploader from "../ImageUploader/ImageUploader";
import Image from "../Image/Image";
import { defaultProfileImage } from "@shared/@common/assets";
import ProfileImage from "../ProfileImage/ProfileImage";

interface CustomProfileImageUploaderProps {
  isSignup?: boolean;
  width?: string;
  rounded?: RoundedType;
  className?: string;
}

type ProfileImageUploaderProps = CustomProfileImageUploaderProps &
  React.ImgHTMLAttributes<HTMLImageElement>;

const ProfileImageUploader = ({
  className,
  isSignup = false,
  width,
  rounded,
}: ProfileImageUploaderProps) => {
  const selector = isSignup ? getProfileImageInSignup : selectProfileImage;

  const reducer = isSignup ? setProfileImageInSignup : setProfileImage;

  const image = useSelector(selector);
  const classNames = joinClassNames([
    styles["profile__image__uploader"],
    className,
  ]);

  return (
    <div className={classNames}>
      <ImageUploader setImages={reducer} />
      <ProfileImage image={image} />
    </div>
  );
};

export default ProfileImageUploader;
