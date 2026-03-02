export function Comment({
    data,
}) {
    return (
        <div className="comment-card">
            <p className="comment-content">
                {data.content}
            </p>
            <div className="comment-info">
                <p className="username">{data.username}</p>
                <p className="updated-at">{data.updated_at}</p>
            </div>
        </div>
     )
}
export default Comment;