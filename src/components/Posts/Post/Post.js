import {useState} from "react";
import {PostDetails} from "./PostDetails";

export const Post = ({post}) => {
    const {id, title} = post;
    const [isShow, setIsShow] = useState(false);

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={() => setIsShow(!isShow)}>
                {isShow ? 'Hide details' : 'Show details'}
            </button>
            {isShow && <PostDetails post={post}/>}
        </div>
    );
};