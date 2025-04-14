import { defaultProfileImage } from "@shared/@common/assets";
import styles from "./CoFollowers.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { ProfileImage, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useNavigate } from "react-router-dom";

interface CoFollowersProps {
  className?: string;
  userId: string;
}

const CoFollowers = ({ className, userId }: CoFollowersProps) => {
  const navigate = useNavigate();
  // 언어 설정
  const { text } = useLanguageContent(["post", "CoFollowers"]);

  const classNames = joinClassNames([styles["cofollowers"], className]);

  const coFollowers = [
    { profileIamge: "", username: "1", followedAt: "1" },
    { profileIamge: "", username: "2", followedAt: "2" },
    { profileIamge: "", username: "3", followedAt: "3" },
    { profileIamge: "", username: "4", followedAt: "4" },
    { profileIamge: "", username: "5", followedAt: "5" },
    { profileIamge: "", username: "6", followedAt: "6" },
  ];

  const avatarFiltered = coFollowers.slice(0, 3);

  const gap = 0.75;

  // 클릭 시 내가 아는 팔로워로 이동
  const handleClick = () => {
    navigate(`/${userId}/followers_you_follow`);
  };

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
              src={follower.profileIamge || defaultProfileImage}
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
