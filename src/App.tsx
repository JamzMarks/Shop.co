import './App.css'
import Footer from './components/layout/footer/footer.components'
import Navigation from './components/layout/navigation/navigation.component'
import SignMsg from './components/common/signMsg/signMsg.component'
import AppRoutes from './routes/routes'
function App() {

  return (
    <>
      <header>
        <SignMsg/>
        <Navigation></Navigation>
      </header>
      <main>
        <AppRoutes></AppRoutes>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
