import React from "react";
import IContactsData from "../../../redux/types/IContactsData";
import ContactItem from "../ContactItem";
import styles from "./ContactsItems.module.scss";

type Props = {
  filteredValue: IContactsData[] | undefined;
};

const ContactsItems = React.memo(({ filteredValue }: Props) => {
  return (
    <div className={styles.wrapper}>
      {filteredValue?.map((item, index) => {
        return (
            <ContactItem
              key={`${item.id}_${index}`}
              item={item}
            />
        );
      })}
    </div>
  );
})

export default ContactsItems;
