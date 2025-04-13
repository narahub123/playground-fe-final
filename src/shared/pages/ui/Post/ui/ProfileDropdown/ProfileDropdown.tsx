import styles from "./ProfileDropdown.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import {
  Button,
  Dropdown,
  ProfileImage,
  Text,
} from "@shared/@common/ui/components";
import {
  formatNumber,
  usePostContext,
  useUserRelationStatus,
} from "@shared/pages/ui/Post";

interface ProfileDropdownProps {}

const ProfileDropdown = ({}: ProfileDropdownProps) => {
  // 언어 설정
  const { btn, stats } = useLanguageContent(["post", "ProfileDropdown"]);
  const classNames = joinClassNames([styles["profile__dropdown"]]);

  const { author } = usePostContext();
  const { profileImage, userId, username, intro, followings, followers } =
    author;

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
          {/* 본인의 계정의 경우 보이지 않음 */}
          {!isMyself(userId) && (
            <Button
              isValid
              onClick={() => {}}
              rounded="2xl"
              className={styles["button"]}
            >
              {isFollowing(userId) ? btn.following : btn.follow}
            </Button>
          )}
        </div>
        <div className={styles["info"]}>
          <Text className={styles["username"]}>{username}</Text>
          <Text className={styles["userId"]}>{`@${userId}`}</Text>
        </div>
        {/* 유저에 소개글이 없는 경우 표시 안됨 */}
        {intro && (
          <div className={styles["bio"]}>
            <Text className={styles["intro"]}>{`소개글`}</Text>
          </div>
        )}
        <div className={styles["stats"]}>
          <Text className={styles["followings"]}>
            <em className={styles["emphasis"]}>{`${formatNumber(
              followings.length
            )}`}</em>
            <span>{` ${stats.followings}`}</span>
          </Text>
          <Text className={styles["followers"]}>
            <em className={styles["emphasis"]}>{`${formatNumber(
              followers.length
            )}`}</em>
            <span>{` ${stats.followers}`}</span>
          </Text>
        </div>
        {/* 본인의 계정의 경우 보이지 않음 */}
        {!isMyself(userId) && (
          <div className={styles["co-followers"]}>
            내가 팔로우한 사람 중 이 계정을 팔로우한 사람 표시
          </div>
        )}
      </div>
    </Dropdown>
  );
};

export default ProfileDropdown;
