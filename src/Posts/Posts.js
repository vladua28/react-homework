import {useEffect, useState} from "react";
import {Post} from "./Post/Post";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(post => setPosts(post));
    }, [userId]);
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};