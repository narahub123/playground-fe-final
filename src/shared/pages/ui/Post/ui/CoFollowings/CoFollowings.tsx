import styles from "./CoFollowings.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { ProfileImage } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";

interface CoFollowingsProps {
  className?: string;
}

const CoFollowings = ({ className }: CoFollowingsProps) => {
  // 언어 설정
  const { text } = useLanguageContent(["post", "CoFollowings"]);

  const classNames = joinClassNames([styles["cofollowings"], className]);

  const followings = [1, 2, 3];

  return (
    <div className={classNames}>
      <span className={styles["images"]}>
        {followings.map((_, index) => (
          <ProfileImage
            width={"2rem"}
            height={"2rem"}
            rounded="full"
            key={index}
            className={styles["image"]}
            style={{ position: "absolute", left: `${index * 10}px` }}
          />
        ))}
      </span>
      <span className={styles["text"]}>{text([])}</span>
    </div>
  );
};

export default CoFollowings;
