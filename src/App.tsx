import './App.css'
import Footer from './components/layout/footer/footer.components'
import Navigation from './components/layout/navigation/navigation.component'
import SignMsg from './components/common/signMsg/signMsg.component'
import Home from './pages/home/home.component'
function App() {

  return (
    <>
      <header>
        <SignMsg/>
        <Navigation></Navigation>
      </header>
      <main>
        <Home></Home>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
