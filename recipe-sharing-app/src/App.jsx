import { useState } from 'react'
import RecipeList from './components/RecipeList'
import RecipeForm from './components/RecipeForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecipeList />
      <RecipeForm />
    </>
  )
}

export default App
