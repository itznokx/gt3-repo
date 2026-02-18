import { useState } from 'react'
import Paths from './routes/Paths'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Paths/>
    </>
  )
}

export default App
