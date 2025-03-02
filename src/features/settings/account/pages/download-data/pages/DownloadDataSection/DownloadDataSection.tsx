import styles from "./DownloadDataSection.module.css";
import { SectionLayout } from "@features/settings/common/layouts";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { BackIcon } from "@features/settings/common/ui";
import { Button, Text } from "@shared/@common/ui/components";

const DownloadDataSection = () => {
  // 언어 설정
  const {} = useLanguageContent(["settings", "DownloadDataSection"]);

  const classNames = joinClassNames([styles["download__data__section"]]);

  return (
    <SectionLayout className={classNames}>
      <SectionLayout.Header>
        <BackIcon />
        <Text type="heading3">내 데이터 기록 파일을 다운로드하세요.</Text>
      </SectionLayout.Header>
      <SectionLayout.HeaderContent>
        <Text type="expl">
          계정에 저장된 정보의 유형에 대한 인사이트를 얻으세요.
        </Text>
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
              PlayGround 데이터
            </Text>
          </div>
          <div
            className={joinClassNames([
              styles["data__item"],
              styles["data__description"],
            ])}
          >
            <Text type="expl" className={styles["data__description__text"]}>
              내 계정 정보, 계정 기록, 앱 및 디바이스, 계정 활동, 관심사 및 광고
              데이터 기록이 담긴 ZIP 파일을 요청하실 수 있습니다. 데이터 기록
              파일을 다운로드할 준비가 완료되면 앱 내 알림이 표시됩니다.
            </Text>
          </div>
          <div
            className={joinClassNames([
              styles["data__item"],
              styles["request__wrapper"],
            ])}
          >
            <Text className={styles["service__name"]}>PlayGround</Text>
            <Button
              onClick={() => {}}
              rounded="2xl"
              bgColor="colorTheme"
              className={styles["request__button"]}
            >
              기록 파일 요청하기
            </Button>
          </div>
        </section>
      </SectionLayout.Main>
    </SectionLayout>
  );
};

export default DownloadDataSection;
