const Post = ({post}) => {
    const {id, userId, title, body} = post;
    return (
        <div>
            <h2>id: {id}</h2>
            <h2>userId: {userId}</h2>
            <p>title: {title}</p>
            <p>body: {body}</p>
        </div>
    );
};

export {Post};