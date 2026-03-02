import Nav from "../Nav";
import Post from "../blogPostComponents/Post";
import Topic from "../blogPostComponents/Topic";
import { topicList, postData } from "../../testData";
import '../../styles/ViewPosts.css'

export function ViewPosts({
    postData
}) {

    const listPosts = postData.map(post => {
        return <Post key={post.id} data={post} />
    })
    const listTopics = topicList.map(topic => {
        return <Topic topicData={topic} />
    })

    return (
        <>
            <Nav />
            <div className="posts-page">
                <div className="topics-container">
                    {listTopics}
                </div>
                <div className="posts-container">
                    {listPosts}
                </div>
            </div>
        </>
    )
}
export default ViewPosts;

/* 
    *** To Do ***
    - Page Elements
        * Navigation
        * Topics
        * PostViewer - take render logic from App.jsx
    - States
        *
*/