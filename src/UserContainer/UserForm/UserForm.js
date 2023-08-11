import {useState} from "react";

const UserForm = ({setOnSave}) => {

    const initialState = {
        name: '',
        username: '',
        email: ''
    }
    const [user, setUser] = useState(initialState)
    const inputHandle = (e) => {
        setUser(prev => ({...prev, [e.target.name]: e.target.value}))

    };

    const save = (e) => {
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(user)
        }).then(value => value.json()).then(() => setOnSave(prev => !prev))
        setUser(initialState)
        console.log(user)
    }

    return (
        <form onSubmit={save}>
            <div><label>name: <input type="text" value={user.name} name={'name'} onChange={inputHandle}/></label></div>
            <div><label>username: <input type="text" value={user.username} name={'username'}
                                         onChange={inputHandle}/></label></div>
            <div><label>email: <input type="text" value={user.email} name={'email'} onChange={inputHandle}/></label>
            </div>
            <button>Save</button>
        </form>
    );
};

export {UserForm};