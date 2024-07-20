import { useState } from 'react'


import AddTodo from './Components/AddTodo'
import Todos from './Components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
