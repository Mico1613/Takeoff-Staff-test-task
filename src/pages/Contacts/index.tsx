import axios from "axios";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getContacts } from "../../redux/actions/ContactsActions";
import ContactsItems from "../../components/ContactsComponent/ContactsItems";
import Search from "../../components/Search";
import IContactsData from "../../redux/types/IContactsData";

function Contacts() {
  React.useEffect(() => {
    dispatch(getContacts());
  }, []);

  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.ContactsReducer);

  const [filteredValue, setFilteredValue] = useState<IContactsData[]>(data);
  function onFilter(text: string) {
    const kek = data.filter((item) =>
      JSON.stringify(item)
        .toLocaleLowerCase()
        .trim()
        .includes(text.toLocaleLowerCase().trim())
    );
    setFilteredValue(kek);
  }
  return (
    <div>
      <Search onFilter={onFilter} />
      <ContactsItems filteredValue={filteredValue} />
    </div>
  );
}

export default Contacts;
