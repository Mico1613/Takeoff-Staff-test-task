import React, { useEffect, useState } from "react";
import styles from "./Search.module.scss";
type Props = {
  onFilter: (text: string) => void;
};

function Search({ onFilter }: Props) {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    onFilter(inputValue);
  }, [inputValue]);

  return (
    <input
      type="text"
      placeholder="Поиск"
      className={styles.input}
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
    />
  );
}

export default Search;
