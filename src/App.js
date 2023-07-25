import {Child1} from "./components/Child1/Child1";
import {Child2} from "./components/Child2/Child2";
import {createContext, useContext} from "react";

const Context = createContext({});

function App() {
    return <>
        <Context.Provider value={{}}>
            <Child1/>
            <hr/>
            <Child2/>
        </Context.Provider>
    </>
}

export {App, Context};

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
