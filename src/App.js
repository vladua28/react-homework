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


//context
// Зробити структуру компонентів -
//                               App
//           Child1                              Child2
// SubChild1_1    SubChild1_2          SubChild2_1    SubChild2_2
//
// Тепер завдання:
// З SubChild2_2 передати данні (будь-які) в SubChild1_1
//
//
//
// ***
// Я б для себе рекомендував зробити наступну штуку з завданням з subChild:
// Зробити його спочатку без використання контексту, а потім переробити з ним. Так краще дійде суть