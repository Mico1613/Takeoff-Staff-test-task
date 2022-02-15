import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
