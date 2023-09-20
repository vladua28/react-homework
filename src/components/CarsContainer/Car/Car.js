import {carService} from "../../../services/carService";
import {CarContext} from "../CarsContainer";
import {useContext} from "react";

const Car = ({car}) => {
    const {id, brand, price, year} = car;

    const {setTrigger, setCarForUpdate} = useContext(CarContext);

    const deleteCar = async () => {
        try {
            await carService.deleteById(id)
        } catch (e) {
            console.log(e.response.data);
        }

        setCarForUpdate();
    };

    const updateCar = async () => {
        try {
            await carService.updateById(id)
        } catch (e) {
            console.log(e.response.data);
        }

        setTrigger();
    };
    return (
        <>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={deleteCar}>Delete</button>
        </>
    );
};

export {Car};