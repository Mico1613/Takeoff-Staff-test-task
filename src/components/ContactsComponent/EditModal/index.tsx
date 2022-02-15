import { RefObject } from "react";
import { useAppDispatch } from "../../../hooks/redux-hooks";
import useEditContact from "../../../hooks/useEditContact";
import { editContact } from "../../../redux/actions/ContactsActions";
import IContactsData from "../../../redux/types/IContactsData";
import styles from "./EditModal.module.scss";
type Props = {
  item: IContactsData;
  windowRef: RefObject<HTMLDivElement>;
  setIsOpenedWindow: React.Dispatch<React.SetStateAction<boolean>>;
};

function EditModal({ item, windowRef, setIsOpenedWindow }: Props) {
  const [formValue, handleChange] = useEditContact(item);
  const dispatch = useAppDispatch();
  const onEditContact = () => {
    dispatch(editContact(formValue));
    setIsOpenedWindow(false);
  };

  return (
    <div className={styles.background} ref={windowRef}>
      <div className={styles.modal}>
        {Object.keys(formValue).map((i, index) => {
          if (i !== "id") {
            return (
              <input
                key={`${i}_${index}`}
                name={i}
                type="text"
                onChange={handleChange}
                defaultValue={item[i as keyof typeof formValue]}
              />
            );
          }
        })}
        <button onClick={onEditContact} className={styles.editBtn}>Изменить контакт</button>
      </div>
    </div>
  );
}

export default EditModal;
