import React from "react";
import { useAppDispatch } from "../../../hooks/redux-hooks";
import { removeContact } from "../../../redux/actions/ContactsActions";
import IContactsData from "../../../redux/types/IContactsData";
import RemoveSvg from "../../Svgs/RemoveSvg";
import styles from "./ContactItem.module.scss";
type Props = {
  item: IContactsData;
};

const ContactItem = React.memo(({ item }: Props) => {
  const dispatch = useAppDispatch();
  const onRemoveContact = () => {
    dispatch(removeContact(item.id));
  };

  return (
    <div className={styles.contact}>
      <i className={styles.removeSvg} onClick={onRemoveContact}>
        <RemoveSvg />
      </i>
      <p>{item.name}</p>
      <p>E-mail: {item.email}</p>
      <p>Phone: {item.phone}</p>
      <p>
        Address: {item.city}, {item.street}
      </p>
      <p>Company: {item.company}</p>
    </div>
  );
});

export default ContactItem;
