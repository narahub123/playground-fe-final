import styles from "./LinkPreview.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { fetchWithAuth } from "@shared/pages/utils";
import { useEffect, useState } from "react";
import { IOgtags } from "@shared/pages/ui/Post";

interface LinkPreviewProps {
  className?: string;
  link: string;
}

const LinkPreview = ({ className, link }: LinkPreviewProps) => {
  const classNames = joinClassNames([styles["link__preview"], className]);
  const initialOgtags: IOgtags = {
    image: "",
    title: "",
    description: "",
  };
  const [ogtags, setOgtags] = useState<IOgtags>(initialOgtags);

  useEffect(() => {
    const getOgtags = async () => {
      const result = await fetchWithAuth(
        `/preview?url=${encodeURIComponent(link)}`
      );

      try {
        if (result.success) {
          setOgtags(result.data);
        } else {
          console.error("ogtag를 가져오기 실패");
        }
      } catch (error) {
        console.error("ogtag를 가져오는 도중 에러 발생", error);
      }
    };

    getOgtags();
  }, [link]);

  console.log(ogtags);

  return (
    // 새창 띄우기
    <a className={classNames} target="_blank">
      LinkPreview
    </a>
  );
};

export default LinkPreview;
