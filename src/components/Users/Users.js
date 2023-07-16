import {useEffect, useState} from "react";
import {User} from "./User/User";

const Users = ({setUserId}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(user => setUsers(user));
    })
    return (
        <div>
            {users.map(user => <User key={user.id} user={user} setUserId={setUserId}/>)}
        </div>
    );
};

export {Users};