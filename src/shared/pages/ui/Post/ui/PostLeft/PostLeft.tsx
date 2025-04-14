import styles from "./PostLeft.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { ProfileImage } from "@shared/@common/ui/components";
import { useNavigate } from "react-router-dom";
import {
  ProfileConnector,
  ProfileDropdown,
  useHoverDropdown,
  usePostContext,
} from "@shared/pages/ui/Post";
import { defaultProfileImage } from "@shared/@common/assets";

interface PostLeftProps {
  className?: string;
}

const PostLeft = ({ className }: PostLeftProps) => {
  const navigate = useNavigate();
  const classNames = joinClassNames([styles["post__left"], className]);
  const { author } = usePostContext();
  const { userId, profileImage } = author;

  const isShowingConnector = false;

  const { isOpen, handleMouseEnter, handleMouseLeave } = useHoverDropdown();

  return (
    <div className={classNames}>
      <ProfileDropdown
        isOpen={isOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <ProfileImage
        width={"40px"}
        rounded="full"
        onClick={() => {
          navigate(`/${userId}`);
        }}
        src={profileImage || defaultProfileImage}
        className={styles["profile_image"]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {isShowingConnector && <ProfileConnector />}
    </div>
  );
};

export default PostLeft;
