import styles from "./PostPageAnalytics.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface PostPageAnalyticsProps {
  className?: string;
}

const PostPageAnalytics = ({ className }: PostPageAnalyticsProps) => {
  const classNames = joinClassNames([styles["postpageanalytics"], className]);

  return <div className={classNames}>PostPageAnalytics</div>;
};

export default PostPageAnalytics;
