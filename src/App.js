import {Users} from "./components/Users/Users";
import {useEffect, useState} from "react";


const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setUsers(users));
  })

  return (
    <><Users users={users}/></>
  );
}

export {App};
