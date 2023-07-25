import {useState} from "react";
import {Users} from "./components/Users/Users";
import {Posts} from "./Posts/Posts";


function App() {
    const [userId, setUserId] = useState(null);

    return <>
        <Users setUserId={setUserId}/>
        <hr/>
        <Posts userId={userId}/>
        {/*{userId && <Posts userId={userId}/>}*/}
    </>
}

export {App};