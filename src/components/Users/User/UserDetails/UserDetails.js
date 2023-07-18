const UserDetails = ({data}) => {

    const {id, name, username, email} = data;

    return (
        <div>
            <h3>ID: {id}</h3>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export {UserDetails};