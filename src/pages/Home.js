import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  // use navigate hooks
  let navigate = useNavigate();
  // use state hooks
  let [users, setUsers] = useState([]);
  // use effect hooks
  useEffect(() => {
    async function getUsers() {
      let request = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "get",
      });
      let response = await request.json();
      setUsers(response);
    }
    getUsers().then((warningHandle) => warningHandle);
  }, []);
  // evend handler
  function goToUserDetail(id) {
    // code text 0004, contoh cara pembuatan navigate with hook and share parameters value.
    navigate(`/user/${id}`);
  }
  return (
    <>
      <h4>home</h4>
      <hr />
      <h3>users list</h3>
      {users.map((u) => (
        <p key={u.id}>
          {u.name}{" "}
          <button onClick={() => goToUserDetail(u.id)}>
            go to user detail
          </button>
        </p>
      ))}
    </>
  );
};
