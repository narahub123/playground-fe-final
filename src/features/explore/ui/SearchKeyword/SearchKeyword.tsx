import { LuSearch, LuTrash2, LuX } from "react-icons/lu";
import styles from "./SearchKeyword.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Text } from "@shared/@common/ui/components";
import { useSearchContext } from "@features/explore/models";

interface SearchKeywordProps {
  className?: string;
  type: "recent" | "save" | "keyword";
  option: string;
}

const SearchKeyword = ({ className, type, option }: SearchKeywordProps) => {
  const classNames = joinClassNames([styles["search__keyword"], className]);

  const { keyword } = useSearchContext();

  //
  const splitKeyword = option.split(keyword);

  for (let i = 0; i < splitKeyword.length; i++) {
    if (i % 2 !== 0) splitKeyword.splice(i, 0, keyword);
  }

  return (
    <div className={classNames}>
      {splitKeyword.length > 1 && (
        <div className={styles["search__icon"]}>
          <div className={styles["icon__wrapper"]}>
            <LuSearch className={styles["icon"]} />
          </div>
        </div>
      )}
      <div className={styles["keyword"]}>
        {type === "keyword" ? (
          splitKeyword.length > 1 ? (
            <div className={styles["keyword__wrapper"]}>
              <Text>
                {splitKeyword.map((divide) => (
                  <span
                    className={joinClassNames([
                      divide === keyword ? styles["normal"] : styles["bold"],
                    ])}
                  >
                    {divide}
                  </span>
                ))}
              </Text>
              <Text className={styles["trend"]}>실시간 트렌드</Text>
            </div>
          ) : (
            <Text>{`"${keyword}" 검색`}</Text>
          )
        ) : (
          <Text>{option}</Text>
        )}
      </div>
      {type !== "keyword" && (
        <div className={styles["delete__icon"]}>
          <div
            className={joinClassNames([
              type === "recent"
                ? styles["delete__icon__container"]
                : styles["trash__icon__container"],
            ])}
            onClick={type === "recent" ? () => {} : () => {}}
          >
            <div className={styles["icon__wrapper"]}>
              {type === "recent" ? (
                <LuX className={styles["icon"]} />
              ) : (
                <LuTrash2 className={styles["icon"]} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchKeyword;
