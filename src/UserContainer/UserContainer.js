import {UserForm} from "./UserForm/UserForm";
import {Users} from "./Users/Users";
import {useState} from "react";

const UserContainer = () => {
    const [onSave, setOnSave] = useState(null)
    return (
        <div>
            <UserForm setOnSave={setOnSave}/>
            <hr/>
            <Users onSave={onSave}/>
        </div>
    );
};

export {UserContainer};