import { useState } from 'react'
import LogInSignUp from './components/authComponents/LogInSignUp.jsx'
import Post from './components/blogPostComponents/Post.jsx'
import postData from './testData.js'
import './App.css'

function App({

}) {
  const [showPosts,setShowPosts] = useState(false)
  const [showAuth,setShowAuth] = useState(true)
  const [isLoggedIn,setIsLoggedIn] = useState(true)

  const listPosts = postData.map(post => {
    return <Post key={post.id} data={post} />
  })

  // state related functions
  function handlePostToggle() {
    setShowPosts(true)
    setShowAuth(false)
  }
  function handleAuthToggle() {
    setShowAuth(true)
    setShowPosts(false)
  }

  return (
    <>
      <LogInSignUp />
      {/* {listPosts} */}
    </>
  )
}

export default App
