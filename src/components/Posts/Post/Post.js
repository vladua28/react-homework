import styles from './Post.module.css';

const PostComponent = (props) => {
    const { post, showDetails, showFullDetails } = props;

    return (
        <div className={styles.post}>
            <h2>{post.id}. {post.title}</h2>
            {showFullDetails && <p>{post.body}</p>}
            {!showFullDetails && (
                <button onClick={() => showDetails(post.id)}>Show details</button>
            )}
        </div>
    );
};

export default PostComponent;
