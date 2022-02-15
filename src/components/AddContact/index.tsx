import useAddContact from "../../hooks/useAddContact";
import usePopupController from "../../hooks/usePopupController";
import PlusSvg from "../Svgs/PlusSvg";
import styles from "./AddContact.module.scss";

type Props = {};

function AddContact({}: Props) {
  const [isOpenedWindow, setIsOpenedWindow, windowRef] = usePopupController();
  const [formValue, handleChange, handleSubmit] =
    useAddContact(setIsOpenedWindow);

  return (
    <div className={styles.addContact}>
      <button onClick={() => setIsOpenedWindow(true)} className={styles.btn}>
        <PlusSvg />
        <p>Добавить контакт</p>
      </button>
      {isOpenedWindow && (
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
      )}
    </div>
  );
}

export default AddContact;
