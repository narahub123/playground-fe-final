import styles from "./RepostDropdown.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import PostActionIcon from "../PostActionIcon/PostActionIcon";
import { postActionIcons, usePostContext } from "../..";
import { fetchWithAuth } from "@shared/pages/utils";
import { useAppDispatch } from "@app/store";
import { setPost } from "@shared/@common/models/slices/feedSlice";

interface RepostDropdownProps {
  className?: string;
  setIsRepostOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface OptionProps {
  text: string;
  option: string;
  setIsRepostOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Option = ({ text, option, setIsRepostOpen }: OptionProps) => {
  const dispatch = useAppDispatch();
  const { _id: postId } = usePostContext();
  const handleClick = {
    repost: async (e: React.MouseEvent) => {
      e.stopPropagation();

      try {
        const result = await fetchWithAuth(`/posts/${postId}/repost`, {
          method: "POST",
        });

        if (result.success) {
          dispatch(setPost(result.data.post));
        } else {
          console.error("리포스트 실패");
        }
      } catch (error) {
        console.error("리포스트 도중 에러 발생", error);
      } finally {
        setIsRepostOpen(false);
      }
    },
    quote: () => {},
  };

  return (
    <div
      className={styles["option"]}
      onClick={handleClick[option as keyof typeof handleClick]}
    >
      <PostActionIcon
        iconName={option as keyof typeof postActionIcons}
        onClick={() => {}}
        action="reposts"
      />
      <Text className={styles["text"]}>{text}</Text>
    </div>
  );
};

const RepostDropdown = ({
  className,
  setIsRepostOpen,
}: RepostDropdownProps) => {
  // 언어 설정
  const { options } = useLanguageContent(["post", "RepostDropdown"]);

  const classNames = joinClassNames([styles["repost__dropdown"], className]);

  return (
    <div className={classNames}>
      {Object.keys(options).map((key) => (
        <Option
          key={key}
          option={key}
          text={options[key](false)}
          setIsRepostOpen={setIsRepostOpen}
        />
      ))}
    </div>
  );
};

export default RepostDropdown;
