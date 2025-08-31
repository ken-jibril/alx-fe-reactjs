import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

function App() {
  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <div>
        <UserProfile name='Alice' age={25} bio='Loves hiking and photography' />
        <UserProfile name='Ken' age={21} bio='Aspiring Front-End engineer.' />
      </div>
    </>
  )
}

export default App
