import { useEffect, useState } from "react";
import IContactsData from "../redux/types/IContactsData";

export default function useFilter(data: IContactsData[]) {
  const [filteredValue, setFilteredValue] = useState<IContactsData[]>(data);

  useEffect(() => {
    if (data) {
      setFilteredValue(data);
    }
  }, [data]);

  function onFilter(text: string) {
    const filteredData = data.filter((item) =>
      JSON.stringify(item)
        .toLocaleLowerCase()
        .trim()
        .includes(text.toLocaleLowerCase().trim())
    );
    setFilteredValue(filteredData);
  }

  return [filteredValue, onFilter] as const;
}
