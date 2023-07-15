const UserDetails = ({data}) => {

    const {id, name, username, email} = data;

    return (
        <div>
            <h3>User Details</h3>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export {UserDetails};