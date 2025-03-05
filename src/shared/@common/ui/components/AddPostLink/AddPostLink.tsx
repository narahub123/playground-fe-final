import styles from "./AddPostLink.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";

interface AddPostLinkProps {
  className?: string;
}

const AddPostLink = ({ className }: AddPostLinkProps) => {
  // 언어 설정
  const { title } = useLanguageContent(["components", "AddPostLink"]);

  const classNames = joinClassNames([styles["add__post__link"], className]);

  return (
    <Link to="/compose/post" data-title={title} className={classNames}>
      <LuPlus fontSize={"1rem"} />
    </Link>
  );
};

export default AddPostLink;
