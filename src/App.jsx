import { useState } from 'react'
import QuizSettings from './componente/QuizSettings'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<QuizSettings/>
    </>
  )
}

export default App
