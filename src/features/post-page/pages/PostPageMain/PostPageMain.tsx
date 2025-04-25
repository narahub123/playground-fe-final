import styles from "./PostPageMain.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface PostPageMainProps {
  className?: string;
}

const PostPageMain = ({ className }: PostPageMainProps) => {
  const classNames = joinClassNames([styles["postpagemain"], className]);

  return <div className={classNames}>PostPageMain</div>;
};

export default PostPageMain;
