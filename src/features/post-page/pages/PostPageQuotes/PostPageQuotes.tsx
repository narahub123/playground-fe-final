import styles from "./PostPageQuotes.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface PostPageQuotesProps {
  className?: string;
}

const PostPageQuotes = ({ className }: PostPageQuotesProps) => {
  const classNames = joinClassNames([styles["postpagequotes"], className]);

  return <div className={classNames}>PostPageQuotes</div>;
};

export default PostPageQuotes;
