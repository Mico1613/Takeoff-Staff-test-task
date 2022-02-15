import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getContacts } from "../../redux/actions/ContactsActions";
import ContactsItems from "../../components/ContactsComponent/ContactsItems";
import Search from "../../components/Search";
import IContactsData from "../../redux/types/IContactsData";
import styles from "./Contacts.module.scss";
import useFilter from "../../hooks/useFilter";
import AddContact from "../../components/AddContact";
function Contacts() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.ContactsReducer);
  React.useEffect(() => {
    dispatch(getContacts());
  }, []);

  const [filteredValue, onFilter] = useFilter(data);

  return (
    <main className={styles.contacts}>
      <header className={styles.headerWrapper}>
        <Search onFilter={onFilter} />
        <AddContact/>
      </header>
      <ContactsItems filteredValue={filteredValue} />
    </main>
  );
}

export default Contacts;
