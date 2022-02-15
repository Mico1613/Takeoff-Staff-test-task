import useAddContact from "../../hooks/useAddContact";
import usePopupController from "../../hooks/usePopupController";
import Modal from "./Modal";
import PlusSvg from "../Svgs/PlusSvg";
import styles from "./AddContact.module.scss";

type Props = {};

function AddContact({}: Props) {
  const [isOpenedWindow, setIsOpenedWindow, windowRef] = usePopupController();

  return (
    <div className={styles.addContact}>
      <button onClick={() => setIsOpenedWindow(true)} className={styles.btn}>
        <PlusSvg />
        <p>Добавить контакт</p>
      </button>
      {isOpenedWindow && (
        <Modal windowRef={windowRef} setIsOpenedWindow={setIsOpenedWindow} />
      )}
    </div>
  );
}

export default AddContact;
