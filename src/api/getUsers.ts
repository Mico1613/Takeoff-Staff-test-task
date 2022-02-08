import axios from "axios";

export default async function getUsers() {
  const resp = await axios.get("http://localhost:3001/accounts");
  return resp.data;
}
