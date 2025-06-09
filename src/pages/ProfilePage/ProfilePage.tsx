import styles from "./ProfilePage.module.css";
import {
  getParalleModal,
  selectIsFeedLoading,
  selectUser,
} from "@shared/@common/models/selectors";
import {
  Button,
  ProfileImage,
  Spinner,
  Text,
} from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { ProfilePageTab, proflieTabLinks } from "@features/profile-page";
import { Icon } from "@shared/@common/ui/icons";
import { defaultProfileImage } from "@shared/@common/assets";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@app/store";
import { onParallelModalOpen } from "@shared/@common/models/slices/modalSlice";
import { PRIMARY_LINK } from "@shared/@common/constants";

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsFeedLoading);
  const user = useSelector(selectUser);

  const classNames = joinClassNames([styles["profile__page"], className]);

  const handleModalOpen = () => {
    dispatch(onParallelModalOpen("profile"));
    navigate(PRIMARY_LINK.PROFILE_SETTINGS);
  };

  return (
    <div className={classNames}>
      <div className={styles["header"]}>
        <div className={styles["icon__wrapper"]}>
          <Icon iconName="arrowLeft" className={styles["icon"]} />
        </div>
        <div className={styles["username__wrapper"]}>
          <Text type="heading3" status="bold">
            {user.username}
          </Text>
          <Text type="expl">{"게시물"}</Text>
        </div>
      </div>
      <div className={styles["cover__wrapper"]}>
        {user.profileCoverImage && (
          <img src={user.profileCoverImage} alt="커버" />
        )}
      </div>
      <div className={styles["profile__wrapper"]}>
        <div className={styles["button__wrapper"]}>
          <div className={styles["profile__image__container"]}>
            <div className={styles["profile__image__wrapper"]}>
              <ProfileImage
                rounded="full"
                src={user.profileImage || defaultProfileImage}
              />
            </div>
          </div>
          <Button
            variant="outline"
            isValid
            onClick={handleModalOpen}
            rounded="2xl"
            className={styles["button"]}
          >
            {"프로필 수정"}
          </Button>
        </div>
        <div className={styles["userinfo__container"]}>
          <div className={styles["userinfo__wrapper"]}>
            <Text type="heading3">{user.username}</Text>
            <Text type="expl">{`@${user.userId}`}</Text>
          </div>
          <div className={styles["authorize__wrapper"]}>
            <Button
              variant="outline"
              isValid
              onClick={() => {}}
              className={styles["authorize__button"]}
              rounded="2xl"
              fontSize="sm"
            >
              {"인증받기"}
            </Button>
          </div>
        </div>
        <div className={styles["regiDate__wrapper"]}>
          <Text>{`가입일: ${user.createdAt}`}</Text>
        </div>
        <div className={styles["meta__wrapper"]}>
          <Link
            className={styles["meta__unit"]}
            to=""
            style={{ marginRight: "20px" }}
          >
            <strong>{user.followings.length}</strong>
            <Text>{"팔로우 중"}</Text>
          </Link>
          <Link className={styles["meta__unit"]} to="">
            <strong>{user.followers.length}</strong>
            <Text>{"팔로워"}</Text>
          </Link>
        </div>
      </div>
      <div className={styles["tabs"]}>
        {Object.keys(proflieTabLinks).map((key: string) => (
          <ProfilePageTab key={key} link={key} />
        ))}
      </div>
      <div className={styles["feed"]}>
        {isLoading && (
          <div className={styles["spinner__wrapper"]}>
            <Spinner color="cornflowerblue" size={1.5} />
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default ProfilePage;
