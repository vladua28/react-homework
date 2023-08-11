import {useState} from "react";

const CommentForm = ({setOnSave}) => {

    const initialState = {
        name: '',
        email: '',
        body: ''
    }

    const [comment, setComment] = useState(initialState)
    const inputHandle = (e) => {
        setComment(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            headers: {'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(comment)
        }).then(value => value.json()).then(() => setOnSave(prev => !prev))
        setComment(initialState)
        console.log(comment)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div><label>name: <input type={"text"} value={comment.name} name={'name'} onChange={inputHandle}
                                     required={true}/></label>
            </div>
            <div><label>email: <input type={"text"} value={comment.email} name={'email'}
                                      onChange={inputHandle} required={true}/></label>
            </div>
            <div><label>body: <input type={"text"} value={comment.body} name={'body'} onChange={inputHandle}
                                     required={true}/></label>
            </div>
            <button>Save</button>
        </form>
    );
};

export {CommentForm};