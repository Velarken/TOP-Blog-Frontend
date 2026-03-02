import { useState } from 'react'
import LogInSignUp from './components/authComponents/LogInSignUp.jsx'
import Post from './components/blogPostComponents/Post.jsx'
import {postData} from './testData.js'
import './App.css'
import ViewPosts from './components/pages/ViewPosts.jsx'

function App({

}) {
  const [showPosts,setShowPosts] = useState(false)
  const [showAuth,setShowAuth] = useState(true)
  const [isLoggedIn,setIsLoggedIn] = useState(true)

  

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
      {/* <LogInSignUp /> */}
      <ViewPosts postData={postData} />
    </>
  )
}

export default App
