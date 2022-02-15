import { useAppDispatch } from "../../hooks/redux-hooks";
import { closeRegistrationWindow } from "../../redux/actions/LoginActions";
import ArrowBackSvg from "../Svgs/ArrowBackSvg";
import styles from "./ArrowBack.module.scss";

function ArrowBack() {
  const dispatch = useAppDispatch();
  const onCloseRegistrationWindow = () => {
    dispatch(closeRegistrationWindow);
  };
  return (
    <i className={styles.svgWrapper}>
      <button onClick={onCloseRegistrationWindow}>
        <ArrowBackSvg />
      </button>
    </i>
  );
}

export default ArrowBack;
