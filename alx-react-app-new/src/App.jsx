import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Counter />
      <Footer />
      <div>
        <UserProfile name='Alice' age={25} bio='Loves hiking and photography' />
        <UserProfile name='Ken' age={21} bio='Aspiring Front-End engineer.' />
      </div>
      {/* <WelcomeMessage /> */}
    </>
  )
}

export default App
