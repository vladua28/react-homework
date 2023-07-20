const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div>
            <h3>postID: {postId}</h3>
            <h3>id: {id}</h3>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>body: {body}</p>
            <hr/>
        </div>
    );
};

export {Comment};