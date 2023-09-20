import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";
import {createContext, useState} from "react";

const CarContext = createContext(null);

const CarsContainer = () => {
    const [trigger, setTrigger] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);

    return (
        <CarContext.Provider value={{
            trigger,
            setTrigger: () => setTrigger(prevState => !prevState),
            carForUpdate,
            setCarForUpdate
        }}>
            <div>
                <CarForm/>
                <hr/>
                <Cars/>
            </div>
        </CarContext.Provider>
    );
};

export {CarsContainer, CarContext};