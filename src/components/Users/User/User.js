const User = ({user, setUserId}) => {
    const {id, name, username} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>user: {name}</div>
            <div>username: {username}</div>
            <button onClick={() => setUserId(id)}>Get Posts</button>
        </div>
    );
};

export {User};