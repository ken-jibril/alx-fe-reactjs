import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1>Hello World🖐</h1>
        <RegistrationForm />
    </>
  )
}

export default App
