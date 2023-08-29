const User = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <div>email:{email}</div>
            <button>Update</button>
            <button>Delete</button>
        </div>
    );
};

export {User};