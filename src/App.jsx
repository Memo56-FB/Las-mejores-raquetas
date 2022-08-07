import './App.scss'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'

function App () {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
    </>
  )
}

export default App