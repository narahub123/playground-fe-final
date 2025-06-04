import { LuSearch, LuTrash2, LuX } from "react-icons/lu";
import styles from "./SearchKeyword.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Text } from "@shared/@common/ui/components";
import { selectKeyword, toggleSavedSearches } from "@features/explore/models";
import { fetchWithAuth } from "@shared/pages";
import { useAppDispatch } from "@app/store";
import { useSelector } from "react-redux";

interface SearchKeywordProps {
  className?: string;
  type: "recent" | "save" | "keyword";
  option: string;
}

const SearchKeyword = ({ className, type, option }: SearchKeywordProps) => {
  const dispatch = useAppDispatch();
  const classNames = joinClassNames([styles["search__keyword"], className]);

  const keyword = useSelector(selectKeyword);

  //
  const splitKeyword = option !== keyword ? option.split(keyword) : [keyword];

  for (let i = 0; i < splitKeyword.length; i++) {
    if (i % 2 !== 0) splitKeyword.splice(i, 0, keyword);
  }

  const handleDeleteSavedSearches = async (option: string) => {
    try {
      const result = await fetchWithAuth(
        `/users/me`,
        { method: "PATCH" },
        {
          keyword: option,
        }
      );

      if (result.success) {
        dispatch(toggleSavedSearches(option));
      } else {
      }
    } catch (error) {}
  };

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
          <div className={styles["keyword__wrapper"]}>
            <Text>
              {splitKeyword.map((divide, index) => (
                <span
                  key={index}
                  className={joinClassNames([
                    divide === keyword ? styles["normal"] : styles["bold"],
                  ])}
                >
                  {divide}
                </span>
              ))}
            </Text>
            {/* <Text className={styles["trend"]}>실시간 트렌드</Text> */}
          </div>
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
                <LuTrash2
                  className={styles["icon"]}
                  onClick={() => handleDeleteSavedSearches(option)}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchKeyword;
