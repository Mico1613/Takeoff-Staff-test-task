import React from "react";
import { useAppSelector } from "../../../hooks/redux-hooks";
import IContactsData from "../../../redux/types/IContactsData";
import ContactItem from "../ContactItem";
import styles from "./ContactsItems.module.scss";
type Props = {};

function ContactsItems({}: Props) {
  const { data } = useAppSelector((state) => state.ContactsReducer);
  console.log(data);

  return (
    <div className={styles.wrapper}>
      {data.map((item, index) => {
        return <ContactItem key={`${item.id}_${index}`} item={item} />;
      })}
    </div>
  );
}

export default ContactsItems;
