import { useState } from 'react';
import Comment from './Comment.jsx';
import '../../styles/Post.css'

export function Post({
    data
}) {
    const [commentsOpen,setCommentsOpen] = useState(false)

    const comments = data.comments

    const listComments = comments.map(comment => {
        return <Comment data={comment}/>
    })
    function handleCommentToggle() {
        setCommentsOpen(!commentsOpen)
    }
    return (
        <div className="post-card">
            <div className="post-head">
                <h3>{data.post_title}</h3>
                <p>{data.username} {data.updated_at}</p>
            </div>
            <div className="post-body">
                <p>{data.post_content}</p>
            </div>
            <button className="toggle-comments" onClick={handleCommentToggle}>
                {commentsOpen
                ? "Hide Comments"
                : "Show Comments"
                }
            </button>
            <div className={commentsOpen ? "post-comments" : "hidden"}>
                {listComments}
            </div>
            
        </div>
    )
}
export default Post;