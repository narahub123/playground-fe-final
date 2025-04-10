import styles from "./PostLeft.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { ProfileImage } from "@shared/@common/ui/components";
import { useNavigate } from "react-router-dom";
import { ProfileConnector } from "@shared/pages/ui/Post";

interface PostLeftProps {
  className?: string;
}

const PostLeft = ({ className }: PostLeftProps) => {
  const navigate = useNavigate();
  const classNames = joinClassNames([styles["post__left"], className]);

  return (
    <div className={classNames}>
      <ProfileImage
        width={"40px"}
        rounded="full"
        onClick={() => {
          navigate(`/${""}`);
        }}
        className={styles["profile_image"]}
      />
      <ProfileConnector />
    </div>
  );
};

export default PostLeft;
