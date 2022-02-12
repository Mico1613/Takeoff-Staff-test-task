import React from "react";
import IContactsData from "../../../redux/types/IContactsData";
import styles from "./ContactItem.module.scss";
type Props = {
  item: IContactsData;
};

function ContactItem({ item }: Props) {
  return (
    <div className={styles.contact}>
      <p>{item.name}</p>
      <p>E-mail: {item.email}</p>
      <p>Phone: {item.phone}</p>
      <p>
        Address: {item.city}, {item.street}
      </p>
      <p>Company: {item.company}</p>
    </div>
  );
}

export default ContactItem;
