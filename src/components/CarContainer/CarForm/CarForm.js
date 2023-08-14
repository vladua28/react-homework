import {useState} from "react";

const CarForm = ({setOnSave}) => {
    const initialState = {
        brand: '',
        price: '',
        year: ''
    }

    const [car, setCar] = useState(initialState);

    const inputHandle = (e) => {
        setCar(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(car),
            method: 'POST'
        }).then(value => value.json()).then(() => {
            setOnSave(prev => !prev)
            setCar(initialState)
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div><label>brand: <input type={'text'} name={'brand'} value={car.brand} onChange={inputHandle}
                                      required={true}/></label></div>
            <div><label>price: <input type={'text'} name={'price'} value={car.price} onChange={inputHandle}
                                      required={true}/></label></div>
            <div><label>year: <input type={'text'} name={'year'} value={car.year} onChange={inputHandle}
                                     required={true}/></label></div>
            <button>Save</button>
        </form>
    );
};

export {CarForm};