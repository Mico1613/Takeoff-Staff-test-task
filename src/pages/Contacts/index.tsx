import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getContacts } from "../../redux/actions/ContactsActions";
import ContactsItems from "../../components/ContactsComponent/ContactsItems";
import Search from "../../components/Search";
import IContactsData from "../../redux/types/IContactsData";

function Contacts() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.ContactsReducer);
  React.useEffect(() => {
    dispatch(getContacts());
  }, []);

  React.useEffect(() => {
    if (data) {
      setFilteredValue(data);
    }
  }, [data]);

  const [filteredValue, setFilteredValue] = useState<IContactsData[]>(data);

  function onFilter(text: string) {
    const filteredData = data.filter((item) =>
      JSON.stringify(item)
        .toLocaleLowerCase()
        .trim()
        .includes(text.toLocaleLowerCase().trim())
    );
    setFilteredValue(filteredData);
  }
  return (
    <main>
      <Search onFilter={onFilter} />
      <ContactsItems filteredValue={filteredValue} />
    </main>
  );
}

export default Contacts;
