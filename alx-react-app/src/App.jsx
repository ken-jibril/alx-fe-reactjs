import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import App from './App.css'

function App() {
  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <div>
        <UserProfile name='Ken' age={21} bio='Aspiring Front-End Developer' />
      </div>
    </>
  )
}

export default App
