import {CommentForm} from "./CommentForm/CommentForm";
import {Comments} from "./Comments/Comments";
import {useState} from "react";

const CommentContainer = () => {
    const [onSave, setOnSave] = useState(null);
    return (
        <div>
            <CommentForm setOnSave={setOnSave}/>
            <hr/>
            <Comments onSave={onSave}/>
        </div>
    );
};

export {CommentContainer};