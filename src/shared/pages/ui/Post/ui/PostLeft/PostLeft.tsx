import styles from "./PostLeft.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { ProfileImage } from "@shared/@common/ui/components";
import { useNavigate } from "react-router-dom";
import { ProfileConnector, usePostContext } from "@shared/pages/ui/Post";
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

  return (
    <div className={classNames}>
      <ProfileImage
        width={"40px"}
        rounded="full"
        onClick={() => {
          navigate(`/${userId}`);
        }}
        src={profileImage || defaultProfileImage}
        className={styles["profile_image"]}
      />
      {isShowingConnector && <ProfileConnector />}
    </div>
  );
};

export default PostLeft;
