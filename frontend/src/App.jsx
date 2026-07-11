import { useState } from 'react'
import Nevbar from './components/Nevbar'
import Form from './components/Form'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nevbar/>
    <Form/>
   
    </>
  )
}

export default App
