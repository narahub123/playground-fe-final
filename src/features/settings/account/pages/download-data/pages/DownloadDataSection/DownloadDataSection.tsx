import styles from "./DownloadDataSection.module.css";
import { SectionLayout } from "@features/settings/common/layouts";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { BackIcon } from "@features/settings/common/ui";
import { Button, Text } from "@shared/@common/ui/components";

const DownloadDataSection = () => {
  // 언어 설정
  const { heading, description, server } = useLanguageContent([
    "settings",
    "DownloadDataSection",
  ]);

  const classNames = joinClassNames([styles["download__data__section"]]);

  return (
    <SectionLayout className={classNames}>
      <SectionLayout.Header>
        <BackIcon />
        <Text type="heading3">{heading}</Text>
      </SectionLayout.Header>
      <SectionLayout.HeaderContent>
        <Text type="expl">{description}</Text>
      </SectionLayout.HeaderContent>
      <SectionLayout.Main>
        <section className={styles["data__wrapper"]}>
          <div
            className={joinClassNames([
              styles["data__item"],
              styles["data__title"],
            ])}
          >
            <Text type="heading3" className={styles["data__title__text"]}>
              {server.title}
            </Text>
          </div>
          <div
            className={joinClassNames([
              styles["data__item"],
              styles["data__description"],
            ])}
          >
            <Text type="expl" className={styles["data__description__text"]}>
              {server.description}
            </Text>
          </div>
          <div
            className={joinClassNames([
              styles["data__item"],
              styles["request__wrapper"],
            ])}
          >
            <Text className={styles["service__name"]}>{server.name}</Text>
            <Button
              onClick={() => {}}
              rounded="2xl"
              bgColor="colorTheme"
              className={styles["request__button"]}
            >
              {server.btn}
            </Button>
          </div>
        </section>
      </SectionLayout.Main>
    </SectionLayout>
  );
};

export default DownloadDataSection;
