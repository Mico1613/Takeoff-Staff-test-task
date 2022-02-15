import { RefObject } from "react";
import useAddContact from "../../../hooks/useAddContact";
import styles from "./Modal.module.scss";

type Props = {
  setIsOpenedWindow: React.Dispatch<React.SetStateAction<boolean>>;
  windowRef: RefObject<HTMLDivElement>;
};

function Modal({ setIsOpenedWindow, windowRef }: Props) {
  const [formValue, handleChange, handleSubmit] =
    useAddContact(setIsOpenedWindow);

  return (
    <div className={styles.background} ref={windowRef}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {Object.keys(formValue).map((i, index) => {
          return (
            <span key={`${i}_${index}`}>
              <label>{i[0].toLocaleUpperCase() + i.substring(1)}:</label>
              <input name={i} type="text" onChange={handleChange} />
            </span>
          );
        })}
        <button type="submit" className={styles.addUserBtn}>
          Добавить контакт
        </button>
      </form>
    </div>
  );
}

export default Modal;
