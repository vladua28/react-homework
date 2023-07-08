import PostComponent from "./Post/Post";
import { useEffect, useState } from "react";

export const PostContainer = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((posts) => {
                setPosts(posts);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const showDetails = (postId) => {
        setSelectedPostId(postId);
    };

    return (
        <>
            {posts.map((post) => (
                <PostComponent
                    key={post.id}
                    post={post}
                    showDetails={showDetails}
                    showFullDetails={selectedPostId === post.id}
                />
            ))}
        </>
    );
};
