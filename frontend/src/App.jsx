import { useState } from 'react'
import Nevbar from './components/Nevbar'
import Form from './components/Form'
import BookCards from './components/BookCards'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nevbar/>
    <Form/>
    <div className='flex flex-wrap gap-6 p-6 '><BookCards/></div>
   
    </>
  )
}

export default App
