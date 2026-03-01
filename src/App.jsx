import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogInSignUp from './components/authComponents/LogInSignUp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LogInSignUp />
    </>
  )
}

export default App
