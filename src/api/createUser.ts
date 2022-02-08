import axios from "axios";
import { v4 as uuid } from "uuid";
export default function createUser(login: string, password: string) {
  axios.post("http://localhost:3001/accounts", {
    id: uuid(),
    login,
    password,
  });
}
