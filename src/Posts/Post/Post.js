const Post = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            <h3>userID: {userId}</h3>
            <h3>id: {id}</h3>
            <p>title: {title}</p>
            <p>body: {body}</p>
            <hr/>
        </div>
    );
};

export {Post};