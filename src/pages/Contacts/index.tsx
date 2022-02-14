import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getContacts } from "../../redux/actions/ContactsActions";
import ContactsItems from "../../components/ContactsComponent/ContactsItems";
import Search from "../../components/Search";
import IContactsData from "../../redux/types/IContactsData";
import styles from "./Contacts.module.scss";
import useFilter from "../../hooks/useFilter";
function Contacts() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.ContactsReducer);
  React.useEffect(() => {
    dispatch(getContacts());
  }, []);

  const [filteredValue, onFilter] = useFilter(data);

  return (
    <main className={styles.contacts}>
      <Search onFilter={onFilter} />
      <ContactsItems filteredValue={filteredValue} />
    </main>
  );
}

export default Contacts;
