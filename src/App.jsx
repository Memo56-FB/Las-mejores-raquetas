import './App.scss'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'

function App () {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
