const UserAddress = ({address}) => {

const {street, suite, city} = address;

    return (
        <div>
            <h3>User Address</h3>
            <p>Street: {street}</p>
            <p>Suite: {suite}</p>
            <p>City: {city}</p>
        </div>
    );
}

export {UserAddress};