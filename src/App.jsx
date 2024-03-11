import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyRichTextEditor from './components/MyRichTextEditor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyRichTextEditor />
    </>
  )
}

export default App
