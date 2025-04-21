import styles from "./LinkPreview.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { fetchWithAuth } from "@shared/pages/utils";
import { useEffect, useState } from "react";
import { IOgtags } from "@shared/pages/ui/Post";
import { Text } from "@shared/@common/ui/components";
import { CiImageOn } from "react-icons/ci";

interface LinkPreviewProps {
  className?: string;
  link: string;
}

const LinkPreview = ({ className, link }: LinkPreviewProps) => {
  const classNames = joinClassNames([styles["link__preview"], className]);
  const initialOgtags: IOgtags = {
    image: "",
    title: "",
    desc: "",
  };
  const [ogtags, setOgtags] = useState<IOgtags>(initialOgtags);

  useEffect(() => {
    const getOgtags = async () => {
      const result = await fetchWithAuth(
        `/posts/preview?url=${encodeURIComponent(link)}`
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

  // console.log(ogtags);

  return (
    // 새창 띄우기
    <a
      className={classNames}
      target="_blank"
      href={`${!/^https?:\/\//.test(link) ? "https://" + link : link}`}
    >
      <div className={styles["image__container"]}>
        <div className={styles["image__wrapper"]}>
          {ogtags.image ? (
            <img src={ogtags.image} alt="" />
          ) : (
            <CiImageOn className={styles["icon"]} />
          )}
        </div>
      </div>
      <div className={styles["text__container"]}>
        <div className={styles["text__wrapper"]}>
          <Text className={styles["link"]}>{link}</Text>
          <Text className={styles["title"]}>{ogtags.title}</Text>
          <Text className={styles["desc"]}>{ogtags.desc}</Text>
        </div>
      </div>
    </a>
  );
};

export default LinkPreview;
