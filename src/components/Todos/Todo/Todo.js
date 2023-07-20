const Todo = ({todo}) => {
    const {userId, id, title, completed} = todo;
    return (
        <div>
            <h3>userID: {userId}</h3>
            <h3>id: {id}</h3>
            <p>title: {title}</p>
            <p>completed: {completed ? "Completed" : "Not completed"}</p>
            <hr/>
        </div>
    );
};

export {Todo};