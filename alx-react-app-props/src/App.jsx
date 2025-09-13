import { useState } from 'react'
import { UserContext } from './components/UserContext'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

function App() {
  
  const [userData] = useState({
    name: 'Ken',
    age: 21,
    bio: 'Aspiring Front-End engineer.',
  })

  return (
    <UserContext.Provider value={userData}>
      <Header />
      <MainContent />
      <Footer />
      <div>
        {/* No need to pass props manually anymore! */}
        <UserProfile />
      </div>
      {/* <WelcomeMessage /> */}
    </UserContext.Provider>
  )
}

export default App
