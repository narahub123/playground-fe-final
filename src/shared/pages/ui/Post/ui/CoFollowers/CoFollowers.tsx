import { defaultProfileImage } from "@shared/@common/assets";
import styles from "./CoFollowers.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { ProfileImage, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useNavigate } from "react-router-dom";
import { IFollower } from "@shared/@common/types";
import { useCofollowers } from "@shared/pages/hooks";

interface CoFollowersProps {
  className?: string;
  userId: string;
  followers: IFollower[];
}

const CoFollowers = ({ className, userId, followers }: CoFollowersProps) => {
  const navigate = useNavigate();
  // 언어 설정
  const { text } = useLanguageContent(["post", "CoFollowers"]);

  const classNames = joinClassNames([styles["cofollowers"], className]);

  const getCofollowers = useCofollowers();

  const coFollowers = getCofollowers(followers);

  const avatarFiltered = coFollowers.slice(0, 3);

  const gap = 0.75;

  // 클릭 시 내가 아는 팔로워로 이동
  const handleClick = () => {
    navigate(`/${userId}/followers_you_follow`);
  };

  if (coFollowers.length === 0) return null;

  return (
    <div className={classNames} onClick={handleClick}>
      <div
        className={styles["avatars"]}
        style={{
          width: `${2 + gap * (avatarFiltered.length - 1)}rem`,
          height: "2rem",
        }}
      >
        {avatarFiltered.map((follower, idx) => (
          <div
            key={idx}
            className={styles["wrapper"]}
            style={{
              left: `${gap * idx}rem`,
              zIndex: `${avatarFiltered.length - idx}`,
            }}
          >
            <ProfileImage
              className={styles["avatar"]}
              width={"2rem"}
              height={"2rem"}
              rounded="full"
              src={follower.profileImage || defaultProfileImage}
            />
          </div>
        ))}
      </div>
      <div className={styles["text"]}>
        <Text>{text(coFollowers.map((f) => f.username))}</Text>
      </div>
    </div>
  );
};

export default CoFollowers;
