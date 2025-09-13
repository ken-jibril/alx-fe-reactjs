import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'
import ProfilePage from './components/ProfilePage'
import UserContext from './UserContext'

function App() {

  const userData = { name: 'Jane Doe', email: 'jane.doe@example.com'};
  return (
    <>
      <UserContext.Provider value>
        <ProfilePage />
      </UserContext.Provider>
      <Header />
      <MainContent />
      <Counter />
      <div>
        <UserProfile name='Alice' age={25} bio='Loves hiking and photography' />
        <UserProfile name='Ken' age={21} bio='Aspiring Front-End engineer.' />
      </div>
      <Footer />
      {/* <WelcomeMessage /> */}
    </>
  )
}

export default App
