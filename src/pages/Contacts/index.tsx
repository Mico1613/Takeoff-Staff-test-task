import axios from "axios";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getContacts } from "../../redux/actions/ContactsActions";
import ContactsItems from "../../components/ContactsComponent/ContactsItems";

function Contacts() {
  React.useEffect(() => {
    dispatch(getContacts());
  }, []);

  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.ContactsReducer);

  console.log(state);

  return (
    <div>
      <ContactsItems />
    </div>
  );
}

export default Contacts;
