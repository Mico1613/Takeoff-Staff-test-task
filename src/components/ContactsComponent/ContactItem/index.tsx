import React, { useState } from "react";
import { useAppDispatch } from "../../../hooks/redux-hooks";
import usePopupController from "../../../hooks/usePopupController";
import { removeContact } from "../../../redux/actions/ContactsActions";
import IContactsData from "../../../redux/types/IContactsData";
import EditSvg from "../../Svgs/EditSvg";
import RemoveSvg from "../../Svgs/RemoveSvg";
import EditModal from "../EditModal";
import styles from "./ContactItem.module.scss";
type Props = {
  item: IContactsData;
};

const ContactItem = React.memo(({ item }: Props) => {
  const [isOpenedWindow, setIsOpenedWindow, windowRef] = usePopupController();
  const dispatch = useAppDispatch();
  const onRemoveContact = () => {
    dispatch(removeContact(item.id));
  };
  const onOpenModal = () => {
    setIsOpenedWindow(true);
  };

  return (
    <div className={styles.contact}>
      <div className={styles.svgsWrapper}>
        <i className={styles.editSvg} onClick={onOpenModal}>
          <EditSvg />
        </i>
        <i className={styles.removeSvg} onClick={onRemoveContact}>
          <RemoveSvg />
        </i>
      </div>
      <p title={item.name}>{item.name}</p>
      <p title={item.email}>E-mail: {item.email}</p>
      <p title={item.phone}>Phone: {item.phone}</p>
      <p title={item.city}>City: {item.city}</p>
      <p title={item.street}>Street: {item.street}</p>
      <p title={item.company}>Company: {item.company}</p>
      {isOpenedWindow && <EditModal item={item} windowRef={windowRef} setIsOpenedWindow={setIsOpenedWindow}/>}
    </div>
  );
});

export default ContactItem;
