import './App.css'
import { LogInSignUp } from './components/authComponents/LogInSignUp.jsx'
import Post from './components/blogPostComponents/Post.jsx'
import postData from './testData.js'

function App() {

    const listPosts = postData.map(post => {
        return <Post key={post.id} data={post} />
    })
  return (
    <>
      {/* <LogInSignUp /> */}
      {listPosts}
    </>
  )
}

export default App
