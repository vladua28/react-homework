import {UserForm} from "./UserForm/UserForm";
import {Users} from "./Users/Users";
import {createContext, useState} from "react";

const Context = createContext(null);
const UserContainer = () => {
    const [trigger, setTrigger] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);

    return (
        <Context.Provider value={{
            trigger,
            setTrigger: () => setTrigger(prev => !prev),
            carForUpdate,
            setCarForUpdate
        }}>
            <div>
                <UserForm/>
                <hr/>
                <Users/>
            </div>
        </Context.Provider>
    );
};

export {UserContainer};