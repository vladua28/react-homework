const Album = ({album}) => {
    const {userId, id, title} = album;
    return (
        <div>
            <h3>userID: {userId}</h3>
            <h3>id: {id}</h3>
            <p>title: {title}</p>
            <hr/>
        </div>
    );
};

export {Album};