import styles from "./ProfileDropdown.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import {
  Button,
  Dropdown,
  ProfileImage,
  Text,
} from "@shared/@common/ui/components";
import { usePostContext, useUserRelationStatus } from "@shared/pages/ui/Post";

interface ProfileDropdownProps {}

const ProfileDropdown = ({}: ProfileDropdownProps) => {
  // 언어 설정
  const { btn, stats } = useLanguageContent(["post", "ProfileDropdown"]);
  const classNames = joinClassNames([styles["profile__dropdown"]]);

  const { author } = usePostContext();
  const { profileImage, userId, username } = author;

  const { isMyself, isFollowing, isMuting, isBlocking } =
    useUserRelationStatus();
  return (
    <Dropdown
      name="profile"
      isOpen={true}
      onClose={() => {}}
      top={10}
      left={10}
      zIndex={5}
    >
      <div className={classNames}>
        <div className={styles["image__section"]}>
          <ProfileImage width={"4rem"} height={"4rem"} rounded="full" />
          <Button
            isValid
            onClick={() => {}}
            rounded="2xl"
            className={styles["button"]}
          >
            {isFollowing(userId) ? btn.following : btn.follow}
          </Button>
        </div>
        <div className={styles["info"]}>
          <Text className={styles["username"]}>{username}</Text>
          <Text className={styles["userId"]}>{`@${userId}`}</Text>
        </div>
        <div className={styles["bio"]}>
          <Text className={styles["intro"]}>{`소개글`}</Text>
        </div>
        <div className={styles["stats"]}>
          <Text className={styles["followings"]}>{`${0} ${
            stats.followings
          }`}</Text>
          <Text className={styles["followers"]}>{`${1} ${
            stats.followers
          }`}</Text>
        </div>
        <div className={styles["co-followers"]}>
          내가 팔로우한 사람 중 이 계정을 팔로우한 사람 표시
        </div>
      </div>
    </Dropdown>
  );
};

export default ProfileDropdown;
