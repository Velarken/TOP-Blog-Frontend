export function Topic({
    topicData
}) {

    return (
        <div className="topic">
            <h3>{topicData.topic}</h3>
            <p>{topicData.postCount} posts in this topic.</p>
        </div>
    )
}
export default Topic;