import {Post} from "./Post/Post";
import {useEffect, useState} from "react";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    }, []);

    return (
        <div>
            {posts.map(post => (
                <Post
                    key={post.id}
                    post={post}
                />
            ))}
        </div>
    );
};

export {Posts};