import styles from "./ProfileDropdown.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { Dropdown, ProfileImage, Text } from "@shared/@common/ui/components";
import {
  CoFollowers,
  formatNumber,
  StatusButton,
  useUserRelationStatus,
} from "@shared/pages/ui/Post";
import { defaultProfileImage } from "@shared/@common/assets";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IUser } from "@shared/@common/types";

interface ProfileDropdownProps {
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  top?: number;
  bottom?: number;
  left?: number;
  profileInfo: IUser | null;
}

const ProfileDropdown = ({
  isOpen,
  isLoading,
  onClose,
  onMouseEnter,
  onMouseLeave,
  top,
  left,
  bottom,
  profileInfo,
}: ProfileDropdownProps) => {
  const navigate = useNavigate();
  // 언어 설정
  const { stats } = useLanguageContent(["post", "ProfileDropdown"]);
  const classNames = joinClassNames([styles["profile__dropdown"]]);

  const { isMyself } = useUserRelationStatus();

  if (!profileInfo) return;
  const { profileImage, userId, username, intro, followings, followers } =
    profileInfo;

  return (
    <Dropdown
      name="profile"
      isOpen={isOpen && !isLoading}
      onClose={onClose}
      top={top}
      left={left}
      bottom={bottom}
      zIndex={5}
    >
      <div
        className={classNames}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className={styles["image__section"]}>
          <ProfileImage
            width={"4rem"}
            height={"4rem"}
            rounded="full"
            src={profileImage || defaultProfileImage}
            className={styles["image"]}
            onClick={() => navigate(`/${userId}`)}
          />
          {/* 본인의 계정의 경우 보이지 않음 */}
          {
            //   !isMyself(userId) &&
            <StatusButton userId={userId} />
          }
        </div>
        <div className={styles["info"]}>
          <Link to={`/${userId}`} className={styles["link"]}>
            <Text className={styles["username"]}>{username}</Text>
          </Link>
          <Text
            className={styles["userId"]}
            onClick={() => navigate(`/${userId}`)}
          >{`@${userId}`}</Text>
        </div>
        {/* 유저에 소개글이 없는 경우 표시 안됨 */}
        {intro && (
          <div className={styles["bio"]}>
            <Text className={styles["intro"]}>{`소개글`}</Text>
          </div>
        )}
        <div className={styles["stats"]}>
          <Link to={`/${userId}/followings`} className={styles["link"]}>
            <Text className={styles["followings"]}>
              <em className={styles["emphasis"]}>{`${formatNumber(
                followings.length
              )}`}</em>
              <span className={styles["unit"]}>{` ${stats.followings}`}</span>
            </Text>
          </Link>
          <Link to={`/${userId}/verified_followers`} className={styles["link"]}>
            <Text className={styles["followers"]}>
              <em className={styles["emphasis"]}>{`${formatNumber(
                followers.length
              )}`}</em>
              <span className={styles["unit"]}>{` ${stats.followers}`}</span>
            </Text>
          </Link>
        </div>
        {/* 본인의 계정의 경우 보이지 않음 */}
        {!isMyself(userId) && (
          <CoFollowers userId={userId} followers={followers} />
        )}
      </div>
    </Dropdown>
  );
};

export default ProfileDropdown;
