import styles from "./CoFollowings.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { ProfileImage } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useNavigate } from "react-router-dom";

interface CoFollowingsProps {
  className?: string;
  userId: string;
}

const CoFollowings = ({ className, userId }: CoFollowingsProps) => {
  const navigate = useNavigate();
  // 언어 설정
  const { text } = useLanguageContent(["post", "CoFollowings"]);

  const classNames = joinClassNames([styles["cofollowings"], className]);

  const followings = [1, 2, 3];

  const handleClick = () => {
    navigate(`/${userId}/followers_you_follow`);
  };

  return (
    <div className={classNames}>
      <div
        className={styles["images"]}
        style={{
          width: `${2 + 0.5 * (followings.length - 1)}rem`,
          height: `2rem`,
        }}
        onClick={handleClick}
      >
        {followings.map((f, index) => (
          <div
            className={styles["image__wrapper"]}
            style={{
              left: `${0.5 * index}rem`,
              zIndex: `${followings.length - index}`,
            }}
          >
            <ProfileImage
              width={"2rem"}
              height={"2rem"}
              rounded="full"
              className={styles["image"]}
            />
          </div>
        ))}
      </div>
      <div className={styles["text"]}>{text([])}</div>
    </div>
  );
};

export default CoFollowings;
