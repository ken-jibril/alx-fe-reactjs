import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm'
import formikForm from './components/formikForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1>Hello World🖐</h1>
        <RegistrationForm />
        <formikForm />
    </>
  )
}

export default App
