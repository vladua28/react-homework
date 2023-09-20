import {useContext, useEffect, useState} from "react";

import {Car} from "../Car/Car";
import {carService} from "../../../services/carService";
import {CarContext} from "../CarsContainer";

const Cars = () => {
    const [cars, setCars] = useState([]);

    const {trigger} = useContext(CarContext);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, [trigger]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};