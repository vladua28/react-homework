import {useForm} from "react-hook-form";
import {useContext, useState} from "react";
import Joi from "joi";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../../services/carService";
import {CarContext} from "../CarsContainer";

const schema = Joi.object({
    brand: Joi.string().required(),
    price: Joi.number().required(),
    year: Joi.number().required().min(1990).max(new Date().getFullYear())
})

const CarForm = () => {
    const [errors, setErrors] = useState(null);
    const {register, handleSubmit, reset, formState: {isValid}, setValue} = useForm({
        resolver: joiResolver(schema)
    });

    const {setTrigger, carForUpdate, setCarForUpdate} = useContext(CarContext);

    const save = async (car) => {
        try {
            await carService.create(car);
            reset();
            setTrigger();
            setCarForUpdate(null);
        } catch (e) {
            setErrors(e.response.data);
        }
    };


    const update = async (car) => {
        try {
            await carService.updateById(carForUpdate.id, car);
            setErrors(null);
            reset();
            setTrigger();
        } catch (e) {
            setErrors(e.response.data);
        }
    }

    if (carForUpdate) {
        setValue('', carForUpdate.brand);
        setValue('', carForUpdate.price);
        setValue('', carForUpdate.year);
    }


    return (
        <form onSubmit={handleSubmit(!carForUpdate ? save : update)} style={{display: 'flex', flexDirection: 'column'}}>
            <label><input placeholder={'brand'} {...register('brand')}/></label>
            <label><input placeholder={'price'} {...register('price')}/></label>
            <label><input placeholder={'year'} {...register('year')}/></label>
            <button style={{width: '100px'}}>{!carForUpdate ? 'Update' : 'Save'}</button>
        </form>
    );
};

export {CarForm};